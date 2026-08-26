# 🔊 Lautstärkeregler

Ein Potentiometer steuert die Lautstärke des Computers, indem der Nano R4 standardisierte Consumer-Control-Befehle über USB-C sendet. Die Stellung ist dabei nicht absolut: Der Sketch sendet nur schrittweise **lauter** oder **leiser**.

Der Sketch verwendet die im Nano-R4-Boardpaket enthaltene Bibliothek `HID.h`. Eine zusätzliche HID-Bibliothek muss nicht installiert werden.

!!! info "Verhalten prüfen"

    Consumer-Control-Befehle werden von Windows, macOS und Linux grundsätzlich als Medientasten erkannt. Teste vor dem Unterricht trotzdem das konkrete Betriebssystem und die verwendeten Medienprogramme.

## Aufbau / Anschlüsse

| Bauteil | Verbindung |
|---|---|
| Potentiometer aussen | 5V |
| Potentiometer Mitte | A0 |
| Potentiometer aussen | GND |
| Nano R4 | USB-C-Datenkabel zum Computer |

## Beispielcode

```cpp
#include <HID.h>

const uint8_t MEDIA_REPORT_ID = 4;
const uint16_t MEDIA_VOLUME_UP = 0x00E9;
const uint16_t MEDIA_VOLUME_DOWN = 0x00EA;

const uint8_t mediaReportDescriptor[] = {
  0x05, 0x0C,                    // Consumer-Geräte
  0x09, 0x01,                    // Consumer Control
  0xA1, 0x01,                    // Application Collection
  0x85, MEDIA_REPORT_ID,         // Report-ID 4
  0x15, 0x00,                    // Kleinster Wert 0
  0x26, 0xFF, 0x03,              // Grösster Wert 1023
  0x19, 0x00,                    // Kleinster Befehl 0
  0x2A, 0xFF, 0x03,              // Grösster Befehl 1023
  0x75, 0x10,                    // 16 Bit pro Befehl
  0x95, 0x01,                    // Ein Befehl pro Bericht
  0x81, 0x00,                    // Eingabebericht an den Computer
  0xC0                           // Collection beenden
};

struct MediaHID {
  MediaHID() {
    static HIDSubDescriptor descriptor(
      mediaReportDescriptor,
      sizeof(mediaReportDescriptor)
    );
    HID().AppendDescriptor(&descriptor);
  }
} mediaHID;

void sendeMedienbefehl(uint16_t befehl) {
  HID().SendReport(MEDIA_REPORT_ID, &befehl, sizeof(befehl));
  delay(10);

  befehl = 0;
  HID().SendReport(MEDIA_REPORT_ID, &befehl, sizeof(befehl));
}

const int potPin = A0;
int aktuelleStufe = 0;

void setup() {
  aktuelleStufe = map(analogRead(potPin), 0, 1023, 0, 20);
}

void loop() {
  int zielStufe = map(analogRead(potPin), 0, 1023, 0, 20);

  if (zielStufe > aktuelleStufe) {
    sendeMedienbefehl(MEDIA_VOLUME_UP);
    aktuelleStufe++;
  } else if (zielStufe < aktuelleStufe) {
    sendeMedienbefehl(MEDIA_VOLUME_DOWN);
    aktuelleStufe--;
  }

  delay(80);
}
```

## Code-Erklärung

- `HID.h` und `HIDSubDescriptor` stammen aus dem offiziellen Nano-R4-Boardpaket.
- `mediaReportDescriptor` meldet den Nano R4 als Consumer-Control-Gerät an. Der Block beschreibt das USB-Datenformat und muss nicht auswendig gelernt werden.
- `sendeMedienbefehl()` sendet eine virtuelle Medientaste und lässt sie danach wieder los.
- `map()` teilt den Potentiometerweg in 21 Stufen von 0 bis 20.
- Ist das Ziel höher oder tiefer, sendet der Nano R4 jeweils einen Lauter- oder Leiser-Schritt.
- Der Computer meldet seine echte Lautstärke nicht an den Sketch zurück. Nach einer Änderung am Computer können Reglerstellung und Lautstärke deshalb auseinanderliegen.

## Mitmach-Aufgabe

!!! info "Mitmach-Aufgabe"

    Ändere den Bereich von 20 auf 10 Stufen und vergleiche das Gefühl beim Drehen. Entscheide danach, welche Anzahl Stufen für euren Regler am angenehmsten ist.
