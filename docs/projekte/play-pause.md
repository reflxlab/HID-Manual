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

??? info "Code-Erklärung"

    ### Consumer-Keyboard-Bibliothek einbinden

    ```cpp
    #include <ConsumerKeyboard.h>
    ```

    `ConsumerKeyboard.h` stellt fertige Medienbefehle bereit. Ein eigener HID-Report-Deskriptor ist nicht nötig.

    ---

    ### Taster und vorherigen Zustand festlegen

    ```cpp
    const int buttonPin = 4;
    bool vorherGedrueckt = false;
    ```

    `buttonPin` speichert den Anschluss des Tasters. `vorherGedrueckt` merkt sich, ob der Taster im letzten Schleifendurchlauf gedrückt war.

    ---

    ### Taster als Eingang vorbereiten

    ```cpp
    pinMode(buttonPin, INPUT_PULLUP);
    ```

    Der interne Pull-up-Widerstand sorgt dafür, dass ein gedrückter Taster als `LOW` gelesen wird.

    ---

    ### Neuen Tastendruck erkennen

    ```cpp
    bool jetztGedrueckt = digitalRead(buttonPin) == LOW;

    if (jetztGedrueckt && !vorherGedrueckt) {
      ConsumerKeyboard.press(KEY_PLAY_PAUSE);
      ConsumerKeyboard.release();
    }
    ```

    Der Medienbefehl wird nur gesendet, wenn der Taster jetzt gedrückt ist, vorher aber noch nicht gedrückt war. `press()` drückt die virtuelle Play/Pause-Taste und `release()` lässt sie direkt wieder los.

    ---

    ### Zustand speichern und kurz warten

    ```cpp
    vorherGedrueckt = jetztGedrueckt;
    delay(20);
    ```

    Der aktuelle Zustand wird für den nächsten Schleifendurchlauf gespeichert. Die kurze Pause hilft beim Entprellen des Tasters.

!!! note "Zusatzaufgabe"

    Ergänze eine LED an D9 mit einem 470-Ω-Vorwiderstand. Sie soll bei jedem gültigen Tastendruck kurz aufblitzen, ohne dass mehrere Play/Pause-Befehle gesendet werden.
