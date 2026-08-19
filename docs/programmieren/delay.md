# ⏳ delay()

`delay()` pausiert den Programmablauf für eine bestimmte Anzahl Millisekunden. Der Befehl ist einfach, blockiert während der Wartezeit aber fast alle anderen Aufgaben des Sketches.

## Beispielcode

```cpp
const int ledPin = 9;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(100);

  digitalWrite(ledPin, LOW);
  delay(900);
}
```

??? info "Code-Erklärung"
    - `delay(100)` wartet 0,1 Sekunden.
    - `delay(900)` wartet 0,9 Sekunden.
    - Ein kompletter Durchlauf dauert ungefähr eine Sekunde.
    - Während einer langen `delay()`-Pause reagiert der Sketch nicht sofort auf einen Taster.

!!! note "Für später"
    In grösseren Projekten wird oft mit `millis()` statt mit langen `delay()`-Pausen gearbeitet. So kann das Board während des Wartens weitere Aufgaben erledigen.
