# 🧱 Funktionen

Eine Funktion fasst mehrere Befehle unter einem Namen zusammen. Dadurch vermeidest du Wiederholungen und kannst einen Ablauf mit unterschiedlichen Werten mehrfach verwenden.

## Beispielcode

```cpp
const int ledPin = 9;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  blinke(100, 100);
  blinke(500, 1000);
}

void blinke(int anZeit, int ausZeit) {
  digitalWrite(ledPin, HIGH);
  delay(anZeit);
  digitalWrite(ledPin, LOW);
  delay(ausZeit);
}
```

??? info "Code-Erklärung"
    - Die eigene Funktion heisst `blinke`.
    - `anZeit` und `ausZeit` sind Parameter. Beim Aufruf werden dafür konkrete Zahlen eingesetzt.
    - `blinke(100, 100)` erzeugt einen kurzen Blitz.
    - `blinke(500, 1000)` erzeugt ein längeres Leuchten mit längerer Pause.
    - `void` bedeutet, dass die Funktion keinen Wert zurückgibt.