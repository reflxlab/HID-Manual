# 🖱️ HID-Steuerungen

HID steht für **Human Interface Device**. Der Arduino Nano R4 kann sich über seine native USB-C-Verbindung als Tastatur oder Maus am Computer anmelden. Die dafür benötigten Bibliotheken `Keyboard` und `Mouse` sind bereits im Boardpaket **Arduino UNO R4 Boards** enthalten.

In diesem ersten Beispiel schreibt ein Taster einmal den Buchstaben `x`. So lernst du die HID-Funktion kennen, bevor du vollständige Makros oder Mediensteuerungen baust.

!!! info "HID-Code vorsichtig testen"

    Öffne vor dem Test ein leeres Textdokument und speichere deine Arbeit in anderen Programmen. Ein fehlerhafter Sketch kann sehr viele Eingaben senden. Ziehe im Notfall das USB-Kabel ab.

---

## Aufbau

Schliesse einen Taster zwischen **D4** und **GND** an. Der interne Pull-up-Widerstand des Nano R4 sorgt dafür, dass kein zusätzlicher Widerstand nötig ist.

## Beispielcode

```cpp
#include <Keyboard.h>

const int buttonPin = 4;
bool vorher = HIGH;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);

  delay(3000);
  Keyboard.begin();
}

void loop() {
  bool jetzt = digitalRead(buttonPin);

  if (jetzt == LOW && vorher == HIGH) {
    Keyboard.write('x');
  }

  vorher = jetzt;
  delay(20);
}
```

??? info "Code-Erklärung"

    ### Eingebaute Tastatur-Bibliothek einbinden

    ```cpp
    #include <Keyboard.h>
    ```

    `Keyboard.h` gehört zum offiziellen Nano-R4-Boardpaket. Es muss keine zusätzliche HID-Library installiert werden.

    ---

    ### Taster vorbereiten

    ```cpp
    pinMode(buttonPin, INPUT_PULLUP);
    ```

    `INPUT_PULLUP` aktiviert den internen Pull-up-Widerstand. Deshalb gilt: **gedrückt = `LOW`**, **losgelassen = `HIGH`**.

    ---

    ### HID sicher starten

    ```cpp
    delay(3000);
    Keyboard.begin();
    ```

    Die drei Sekunden Pause geben dir nach einem Neustart Zeit, das Board bei einem problematischen Sketch wieder abzuziehen. Danach startet die USB-Tastaturfunktion.

    ---

    ### Nur einmal pro Tastendruck schreiben

    ```cpp
    if (jetzt == LOW && vorher == HIGH) {
      Keyboard.write('x');
    }
    ```

    Der Buchstabe wird nur beim Übergang von losgelassen zu gedrückt gesendet. Das verhindert eine schnelle Wiederholung, solange du den Taster hältst.

!!! note "Zusatzaufgabe"

    Ändere den gesendeten Buchstaben. Teste den Sketch wieder zuerst in einem leeren Textdokument.
