# ⌨️ PC-Makropad

Ein Makropad ist eine kleine Tastatur mit frei programmierbaren Tasten. In diesem Beispiel senden drei Taster die häufigen Befehle Kopieren, Einfügen und Rückgängig.

## Aufbau / Anschlüsse

| Taster | Pin | Funktion im Entwurf |
|---|---:|---|
| Taster 1 | D4 | Kopieren |
| Taster 2 | D5 | Einfügen |
| Taster 3 | D6 | Rückgängig |
| Jeweils zweite Tasterseite | GND | Gemeinsame Masse |

!!! warning "TODO: Betriebssystem und Tastaturlayout"
    Der Code verwendet `Ctrl` und passt damit vorläufig zu Windows und vielen Linux-Programmen. Für macOS muss meistens die Command-Taste verwendet werden; prüfe ausserdem die gewünschten Programme und das Tastaturlayout.

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

  Keyboard.begin();
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
- In der Schleife steht `i` nacheinander für Taster 0, 1 und 2.
- Ein Makro wird nur beim Übergang von `HIGH` zu `LOW` ausgelöst.

## Mitmach-Aufgabe

!!! info "Mitmach-Aufgabe"
    Ersetze eine Funktion durch eine sichere Tastenkombination, die du oft brauchst. Schreibe vor dem Test auf, was die Kombination im geöffneten Programm auslösen wird.
