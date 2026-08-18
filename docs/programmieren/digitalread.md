# 👀 digitalRead()

`digitalRead()` liest einen digitalen Pin und liefert nur `HIGH` oder `LOW`. Damit kannst du eindeutige Zustände wie gedrückt oder losgelassen erkennen.

## Beispielcode

```cpp
const int buttonPin = 4;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  int zustand = digitalRead(buttonPin);

  if (zustand == LOW) {
    Serial.println("Taster gedrueckt");
  } else {
    Serial.println("Taster losgelassen");
  }

  delay(100);
}
```

## Code-Erklärung

- Vor dem Lesen muss der Pin in `setup()` als Eingang eingerichtet werden.
- Durch `INPUT_PULLUP` ist der ungedrückte Zustand `HIGH`.
- `digitalRead(buttonPin)` liest den Zustand genau in diesem Moment.
- Der serielle Monitor macht einen unsichtbaren elektrischen Zustand sichtbar.

