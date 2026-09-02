# 🔊 Lautstärkeregler

Ein Potentiometer steuert die Lautstärke des Computers, indem der Nano R4 standardisierte Consumer-Control-Befehle über USB-C sendet. Die Stellung ist dabei nicht absolut: Der Sketch sendet nur schrittweise **lauter** oder **leiser**.

Der Sketch verwendet ausschließlich `ConsumerKeyboard.h`. Es sind weder ein eigener HID-Report-Deskriptor noch selbst angelegte Bibliotheksdateien nötig.

!!! info "Verhalten prüfen"

    Consumer-Control-Befehle werden von Windows, macOS und Linux grundsätzlich als Medientasten erkannt. Teste vor dem Unterricht trotzdem das konkrete Betriebssystem und die verwendeten Medienprogramme.

## Aufbau / Anschlüsse

| Bauteil | Verbindung |
|---|---|
| Potentiometer aussen | 5V |
| Potentiometer Mitte | A0 |
| Potentiometer aussen | GND |
| Nano R4 | USB-C-Datenkabel zum Computer |

## Beispielcode

```cpp
#include <ConsumerKeyboard.h>

const int potPin = A0;
int aktuelleStufe = 0;

void setup() {
  aktuelleStufe = map(analogRead(potPin), 0, 1023, 0, 50);
}

void loop() {
  int zielStufe = map(analogRead(potPin), 0, 1023, 0, 50);

  if (zielStufe > aktuelleStufe) {
    ConsumerKeyboard.press(KEY_VOLUME_INCREMENT);
    ConsumerKeyboard.release();
    aktuelleStufe++;
  } else if (zielStufe < aktuelleStufe) {
    ConsumerKeyboard.press(KEY_VOLUME_DECREMENT);
    ConsumerKeyboard.release();
    aktuelleStufe--;
  }

  delay(30);
}
```

??? info "Code-Erklärung"

    ### Consumer-Keyboard-Bibliothek einbinden

    ```cpp
    #include <ConsumerKeyboard.h>
    ```

    `ConsumerKeyboard.h` stellt fertige Medienbefehle bereit. Ein eigener HID-Report-Deskriptor ist nicht nötig.

    ---

    ### Messpin und aktuelle Stufe festlegen

    ```cpp
    const int potPin = A0;
    int aktuelleStufe = 0;
    ```

    `potPin` speichert den analogen Eingang des Potentiometers. `aktuelleStufe` merkt sich, welche Lautstärkestufe zuletzt erreicht wurde.

    ---

    ### Startwert einlesen

    ```cpp
    aktuelleStufe = map(analogRead(potPin), 0, 1023, 0, 20);
    ```

    Beim Start wird die Stellung des Potentiometers übernommen. Dadurch sendet der Nano R4 nicht sofort viele Lautstärkebefehle.

    ---

    ### Zielstufe berechnen

    ```cpp
    int zielStufe = map(analogRead(potPin), 0, 1023, 0, 20);
    ```

    `analogRead()` liest die aktuelle Reglerstellung. `map()` teilt den Potentiometerweg in 21 Stufen von `0` bis `20`.

    ---

    ### Lautstärke schrittweise ändern

    ```cpp
    if (zielStufe > aktuelleStufe) {
      ConsumerKeyboard.press(KEY_VOLUME_INCREMENT);
      ConsumerKeyboard.release();
      aktuelleStufe++;
    } else if (zielStufe < aktuelleStufe) {
      ConsumerKeyboard.press(KEY_VOLUME_DECREMENT);
      ConsumerKeyboard.release();
      aktuelleStufe--;
    }
    ```

    Liegt die Zielstufe höher, sendet `KEY_VOLUME_INCREMENT` einen Lauter-Schritt. Liegt sie tiefer, sendet `KEY_VOLUME_DECREMENT` einen Leiser-Schritt. Nach jedem `press()` lässt `release()` die virtuelle Medientaste wieder los.

    Der Computer meldet seine tatsächliche Lautstärke nicht an den Sketch zurück. Nach einer Lautstärkeänderung am Computer können Reglerstellung und Lautstärke deshalb auseinanderliegen.

!!! note "Zusatzaufgabe"

    Ändere den Bereich von 20 auf 10 Stufen und vergleiche das Gefühl beim Drehen. Entscheide danach, welche Anzahl Stufen für euren Regler am angenehmsten ist.
