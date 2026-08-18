# 🖥️ LCD

Ein LCD kann Text und Zahlen anzeigen, ohne dass der Computer geöffnet sein muss. In diesem Entwurf verwenden wir vorläufig ein zweizeiliges I²C-LCD mit 16 Zeichen pro Zeile.

!!! warning "TODO: Display, Adresse und Spannung prüfen"

    Der Beispielcode nimmt ein **16×2-I²C-LCD**, die Library `LiquidCrystal_I2C` und die Adresse `0x27` an.

    Vor der Veröffentlichung müssen Modell, Library, I²C-Adresse und Betriebsspannung mit dem echten Display geprüft werden.

---

## Benötigte Library installieren

Für die Ansteuerung des LCDs wird eine **LiquidCrystal_I2C** Library benötigt.

Folge der [Anleitung](\erste-schritte\installLibrary) und installiere die für das verwendete Display passende **LiquidCrystal_I2C** Library.

---

## Beispielcode

In diesem Beispiel zeigt das LCD in der ersten Zeile einen Text und in der zweiten Zeile die seit dem Start vergangenen Sekunden an.

```cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Hallo Arduino!");
}

void loop() {
  lcd.setCursor(0, 1);
  lcd.print("Sekunden: ");
  lcd.print(millis() / 1000);
  lcd.print("   ");
  delay(250);
}
```

??? info "Code-Erklärung"

    ### Libraries einbinden

    ```cpp
    #include <Wire.h>
    #include <LiquidCrystal_I2C.h>
    ```

    `Wire.h` stellt die I²C-Funktionen bereit.

    `LiquidCrystal_I2C.h` enthält die Funktionen für das LCD.

    ---

    ### LCD einrichten

    ```cpp
    LiquidCrystal_I2C lcd(0x27, 16, 2);
    ```

    Hier wird das Display beschrieben.

    Die Werte bedeuten:

    - I²C-Adresse: `0x27`
    - Zeichen pro Zeile: `16`
    - Anzahl Zeilen: `2`

    ---

    ### Display starten

    ```cpp
    lcd.init();
    lcd.backlight();
    ```

    `lcd.init()` startet das Display.

    `lcd.backlight()` schaltet die Hintergrundbeleuchtung ein.

    ---

    ### Text in der ersten Zeile anzeigen

    ```cpp
    lcd.setCursor(0, 0);
    lcd.print("Hallo Arduino!");
    ```

    `lcd.setCursor(0, 0)` setzt den Cursor an den Anfang der ersten Zeile.

    Danach schreibt `lcd.print()` den Text auf das Display.

    ---

    ### Sekunden in der zweiten Zeile anzeigen

    ```cpp
    lcd.setCursor(0, 1);
    lcd.print("Sekunden: ");
    lcd.print(millis() / 1000);
    ```

    Der Cursor wird an den Anfang der zweiten Zeile gesetzt.

    `millis()` liefert die Zeit seit dem Programmstart in Millisekunden. Durch `1000` geteilt ergibt sich ungefähr die Anzahl Sekunden.

    ---

    ### Alte Zeichen überschreiben

    ```cpp
    lcd.print("   ");
    ```

    Die zusätzlichen Leerzeichen überschreiben ältere Zeichen, falls die vorherige Zahl länger war.

    ---

    ### Anzeige regelmässig aktualisieren

    ```cpp
    delay(250);
    ```

    Wartet `250` Millisekunden bis zur nächsten Aktualisierung.

---

!!! note "Zusatzaufgabe"

    Zeige in der ersten Zeile die Minuten statt dem "Hallo Arduino!" Text.  
    Tipp: 1 Minute = (millis() / 1000) / 60
