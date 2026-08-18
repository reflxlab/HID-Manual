# 🎚️ Potentiometer

Ein Potentiometer ist ein verstellbarer Spannungsteiler. Beim Drehen verändert sich die gemessene Spannung, die der Arduino als Zahl einlesen kann.

!!! warning "TODO: Versorgungsspannung festlegen"

    Prüfe vor dem Unterricht, auf welche Spannung das Board eingestellt ist und welcher Messbereich für den Mikrocontroller vorgesehen ist.

---

## Beispielcode

In diesem Beispiel wird der Messwert des Potentiometers von `0` bis `1023` mit `map()` in Prozent von `0` bis `100` umgerechnet und im seriellen Monitor ausgegeben.

```cpp
const int potPin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int messwert = analogRead(potPin);
  int prozent = map(messwert, 0, 1023, 0, 100);

  Serial.print("Potentiometer: ");
  Serial.print(prozent);
  Serial.println(" %");

  delay(100);
}
```

??? info "Code-Erklärung"

    ### Messpin festlegen

    ```cpp
    const int potPin = A0;
    ```

    `potPin` speichert den analogen Eingang, der ausgelesen wird.

    ---

    ### Potentiometer einlesen und umrechnen

    ```cpp
    int messwert = analogRead(potPin);
    int prozent = map(messwert, 0, 1023, 0, 100);
    ```

    `analogRead()` liefert normalerweise einen Messwert von `0` bis `1023`.

    `map()` rechnet diesen Bereich in einen neuen Bereich um. Hier werden aus `0` bis `1023` die Werte `0` bis `100` Prozent.

    ---

    ### Wert ausgeben

    ```cpp
    Serial.print(prozent);
    Serial.println(" %");
    ```

    Die Zahl und das Prozentzeichen erscheinen im seriellen Monitor. `println()` beginnt danach eine neue Zeile.

    ---

    ### Kurze Pause

    ```cpp
    delay(100);
    ```

    Die Pause verhindert, dass der serielle Monitor mit zu vielen Werten gefüllt wird.

---

!!! note "Zusatzaufgabe"

    Ändere die `map()`-Zeile so, dass statt Prozent ein Bereich von `0` bis `255` ausgegeben wird. Dieser Bereich wird zum Beispiel für `analogWrite()` verwendet.
