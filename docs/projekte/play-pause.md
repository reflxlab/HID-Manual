# ⏯️ Play/Pause-Taster

Ein einzelner Taster kann Musik oder Videos am Computer starten und pausieren. Der Nano R4 sendet dafür über USB-C einen standardisierten Consumer-Control-Medienbefehl.

Der Sketch verwendet nur die im Boardpaket enthaltene Bibliothek `HID.h`. Eine zusätzliche HID-Bibliothek muss nicht installiert werden.

!!! info "Sicher testen"

    Speichere offene Arbeiten vor dem Test. Der Sketch sendet nur bei einem neuen Tastendruck, damit kein dauernder Befehlsstrom entsteht. Die Reaktion kann trotzdem vom Betriebssystem und vom geöffneten Medienprogramm abhängen.

## Aufbau / Anschlüsse

| Bauteil | Verbindung |
|---|---|
| Taster Seite 1 | D4 |
| Taster Seite 2 | GND |
| Nano R4 | USB-C-Datenkabel zum Computer |

## Beispielcode

```cpp
#include <HID.h>

const uint8_t MEDIA_REPORT_ID = 4;
const uint16_t MEDIA_PLAY_PAUSE = 0x00CD;

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

const int buttonPin = 4;
bool vorherGedrueckt = false;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  bool jetztGedrueckt = digitalRead(buttonPin) == LOW;

  if (jetztGedrueckt && !vorherGedrueckt) {
    sendeMedienbefehl(MEDIA_PLAY_PAUSE);
  }

  vorherGedrueckt = jetztGedrueckt;
  delay(20);
}
```

## Code-Erklärung

- `HID.h` ist Teil des offiziellen Nano-R4-Boardpakets.
- `mediaReportDescriptor` beschreibt dem Computer ein Consumer-Control-Gerät mit einem 16-Bit-Medienbefehl. Der Block gehört zur USB-Konfiguration und muss nicht auswendig gelernt werden.
- `sendeMedienbefehl()` sendet zuerst den Befehl und danach den Wert `0`, also das Loslassen der virtuellen Medientaste.
- Der Taster wird nur beim Übergang von losgelassen zu gedrückt ausgewertet.
- `MEDIA_PLAY_PAUSE` verwendet den standardisierten HID-Befehl `0x00CD` für Start und Pause.

## Mitmach-Aufgabe

!!! info "Mitmach-Aufgabe"

    Ergänze eine LED an D9 mit einem 470-Ω-Vorwiderstand. Sie soll bei jedem gültigen Tastendruck kurz aufblitzen, ohne dass mehrere Play/Pause-Befehle gesendet werden.
