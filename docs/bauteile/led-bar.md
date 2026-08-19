# 📊 NeoPixel LED-Bar

Die NeoPixel LED-Bar besteht aus **8 einzeln adressierbaren RGB-LEDs**. Jede LED kann unabhängig von den anderen in einer beliebigen Farbe angesteuert werden.

Im Gegensatz zu einer normalen LED-Bar benötigt die NeoPixel-Bar **nur einen einzigen Datenpin** am Arduino. Über diesen Pin werden die Farben aller LEDs übertragen.

In diesem Beispiel wird der **Adafruit NeoPixel Stick mit 8 RGB-LEDs** verwendet.

---

## Benötigte Library installieren

Für die Ansteuerung der LED-Bar wird die Library **Adafruit NeoPixel** benötigt.  
  
Folge der [Anleitung](../erste-schritte/installLibrary.md) und installiere die **Adafruit NeoPixel** Library.

---

## Beispielcode

In diesem Beispiel werden die **8 LEDs in drei verschiedenfarbige Bereiche** aufgeteilt:

- LEDs 1 bis 4 → Grün
- LEDs 5 und 6 → Gelb
- LEDs 7 und 8 → Rot

```cpp
#include <Adafruit_NeoPixel.h>

const int ledPin = 6;
const int anzahlLeds = 8;

Adafruit_NeoPixel ledBar(
  anzahlLeds,
  ledPin,
  NEO_GRB + NEO_KHZ800
);

void setup() {

  ledBar.begin();

  // Helligkeit begrenzen
  ledBar.setBrightness(50);

  // LEDs 1 bis 4: Grün
  for (int i = 0; i < 4; i++) {
    ledBar.setPixelColor(
      i,
      ledBar.Color(0, 255, 0)
    );
  }

  // LEDs 5 und 6: Gelb
  for (int i = 4; i < 6; i++) {
    ledBar.setPixelColor(
      i,
      ledBar.Color(255, 255, 0)
    );
  }

  // LEDs 7 und 8: Rot
  for (int i = 6; i < 8; i++) {
    ledBar.setPixelColor(
      i,
      ledBar.Color(255, 0, 0)
    );
  }

  ledBar.show();
}

void loop() {

}
```

??? info "Code-Erklärung"

    ### Library einbinden

    ```cpp
    #include <Adafruit_NeoPixel.h>
    ```

    Bindet die zuvor installierte **Adafruit NeoPixel Library** in das Programm ein.

    ---

    ### Datenpin und Anzahl LEDs

    ```cpp
    const int ledPin = 6;
    const int anzahlLeds = 8;
    ```

    `ledPin` legt fest, welcher Arduino-Pin im Programm als Datenpin für die LED-Bar verwendet wird.

    `anzahlLeds` gibt an, wie viele NeoPixel sich auf der LED-Bar befinden.

    In diesem Beispiel sind es **8 LEDs**.

    ---

    ### LED-Bar einrichten

    ```cpp
    Adafruit_NeoPixel ledBar(
      anzahlLeds,
      ledPin,
      NEO_GRB + NEO_KHZ800
    );
    ```

    Hier wird die LED-Bar eingerichtet.

    Dabei werden drei Informationen angegeben:

    - Anzahl der LEDs
    - verwendeter Datenpin
    - Typ der NeoPixel-LEDs

    ---

    ### LED-Bar starten

    ```cpp
    ledBar.begin();
    ```

    Startet die NeoPixel-Ansteuerung.

    ---

    ### Helligkeit einstellen

    ```cpp
    ledBar.setBrightness(50);
    ```

    Begrenzt die Helligkeit der LEDs.

    Die Helligkeit kann zwischen `0` und `255` eingestellt werden.

    Ein kleinerer Wert reduziert die Helligkeit und gleichzeitig den Stromverbrauch.

    ---

    ### LEDs 1 bis 4 auf Grün setzen

    ```cpp
    for (int i = 0; i < 4; i++) {
      ledBar.setPixelColor(
        i,
        ledBar.Color(0, 255, 0)
      );
    }
    ```

    Die erste `for`-Schleife setzt die ersten vier LEDs auf **Grün**.

    NeoPixel beginnen beim Zählen mit `0`. Deshalb entsprechen die Nummern im Programm:

    ```text
    0 → LED 1
    1 → LED 2
    2 → LED 3
    3 → LED 4
    ```

    Die drei Werte in `Color()` stehen für:

    ```text
    Rot, Grün, Blau
    ```

    Deshalb ergibt:

    ```cpp
    ledBar.Color(0, 255, 0)
    ```

    die Farbe **Grün**.

    ---

    ### LEDs 5 und 6 auf Gelb setzen

    ```cpp
    for (int i = 4; i < 6; i++) {
      ledBar.setPixelColor(
        i,
        ledBar.Color(255, 255, 0)
      );
    }
    ```

    Die zweite Schleife setzt LED 5 und LED 6 auf **Gelb**.

    Gelb entsteht durch die Mischung von Rot und Grün:

    ```cpp
    ledBar.Color(255, 255, 0)
    ```

    ---

    ### LEDs 7 und 8 auf Rot setzen

    ```cpp
    for (int i = 6; i < 8; i++) {
      ledBar.setPixelColor(
        i,
        ledBar.Color(255, 0, 0)
      );
    }
    ```

    Die letzten beiden LEDs werden **Rot** dargestellt.

    ```cpp
    ledBar.Color(255, 0, 0)
    ```

    bedeutet:

    - Rot = `255`
    - Grün = `0`
    - Blau = `0`

    ---

    ### Farben anzeigen

    ```cpp
    ledBar.show();
    ```

    Mit `setPixelColor()` werden die gewünschten Farben zunächst nur vorbereitet.

    Erst mit `show()` werden die neuen Farbinformationen an die LED-Bar übertragen und sichtbar.

    ---

    ### Warum ist `loop()` leer?

    ```cpp
    void loop() {

    }
    ```

    Die Farben werden in diesem Beispiel nur einmal eingestellt und verändern sich danach nicht mehr.

    Deshalb muss in der `loop()`-Funktion nichts wiederholt werden.


!!! note "Zusatzaufgabe"

    Teile die LED-Bar selbst in **vier verschiedene Farbbereiche** auf.

    Überlege dir dazu:

    - Welche LEDs gehören zu welchem Bereich?
    - Welche Start- und Endwerte brauchen die `for`-Schleifen?
    - Welche RGB-Werte erzeugen deine gewünschten Farben?
