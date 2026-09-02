# ⏯️ Play/Pause-Taster

Ein einzelner Taster kann Musik oder Videos am Computer starten und pausieren. Der Nano R4 sendet dafür über USB-C einen standardisierten Consumer-Control-Medienbefehl.

Der Sketch verwendet ausschließlich `ConsumerKeyboard.h`. Es sind weder ein eigener HID-Report-Deskriptor noch selbst angelegte Bibliotheksdateien nötig.

!!! info "Sicher testen"

    Speichere offene Arbeiten vor dem Test. Der Sketch sendet nur bei einem neuen Tastendruck, damit kein dauernder Befehlsstrom entsteht. Die Reaktion kann trotzdem vom Betriebssystem und vom geöffneten Medienprogramm abhängen.

## Aufbau / Anschlüsse

| Bauteil | Verbindung |
|---|---|
| Taster Seite 1 | D4 |
| Taster Seite 2 | GND |
| Nano R4 | USB-C-Datenkabel zum Computer |

## Beispielcode

```cpp
#include <ConsumerKeyboard.h>

const int buttonPin = 4;
bool vorherGedrueckt = false;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  bool jetztGedrueckt = digitalRead(buttonPin) == LOW;

  if (jetztGedrueckt && !vorherGedrueckt) {
    ConsumerKeyboard.press(KEY_PLAY_PAUSE);
    ConsumerKeyboard.release();
  }

  vorherGedrueckt = jetztGedrueckt;
  delay(20);
}
```

## Code-Erklärung

- `ConsumerKeyboard.h` stellt fertige Medienbefehle bereit. Es muss kein eigener HID-Report-Deskriptor angelegt werden.
- `ConsumerKeyboard.press(KEY_PLAY_PAUSE)` drückt die virtuelle Play/Pause-Taste.
- `ConsumerKeyboard.release()` lässt die virtuelle Medientaste direkt danach wieder los.
- Der Taster wird nur beim Übergang von losgelassen zu gedrückt ausgewertet.

## Mitmach-Aufgabe

!!! info "Mitmach-Aufgabe"

    Ergänze eine LED an D9 mit einem 470-Ω-Vorwiderstand. Sie soll bei jedem gültigen Tastendruck kurz aufblitzen, ohne dass mehrere Play/Pause-Befehle gesendet werden.
