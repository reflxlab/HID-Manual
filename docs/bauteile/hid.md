# 🖱️ HID-Steuerungen

HID steht für **Human Interface Device**. Damit kann sich das Qwiic Pro Micro mit ATmega32U4 über USB zum Beispiel als Tastatur, Maus oder Mediensteuerung am Computer anmelden.

In diesem Beispiel steuern zwei Taster die Lautstärke des Computers: Einer macht **lauter**, der andere **leiser**.

---

## Benötigte Library installieren

Für die HID-Funktionen wird die Library **HID-Project** von NicoHood benötigt.

Folge der [Anleitung](../erste-schritte/installLibrary.md) und installiere die **HID-Project** Library.

!!! info "HID-Code vorsichtig testen"

    Ein fehlerhafter Sketch kann sehr viele Befehle senden und die Bedienung des Computers stören.

---


## Beispielcode

Schliesse einen Taster zwischen **D4** und **GND** an. Er macht die Lautstärke lauter. Den zweiten Taster schliesst du zwischen **D5** und **GND** an; er macht sie leiser.

Bei einem Tastendruck wird der passende Medienbefehl gesendet. Das kurze `delay(150)` danach sorgt dafür, dass ein mechanisches Prellen nicht sofort mehrere Befehle auslöst.

```cpp
#include <HID-Project.h>

const int lauterPin = 4;
const int leiserPin = 5;

void setup() {
  pinMode(lauterPin, INPUT_PULLUP);
  pinMode(leiserPin, INPUT_PULLUP);
  Consumer.begin();
}

void loop() {
  if (digitalRead(lauterPin) == LOW) {
    Consumer.write(MEDIA_VOLUME_UP);
    delay(150);
  }

  if (digitalRead(leiserPin) == LOW) {
    Consumer.write(MEDIA_VOLUME_DOWN);
    delay(150);
  }
}
```

??? info "Code-Erklärung"

    ### Library einbinden

    ```cpp
    #include <HID-Project.h>
    ```

    Bindet die zuvor installierte **HID-Project Library** in das Programm ein.

    ---

    ### Tasterpins speichern

    ```cpp
    const int lauterPin = 4;
    const int leiserPin = 5;
    ```

    `lauterPin` legt den Eingang für den Lauter-Taster fest, `leiserPin` den Eingang für den Leiser-Taster.

    ---

    ### Eingänge und Mediensteuerung starten

    ```cpp
    pinMode(lauterPin, INPUT_PULLUP);
    pinMode(leiserPin, INPUT_PULLUP);
    Consumer.begin();
    ```

    `INPUT_PULLUP` aktiviert den internen Pull-up-Widerstand des Mikrocontrollers. Deshalb gilt im Programm: **gedrückt = `LOW`** und **losgelassen = `HIGH`**.

    `Consumer.begin()` startet die Mediensteuerung der HID-Project Library.

    ---

    ### Lauter-Taster abfragen

    ```cpp
    if (digitalRead(lauterPin) == LOW) {
      Consumer.write(MEDIA_VOLUME_UP);
      delay(150);
    }
    ```

    Ist der Lauter-Taster gedrückt, ist sein Eingang `LOW`. Dann sendet `MEDIA_VOLUME_UP` einen Schritt lauter an den Computer.

    Das kurze `delay(150)` danach ist eine einfache Entprellung. Hältst du den Taster gedrückt, wird die Lautstärke ungefähr alle 150 Millisekunden weiter verändert.

    ---

    ### Leiser-Taster abfragen

    ```cpp
    if (digitalRead(leiserPin) == LOW) {
      Consumer.write(MEDIA_VOLUME_DOWN);
      delay(150);
    }
    ```

    Dieser Block funktioniert gleich wie der Lauter-Block, sendet aber mit `MEDIA_VOLUME_DOWN` einen Schritt leiser.


!!! note "Zusatzaufgabe"

    Ändere `delay(150)` auf `delay(250)`. Wie verändert sich die Geschwindigkeit, wenn du einen Taster gedrückt hältst?
