# 🌟 Lichtsensor

Ein Lichtsensor misst, wie hell es an seinem Standort ist. Er gibt dafür eine veränderliche Spannung aus, die der Arduino als Zahl einlesen kann.

!!! warning "TODO: Versorgungsspannung festlegen"

    Prüfe vor dem Unterricht, auf welche Spannung das Board eingestellt ist und welcher Messbereich für den Mikrocontroller vorgesehen ist.

---

## Beispielcode

In diesem Beispiel wird der aktuelle Messwert des Lichtsensors eingelesen und im seriellen Monitor ausgegeben.

```cpp
const int sensorPin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int messwert = analogRead(sensorPin);

  Serial.print("Lichtwert: ");
  Serial.println(messwert);

  delay(100);
}
```

??? info "Code-Erklärung"

    ### Messpin festlegen

    ```cpp
    const int sensorPin = A0;
    ```

    `sensorPin` speichert den analogen Eingang, an dem der Lichtsensor angeschlossen ist.

    ---

    ### Serielle Ausgabe starten

    ```cpp
    Serial.begin(9600);
    ```

    Startet die serielle Verbindung mit `9600` Baud. Dadurch kann der Messwert im seriellen Monitor angezeigt werden.

    ---

    ### Lichtwert einlesen

    ```cpp
    int messwert = analogRead(sensorPin);
    ```

    `analogRead()` misst die Spannung des Lichtsensors. Beim ATmega32U4 liegt der Messwert normalerweise im Bereich von `0` bis `1023`.

    Ob ein grösserer Wert heller oder dunkler bedeutet, hängt vom verwendeten Sensormodul ab. Teste es, indem du den Sensor abdeckst und wieder freilegst.

    ---

    ### Messwert anzeigen

    ```cpp
    Serial.print("Lichtwert: ");
    Serial.println(messwert);
    ```

    Die erste Zeile schreibt eine Beschriftung. `Serial.println()` gibt danach den Messwert aus und beginnt eine neue Zeile.

    ---

    ### Kurze Pause

    ```cpp
    delay(100);
    ```

    Die Pause verhindert, dass der serielle Monitor mit zu vielen Werten gleichzeitig gefüllt wird.


!!! note "Zusatzaufgabe"

    Decke den Lichtsensor ab und beleuchte ihn danach mit einer Lampe. Notiere, wie sich die Messwerte verändern.
