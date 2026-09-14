# ⚙️ Servomotor

Ein Servomotor bewegt seine Welle gezielt auf einen Winkel. Anders als ein normaler Motor dreht er nicht einfach ständig weiter: Der Arduino gibt den gewünschten Winkel vor, zum Beispiel `20`, `90` oder `160` Grad.

Für dieses Beispiel eignet sich ein kleiner 5-V-Modellbau-Servo, etwa ein SG90 oder ein vergleichbares Modell.

!!! warning "Servo separat und sicher versorgen"

    Ein Servo kann beim Anlaufen oder unter Last deutlich mehr Strom benötigen als ein Arduino-Pin oder der USB-Anschluss liefern darf. Versorge ihn deshalb mit einem passenden, stabilen **5-V-Netzteil**. Verbinde die Masse (`GND`) des Netzteils mit `GND` des Arduino, damit das Steuersignal funktioniert.

    Prüfe vor dem Einschalten die Farben und die erlaubte Spannung im Datenblatt deines Servos. Entferne den Servoarm beim ersten Test oder halte seinen Bewegungsbereich frei: Der Servo darf nicht gegen einen mechanischen Anschlag fahren.

## Anschliessen

Die Kabelfarben sind bei vielen kleinen Servos gleich, können aber abweichen:

| Servo-Kabel | Anschluss |
| --- | --- |
| Signal (meist gelb oder orange) | Digitalpin D9 |
| Plus (meist rot) | +5 V des externen Netzteils |
| Masse (meist braun oder schwarz) | GND des externen Netzteils **und** GND des Arduino |

## Benötigte Library installieren

Der Beispielcode verwendet die Library **Servo**. Suche in der Arduino IDE im Bibliotheksverwalter nach `Servo` und installiere die passende Version, falls sie noch nicht vorhanden ist.

## Beispielcode

In diesem Beispiel fährt der Servo nacheinander drei gut sichtbare Positionen an.

```cpp
#include <Servo.h>

const int servoPin = 9;
Servo meinServo;

void setup() {
  meinServo.attach(servoPin);
}

void loop() {
  meinServo.write(20);
  delay(1000);

  meinServo.write(90);
  delay(1000);

  meinServo.write(160);
  delay(1000);
}
```

??? info "Code-Erklärung"

    ### Servo-Library einbinden

    ```cpp
    #include <Servo.h>
    ```

    Diese Library erzeugt das Steuersignal, das ein Modellbau-Servo erwartet.

    ---

    ### Pin und Servo festlegen

    ```cpp
    const int servoPin = 9;
    Servo meinServo;
    ```

    `servoPin` bezeichnet den Digitalpin für das Signalkabel. Mit `Servo meinServo;` wird ein Servo-Objekt angelegt, über das der Motor später gesteuert wird.

    ---

    ### Servo starten

    ```cpp
    meinServo.attach(servoPin);
    ```

    `attach()` verbindet das Servo-Objekt mit D9 und startet das Steuersignal.

    ---

    ### Winkel anfahren

    ```cpp
    meinServo.write(90);
    ```

    `write()` gibt den Zielwinkel in Grad an. `90` ist ungefähr die Mittelstellung. Die Werte `20` und `160` lassen etwas Abstand zu den Endanschlägen; der tatsächlich sichere Bereich hängt von deinem Servo und seinem Aufbau ab.

    ---

    ### Auf die Bewegung warten

    ```cpp
    delay(1000);
    ```

    Die Pause gibt dem Servo eine Sekunde Zeit, die gewünschte Position zu erreichen, bevor der nächste Winkel folgt.

!!! note "Zusatzaufgabe"

    Baue einen Drehknopf mit einem Potentiometer: Lies dessen Wert an `A0` ein und rechne ihn mit `map()` auf einen für deinen Aufbau sicheren Winkelbereich um. Übergib das Ergebnis anschliessend an `meinServo.write()`.
