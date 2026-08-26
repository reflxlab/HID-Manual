# 🖱️ HID-Steuerungen

HID steht für **Human Interface Device**. Der Arduino Nano R4 kann sich über USB-C als Mediensteuerung am Computer anmelden. In diesem Beispiel steuern zwei Taster die Systemlautstärke: einer macht lauter, der andere leiser.


## Benötigte Library installieren

Für die Ansteuerung des LCDs wird eine **ConsumerKeyboard** Library benötigt.

Folge der [Anleitung](../erste-schritte/installLibrary.md) und installiere die für das verwendete Display passende **ConsumerKeyboard** Library.



## Beispielcode

```cpp
#include <ConsumerKeyboard.h>

const int lauterPin = 4;
const int leiserPin = 5;

void setup() {
  pinMode(lauterPin, INPUT_PULLUP);
  pinMode(leiserPin, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(lauterPin) == LOW) {
    ConsumerKeyboard.press(KEY_VOLUME_INCREMENT);
    ConsumerKeyboard.release();
  }

  if (digitalRead(leiserPin) == LOW) {
    ConsumerKeyboard.press(KEY_VOLUME_DECREMENT);
    ConsumerKeyboard.release();
  }
}
```

??? info "Code-Erklärung"

    ### Consumer-Keyboard-Bibliothek einbinden

    ```cpp
    #include <ConsumerKeyboard.h>
    ```

    `ConsumerKeyboard.h` stellt Medienbefehle wie Lauter, Leiser und Stumm bereit.

    ---

    ### Eingänge vorbereiten

    ```cpp
    pinMode(lauterPin, INPUT_PULLUP);
    pinMode(leiserPin, INPUT_PULLUP);
    ```

    `INPUT_PULLUP` aktiviert die internen Pull-up-Widerstände. Deshalb gilt im Sketch: **gedrückt = `LOW`** und **losgelassen = `HIGH`**.

    ---

    ### Lautstärke steuern

    ```cpp
    if (digitalRead(lauterPin) == LOW) {
      ConsumerKeyboard.press(KEY_VOLUME_INCREMENT);
      ConsumerKeyboard.release();
    }

    if (digitalRead(leiserPin) == LOW) {
      ConsumerKeyboard.press(KEY_VOLUME_DECREMENT);
      ConsumerKeyboard.release();
    }
    ```

    `KEY_VOLUME_INCREMENT` erhöht und `KEY_VOLUME_DECREMENT` verringert die Systemlautstärke. `release()` lässt die virtuelle Medientaste nach jedem Befehl wieder los.

    Der Sketch fragt beide Taster direkt ab. Es gibt keine Entprellung, keine Zustandsprüfung und keine zusätzliche Pause. Solange ein Taster gedrückt bleibt, werden fortlaufend Lautstärkebefehle gesendet.

!!! note "Zusatzaufgabe"

    Ergänze einen dritten Taster und verwende `KEY_MUTE`, um die Tonausgabe stummzuschalten.
