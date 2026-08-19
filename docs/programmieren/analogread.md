# 📏 analogRead()

`analogRead()` misst eine veränderliche Spannung an einem analogen Eingang. Beim ATmega32U4 wird sie normalerweise als Zahl zwischen `0` und `1023` dargestellt.


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
