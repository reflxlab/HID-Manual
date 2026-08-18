# 🔊 Lautstärkeregler

Ein Potentiometer steuert die Lautstärke des Computers, indem das Board Medien-Tastencodes sendet. Die Stellung ist dabei nicht absolut: Der Sketch sendet nur schrittweise **lauter** oder **leiser**.

!!! warning "TODO: Bibliothek und Betriebssystem testen"
    Dieser Entwurf verwendet die zusätzliche Bibliothek **HID-Project von NicoHood** und deren Consumer-Control-Befehle. Installation, Kompatibilität mit der eingesetzten Boarddefinition sowie das Verhalten unter Windows, macOS und Linux müssen vor dem Unterricht getestet werden.

## Aufbau / Anschlüsse

| Bauteil | Verbindung |
|---|---|
| Potentiometer aussen | VCC |
| Potentiometer Mitte | A0 |
| Potentiometer aussen | GND |
| Board | USB-C zum Computer |

## Beispielcode

```cpp
#include <HID-Project.h>

const int potPin = A0;
int aktuelleStufe = 0;

void setup() {
  Consumer.begin();
  delay(500);

  aktuelleStufe = map(analogRead(potPin), 0, 1023, 0, 20);
}

void loop() {
  int zielStufe = map(analogRead(potPin), 0, 1023, 0, 20);

  if (zielStufe > aktuelleStufe) {
    Consumer.write(MEDIA_VOLUME_UP);
    aktuelleStufe++;
  } else if (zielStufe < aktuelleStufe) {
    Consumer.write(MEDIA_VOLUME_DOWN);
    aktuelleStufe--;
  }

  delay(80);
}
```

## Code-Erklärung

- `map()` teilt den Potentiometerweg in 21 Stufen von 0 bis 20.
- `aktuelleStufe` merkt sich die zuletzt erreichte interne Stufe.
- Ist das Ziel höher, wird einmal `MEDIA_VOLUME_UP` gesendet.
- Ist das Ziel tiefer, wird einmal `MEDIA_VOLUME_DOWN` gesendet.
- Der Computer meldet seine echte Lautstärke nicht an den Sketch zurück. Nach manuellen Änderungen am Computer können Reglerstellung und Lautstärke deshalb auseinanderliegen.

## Mitmach-Aufgabe

!!! info "Mitmach-Aufgabe"
    Ändere den Bereich von 20 auf 10 Stufen und vergleiche das Gefühl beim Drehen. Entscheide danach, welche Anzahl Stufen für euren Regler am angenehmsten ist.
