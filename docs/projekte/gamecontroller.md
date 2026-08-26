# 🎮 Mini-Gamecontroller

Der Nano R4 meldet sich über USB-C als Tastatur an. Vier Taster werden dadurch zu den Pfeiltasten eines kleinen Gamecontrollers. Solange du einen Taster hältst, bleibt die passende virtuelle Taste am Computer gedrückt.

## Aufbau / Anschlüsse

| Richtung | Pin |
|---|---:|
| Oben | D4 |
| Unten | D5 |
| Links | D6 |
| Rechts | D7 |
| Jeweils zweite Tasterseite | GND |

!!! warning "Spiel und Tastenbelegung prüfen"
    Teste den Controller zuerst in einem einfachen Tastatur-Test oder Textprogramm. Prüfe danach, ob das ausgewählte Spiel Pfeiltasten unterstützt und ob gleichzeitig gedrückte Richtungen sinnvoll behandelt werden.

## Beispielcode

```cpp
#include <Keyboard.h>

const byte buttonPins[] = {4, 5, 6, 7};
const byte keyCodes[] = {
  KEY_UP_ARROW,
  KEY_DOWN_ARROW,
  KEY_LEFT_ARROW,
  KEY_RIGHT_ARROW
};

bool vorher[] = {HIGH, HIGH, HIGH, HIGH};

void setup() {
  for (int i = 0; i < 4; i++) {
    pinMode(buttonPins[i], INPUT_PULLUP);
  }

  delay(3000);
  Keyboard.begin();
}

void loop() {
  for (int i = 0; i < 4; i++) {
    bool jetzt = digitalRead(buttonPins[i]);

    if (jetzt != vorher[i]) {
      if (jetzt == LOW) {
        Keyboard.press(keyCodes[i]);
      } else {
        Keyboard.release(keyCodes[i]);
      }

      vorher[i] = jetzt;
    }
  }

  delay(5);
}
```

## Code-Erklärung

- `buttonPins[]` und `keyCodes[]` gehören positionsweise zusammen.
- Die drei Sekunden Startpause geben dir Zeit, den Nano R4 bei einem fehlerhaften HID-Sketch wieder abzuziehen.
- Beim Drücken wird `Keyboard.press()` aufgerufen.
- Beim Loslassen folgt `Keyboard.release()`.
- Im Gegensatz zu `Keyboard.write()` kann eine Taste dadurch länger gehalten werden.
- Mehrere Taster können gleichzeitig gedrückt sein, zum Beispiel oben und rechts.

## Mitmach-Aufgabe

!!! info "Mitmach-Aufgabe"
    Ergänze einen fünften Taster für die Leertaste. Verwende dieselbe Array-Struktur, statt für den neuen Taster einen komplett getrennten Codeblock zu schreiben.
