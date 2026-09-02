# 🔊 Lautstärkeregler

Ein Potentiometer steuert die Lautstärke des Computers, indem der Nano R4 standardisierte Consumer-Control-Befehle über USB-C sendet. Die Stellung ist dabei nicht absolut: Der Sketch sendet nur schrittweise **lauter** oder **leiser**.

Der Sketch verwendet ausschließlich `ConsumerKeyboard.h`. Es sind weder ein eigener HID-Report-Deskriptor noch selbst angelegte Bibliotheksdateien nötig.

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
#include <ConsumerKeyboard.h>

const int potPin = A0;
int aktuelleStufe = 0;

void setup() {
  aktuelleStufe = map(analogRead(potPin), 0, 1023, 0, 20);
}

void loop() {
  int zielStufe = map(analogRead(potPin), 0, 1023, 0, 20);

  if (zielStufe > aktuelleStufe) {
    ConsumerKeyboard.press(KEY_VOLUME_INCREMENT);
    ConsumerKeyboard.release();
    aktuelleStufe++;
  } else if (zielStufe < aktuelleStufe) {
    ConsumerKeyboard.press(KEY_VOLUME_DECREMENT);
    ConsumerKeyboard.release();
    aktuelleStufe--;
  }

  delay(80);
}
```

## Code-Erklärung

- `ConsumerKeyboard.h` stellt die fertigen Medienbefehle bereit. Es muss kein eigener HID-Report-Deskriptor angelegt werden.
- `KEY_VOLUME_INCREMENT` erhöht und `KEY_VOLUME_DECREMENT` verringert die Systemlautstärke.
- Nach jedem `press()` lässt `release()` die virtuelle Medientaste wieder los.
- `map()` teilt den Potentiometerweg in 21 Stufen von 0 bis 20.
- Ist das Ziel höher oder tiefer, sendet der Nano R4 jeweils einen Lauter- oder Leiser-Schritt.
- Der Computer meldet seine echte Lautstärke nicht an den Sketch zurück. Nach einer Änderung am Computer können Reglerstellung und Lautstärke deshalb auseinanderliegen.

## Mitmach-Aufgabe

!!! info "Mitmach-Aufgabe"

    Ändere den Bereich von 20 auf 10 Stufen und vergleiche das Gefühl beim Drehen. Entscheide danach, welche Anzahl Stufen für euren Regler am angenehmsten ist.
