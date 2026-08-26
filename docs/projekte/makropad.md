# ⌨️ PC-Makropad

Der Nano R4 wird über USB-C zu einer kleinen Tastatur mit frei programmierbaren Tasten. In diesem Beispiel senden drei Taster die häufigen Befehle Kopieren, Einfügen und Rückgängig.

## Aufbau / Anschlüsse

| Taster | Pin | Funktion im Entwurf |
|---|---:|---|
| Taster 1 | D4 | Kopieren |
| Taster 2 | D5 | Einfügen |
| Taster 3 | D6 | Rückgängig |
| Jeweils zweite Tasterseite | GND | Gemeinsame Masse |

!!! warning "Betriebssystem und Tastaturlayout"
    Der Code verwendet `Ctrl` und ein deutschsprachiges QWERTZ-Layout. Damit passt er zu Windows und vielen Linux-Programmen. Für macOS muss meistens `KEY_LEFT_GUI` statt `KEY_LEFT_CTRL` verwendet werden. Teste die Kombinationen zuerst in einem unwichtigen Dokument.

## Beispielcode

```cpp
#include <Keyboard.h>

const byte buttonPins[] = {4, 5, 6};
bool vorher[] = {HIGH, HIGH, HIGH};

void sendeMakro(char taste) {
  Keyboard.press(KEY_LEFT_CTRL);
  Keyboard.press(taste);
  delay(20);
  Keyboard.releaseAll();
}

void setup() {
  for (int i = 0; i < 3; i++) {
    pinMode(buttonPins[i], INPUT_PULLUP);
  }

  delay(3000);
  Keyboard.begin(KeyboardLayout_de_DE);
}

void loop() {
  for (int i = 0; i < 3; i++) {
    bool jetzt = digitalRead(buttonPins[i]);

    if (jetzt == LOW && vorher[i] == HIGH) {
      if (i == 0) sendeMakro('c');
      if (i == 1) sendeMakro('v');
      if (i == 2) sendeMakro('z');
    }

    vorher[i] = jetzt;
  }

  delay(10);
}
```

## Code-Erklärung

- Zwei Arrays speichern die drei Pins und die drei vorherigen Tasterzustände.
- Die Funktion `sendeMakro()` drückt zuerst `Ctrl`, danach den Buchstaben und lässt am Ende alle Tasten los.
- Die drei Sekunden Startpause geben dir Zeit, den Nano R4 bei einem fehlerhaften HID-Sketch wieder abzuziehen.
- `KeyboardLayout_de_DE` sorgt bei den Buchstaben für die übliche QWERTZ-Zuordnung. Bei einem anderen Betriebssystem-Layout musst du die Makros testen.
- In der Schleife steht `i` nacheinander für Taster 0, 1 und 2.
- Ein Makro wird nur beim Übergang von `HIGH` zu `LOW` ausgelöst.

## Mitmach-Aufgabe

!!! info "Mitmach-Aufgabe"
    Ersetze eine Funktion durch eine sichere Tastenkombination, die du oft brauchst. Schreibe vor dem Test auf, was die Kombination im geöffneten Programm auslösen wird.
