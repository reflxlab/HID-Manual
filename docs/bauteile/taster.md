# 🔘 Taster

Ein Taster liefert dem Mikrocontroller zwei klar unterscheidbare Zustände: **gedrückt** oder **losgelassen**.

In diesem Beispiel wird der interne Pull-up-Widerstand verwendet. Deshalb gilt im Programm: **gedrückt = `LOW`** und **losgelassen = `HIGH`**.

!!! warning "Vierbeinigen Taster richtig prüfen"

    Bei vielen Steckbrett-Tastern sind jeweils zwei Beine auf derselben Seite schon intern verbunden. Prüfe die Ausrichtung am echten Taster oder mit einem Multimeter.

---

## Beispielcode

Der Taster ist zwischen D4 und GND angeschlossen, die LED an D9. Solange der Taster gedrückt ist, leuchtet die LED.

```cpp
const int buttonPin = 4;
const int ledPin = 9;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  if (digitalRead(buttonPin) == LOW) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
```

??? info "Code-Erklärung"

    ### Pins festlegen

    ```cpp
    const int buttonPin = 4;
    const int ledPin = 9;
    ```

    Die beiden Konstanten speichern die Pins für Taster und LED.

    ---

    ### Taster als Eingang einstellen

    ```cpp
    pinMode(buttonPin, INPUT_PULLUP);
    ```

    `INPUT_PULLUP` aktiviert den internen Pull-up-Widerstand. Daher ist der Eingang beim Drücken `LOW` und sonst `HIGH`.

    ---

    ### Mit if entscheiden

    ```cpp
    if (digitalRead(buttonPin) == LOW) {
      digitalWrite(ledPin, HIGH);
    } else {
      digitalWrite(ledPin, LOW);
    }
    ```

    `digitalRead()` liest den Taster. Ist er gedrückt, wird die LED mit `HIGH` eingeschaltet. In allen anderen Fällen schaltet `else` die LED mit `LOW` aus.

---

!!! info "Aufgabe"

    Ändere den Sketch so, dass die LED leuchtet, wenn der Taster **nicht** gedrückt ist.
