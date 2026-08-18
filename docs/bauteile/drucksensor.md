# 👆 Drucksensor

Ein druckabhängiger Widerstand verändert seinen elektrischen Widerstand, wenn du auf ihn drückst. Der Arduino kann diese Veränderung als analogen Messwert erfassen.

!!! warning "TODO: Sensortyp und Kalibrierung prüfen"

    Dieser Entwurf nimmt einen einfachen FSR-Sensor an. Der echte Sensortyp, die sichere maximale Belastung und die sinnvolle Kalibrierung müssen vor dem Unterricht geprüft werden.

---

## Beispielcode

In diesem Beispiel wird der Messwert des Drucksensors eingelesen und vorläufig in einen Prozentwert umgerechnet.

```cpp
const int sensorPin = A1;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int rohwert = analogRead(sensorPin);
  int prozent = map(rohwert, 0, 1023, 0, 100);
  prozent = constrain(prozent, 0, 100);

  Serial.print("Druck: ");
  Serial.print(prozent);
  Serial.println(" %");

  delay(100);
}
```

??? info "Code-Erklärung"

    ### Sensorpin festlegen

    ```cpp
    const int sensorPin = A1;
    ```

    `sensorPin` speichert den Pin, an dem der analoge Messwert eingelesen wird.

    ---

    ### Serielle Ausgabe starten

    ```cpp
    Serial.begin(9600);
    ```

    Startet die serielle Verbindung mit einer Übertragungsrate von `9600` Baud.

    Dadurch können die Messwerte im seriellen Monitor angezeigt werden.

    ---

    ### Rohwert einlesen

    ```cpp
    int rohwert = analogRead(sensorPin);
    ```

    `analogRead()` liest den aktuellen Messwert des Sensors ein.

    Der Wert wird in der Variable `rohwert` gespeichert.

    ---

    ### Messwert in Prozent umrechnen

    ```cpp
    int prozent = map(rohwert, 0, 1023, 0, 100);
    ```

    `map()` rechnet den ursprünglichen Messbereich vorläufig auf einen Bereich von `0` bis `100` um.

    Diese Prozentzahl ist noch keine echte physikalische Kraftmessung.

    ---

    ### Werte begrenzen

    ```cpp
    prozent = constrain(prozent, 0, 100);
    ```

    `constrain()` begrenzt den berechneten Wert auf den Bereich von `0` bis `100`.

    ---

    ### Messwert anzeigen

    ```cpp
    Serial.print("Druck: ");
    Serial.print(prozent);
    Serial.println(" %");
    ```

    Diese Zeilen geben den berechneten Prozentwert im seriellen Monitor aus.

    ---

    ### Kurze Pause

    ```cpp
    delay(100);
    ```

    Wartet `100` Millisekunden bis zur nächsten Messung.

---

!!! note "Zusatzaufgabe"

    Miss den Wert ohne Berührung und bei einem kräftigen, aber sicheren Druck.

    Ersetze danach in `map()` die Werte `0` und `1023` durch deine beiden Messwerte, damit die Anzeige besser zu deinem Sensor passt.
