# 🔁 setup() und loop()

Jeder normale Arduino-Sketch hat einen Startteil und einen Wiederholungsteil. `setup()` läuft einmal, `loop()` wird danach so lange wiederholt, wie das Board eingeschaltet ist.

## Ablauf eines Sketches

1. Das Board startet oder wird zurückgesetzt.
2. Alle Befehle in `setup()` werden einmal ausgeführt.
3. Alle Befehle in `loop()` werden ausgeführt.
4. Am Ende von `loop()` springt das Programm wieder an deren Anfang.




## Beispielcode

```cpp
const int ledPin = LED_BUILTIN;

void setup() {
  pinMode(ledPin, OUTPUT);

  digitalWrite(ledPin, HIGH);
  delay(1500);
  digitalWrite(ledPin, LOW);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(150);
  digitalWrite(ledPin, LOW);
  delay(850);
}
```

## Code-Erklärung

Beim Einschalten leuchtet die eingebaute orange LED des Nano R4 zuerst einmal für 1,5 Sekunden. Dieses lange Leuchten steht in `setup()` und passiert deshalb nur einmal.

Danach beginnt `loop()`: Die LED leuchtet kurz und bleibt danach länger dunkel. Dieses Muster wiederholt sich ohne Ende.

- Geschweifte Klammern `{ }` zeigen, welche Befehle zu einer Funktion gehören.
- Ein Semikolon `;` beendet die meisten einzelnen Befehle.
- Die Reihenfolge der Zeilen bestimmt die Reihenfolge der Aktionen.
