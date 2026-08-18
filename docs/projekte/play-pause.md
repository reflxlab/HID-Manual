# ⏯️ Play/Pause-Taster

Ein einzelner Taster kann Musik oder Videos am Computer starten und pausieren. Das Board sendet dafür einen standardisierten Medienbefehl über USB.

!!! warning "TODO: Medienbefehl testen"
    Der Entwurf verwendet die zusätzliche Bibliothek **HID-Project von NicoHood**. Prüfe den Befehl mit den Browsern und Medienprogrammen, die im Unterricht tatsächlich eingesetzt werden.

## Aufbau / Anschlüsse

| Bauteil | Verbindung |
|---|---|
| Taster Seite 1 | D4 |
| Taster Seite 2 | GND |
| Board | USB-C zum Computer |

## Beispielcode

```cpp
#include <HID-Project.h>

const int buttonPin = 4;
bool vorherGedrueckt = false;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  Consumer.begin();
}

void loop() {
  bool jetztGedrueckt = digitalRead(buttonPin) == LOW;

  if (jetztGedrueckt && !vorherGedrueckt) {
    Consumer.write(MEDIA_PLAY_PAUSE);
  }

  vorherGedrueckt = jetztGedrueckt;
  delay(20);
}
```

## Code-Erklärung

- `Consumer.begin()` startet die Mediensteuerung.
- Der Taster wird nur beim neuen Drücken ausgewertet.
- `MEDIA_PLAY_PAUSE` ist derselbe Befehl für Start und Pause.
- `delay(20)` hilft gegen sehr kurze Störungen beim mechanischen Umschalten des Tasters.

## Mitmach-Aufgabe

!!! info "Mitmach-Aufgabe"
    Ergänze eine LED an Pin 9. Sie soll bei jedem gültigen Tastendruck kurz aufblitzen, ohne dass mehrere Play/Pause-Befehle gesendet werden.
