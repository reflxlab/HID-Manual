# 📏 analogRead()

`analogRead()` misst eine veränderliche Spannung an einem analogen Eingang. Beim Nano R4 liefert die voreingestellte 10-Bit-Auflösung eine Zahl zwischen `0` und `1023`. Mit `analogReadResolution(14)` kann der RA4M1 auch Werte von `0` bis `16383` liefern.


## Beispielcode

```cpp
const int sensorPin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int rohwert = analogRead(sensorPin);
  int prozent = map(rohwert, 0, 1023, 0, 100);

  Serial.print(rohwert);
  Serial.print(" -> ");
  Serial.print(prozent);
  Serial.println(" %");

  delay(100);
}
```
??? info "Code-Erklärung"
    - `rohwert` enthält die unveränderte Messung.
    - `map()` rechnet den Zahlenbereich in einen leichter verständlichen Prozentbereich um.
    - `analogRead()` bedeutet nicht automatisch, dass eine physikalische Grösse wie Kraft oder Temperatur bekannt ist.
    - Für echte Einheiten braucht ein Sensor eine passende Formel oder Kalibrierung.

!!! tip "Höhere Auflösung des Nano R4"

    Ergänze in `setup()` die Zeile `analogReadResolution(14);` und ersetze in `map()` den oberen Wert `1023` durch `16383`. Damit nutzt der Sketch die maximale ADC-Auflösung des Nano R4.
