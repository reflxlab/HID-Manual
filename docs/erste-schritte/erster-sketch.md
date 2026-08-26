# ✨ Erster Sketch

Dein erster Sketch bringt die eingebaute orange LED des Nano R4 zum Blinken. Dafür brauchst du noch keine zusätzlichen Bauteile. Dabei lernst du den ganzen Ablauf kennen: Code schreiben, überprüfen, hochladen und testen.
Folge immer diesem Muster, wenn du einen neuen Code schreibst.

## Vorgehen
1. Gehe in der Arduino IDE auf **Datei → Neuer Sketch**.
2. Speichere deine Code mit einem passenden Namen auf dem Desktop ab, nutze dazu **Datei → Speichern unter**
3. Schreibe deinen Code. Fürs erste, kannst du den Code von unten kopieren.
4. Speichere zwischendurch und vorallem am Ende dein Code. Dies kannst du unter **Datei → Speichern**

## Code Blinklicht

```cpp
const int ledPin = LED_BUILTIN;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(500);
  digitalWrite(ledPin, LOW);
  delay(500);
}
```

## Code-Erklärung

### Vorbereitung

`const int ledPin = LED_BUILTIN;` speichert den vom Boardpaket festgelegten Pin der eingebauten LED unter dem Namen `ledPin`. Der Sketch bleibt dadurch eindeutig für den Nano R4.

### Einmaliger Start

In `setup()` wird der Pin mit `pinMode()` als Ausgang festgelegt.

### Wiederholung

In `loop()` wird die LED eingeschaltet, eine halbe Sekunde gewartet, ausgeschaltet und wieder gewartet. Danach beginnt `loop()` automatisch von vorne.

## Mitmach-Aufgabe

!!! info "Mitmach-Aufgabe"
    Programmiere ein Herzschlag-Muster: zweimal kurz blinken, danach eine längere Pause. Du darfst dafür weitere `digitalWrite()`- und `delay()`-Zeilen ergänzen.
