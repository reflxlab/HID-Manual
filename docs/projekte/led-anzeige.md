# 🎛️ LED-Lautstärkeanzeige

Eine LED-Bar zeigt die Stellung eines Potentiometers als Balken an. Das Projekt verbindet eine analoge Eingabe mit mehreren digitalen Ausgaben.

!!! warning "Passende Hardware verwenden"
    Der Entwurf verwendet fünf einzelne LEDs. Falls eine andere LED-Bar vorhanden ist, müssen Pins, Vorwiderstände und möglicherweise eine Bibliothek angepasst werden.

## Aufbau / Anschlüsse

| Bauteil | Verbindung |
|---|---|
| Potentiometer | 5V, A0 und GND |
| LED 1 bis 5 | D4, D5, D6, D9 und D10 |
| Jede LED | Eigener 470-Ω-Vorwiderstand und danach GND |

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

??? info "Code-Erklärung"

    ### Pins und Anzahl der LEDs festlegen

    ```cpp
    const int potPin = A0;
    const int ledPins[] = {4, 5, 6, 9, 10};
    const int anzahlLeds = 5;
    ```

    `potPin` bezeichnet den Eingang des Potentiometers. Im Array `ledPins[]` stehen die fünf LED-Pins. `anzahlLeds` wird später als Schleifengrenze verwendet.

    ---

    ### LED-Pins als Ausgänge einstellen

    ```cpp
    for (int i = 0; i < anzahlLeds; i++) {
      pinMode(ledPins[i], OUTPUT);
    }
    ```

    Die `for`-Schleife besucht jeden Eintrag des Arrays und richtet den zugehörigen Pin als Ausgang ein. Jede LED benötigt einen eigenen 470-Ω-Vorwiderstand.

    ---

    ### Messwert in einen Balken umrechnen

    ```cpp
    int lautstaerke = analogRead(potPin);
    int balken = map(lautstaerke, 0, 1023, 0, anzahlLeds + 1);
    balken = constrain(balken, 0, anzahlLeds);
    ```

    `analogRead()` liest die Stellung des Potentiometers. `map()` berechnet daraus die Anzahl der leuchtenden LEDs. `constrain()` begrenzt das Ergebnis sicher auf `0` bis `5`.

    ---

    ### LEDs ein- und ausschalten

    ```cpp
    for (int i = 0; i < anzahlLeds; i++) {
      if (i < balken) {
        digitalWrite(ledPins[i], HIGH);
      } else {
        digitalWrite(ledPins[i], LOW);
      }
    }
    ```

    Die Schleife prüft jede LED. Ist ihre Position kleiner als der Balkenwert, wird sie eingeschaltet. Alle übrigen LEDs werden ausgeschaltet.

    Der Sketch zeigt nur die Potentiometerstellung an und verändert die tatsächliche Computerlautstärke noch nicht.

!!! note "Zusatzaufgabe"

    Lass die letzte LED blinken, wenn der Messwert grösser als `950` ist. Die anderen LEDs sollen in diesem Bereich weiterhin leuchten.
