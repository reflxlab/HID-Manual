# 💡 LED

Eine LED wandelt elektrischen Strom in Licht um. Sie wird mit einem Vorwiderstand an einen digitalen Ausgang angeschlossen und kann dort ein- oder ausgeschaltet werden.

---

## Beispielcode

In diesem Beispiel blinkt die LED an Digitalpin D9: Eine Sekunde an, eine Sekunde aus.

```cpp
const int ledPin = 9;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(1000);

  digitalWrite(ledPin, LOW);
  delay(1000);
}
```

??? info "Code-Erklärung"

    ### LED-Pin festlegen

    ```cpp
    const int ledPin = 9;
    ```

    `ledPin` speichert den digitalen Pin, an dem die LED angeschlossen ist.

    ---

    ### Pin als Ausgang einstellen

    ```cpp
    pinMode(ledPin, OUTPUT);
    ```

    `pinMode()` legt fest, dass der Mikrocontroller über diesen Pin ein Signal ausgibt.

    ---

    ### LED ein- und ausschalten

    ```cpp
    digitalWrite(ledPin, HIGH);
    delay(1000);

    digitalWrite(ledPin, LOW);
    delay(1000);
    ```

    `HIGH` schaltet den Pin ein, dadurch leuchtet die LED. Nach einer Sekunde schaltet `LOW` den Pin aus. `1000` Millisekunden entsprechen einer Sekunde.


!!! note "Zusatzaufgabe"

    Lass die LED kurz aufblitzen: 100 Millisekunden an und 900 Millisekunden aus.
