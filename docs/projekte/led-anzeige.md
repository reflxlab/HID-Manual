# 🎛️ LED-Lautstärkeanzeige

Eine LED-Bar zeigt die Stellung eines Potentiometers als Balken an. Das Projekt verbindet eine analoge Eingabe mit mehreren digitalen Ausgaben.

!!! warning "TODO: Hardwareumfang prüfen"
    Der Entwurf verwendet fünf einzelne LEDs. Falls eine andere LED-Bar vorhanden ist, müssen Pins, Vorwiderstände und möglicherweise eine Bibliothek angepasst werden.

## Aufbau / Anschlüsse

| Bauteil | Verbindung |
|---|---|
| Potentiometer | VCC, A0 und GND |
| LED 1 bis 5 | D4, D5, D6, D9 und D10 |
| Jede LED | Eigener Vorwiderstand und danach GND |

## Beispielcode

```cpp
const int potPin = A0;
const int ledPins[] = {4, 5, 6, 9, 10};
const int anzahlLeds = 5;

void setup() {
  for (int i = 0; i < anzahlLeds; i++) {
    pinMode(ledPins[i], OUTPUT);
  }
}

void loop() {
  int lautstaerke = analogRead(potPin);
  int balken = map(lautstaerke, 0, 1023, 0, anzahlLeds + 1);
  balken = constrain(balken, 0, anzahlLeds);

  for (int i = 0; i < anzahlLeds; i++) {
    if (i < balken) {
      digitalWrite(ledPins[i], HIGH);
    } else {
      digitalWrite(ledPins[i], LOW);
    }
  }
}
```

## Code-Erklärung

- Der Potentiometerwert wird in eine Anzahl leuchtender LEDs umgerechnet.
- Die `for`-Schleife besucht jedes Segment der Anzeige.
- Ist die Segmentnummer kleiner als der Balkenwert, wird es eingeschaltet.
- Der Sketch steuert zunächst nur die Anzeige und verändert noch nicht die echte Computerlautstärke.

## Mitmach-Aufgabe

!!! info "Mitmach-Aufgabe"
    Lass die letzte LED blinken, wenn der Messwert grösser als `950` ist. Die anderen LEDs sollen in diesem Bereich weiterhin leuchten.
