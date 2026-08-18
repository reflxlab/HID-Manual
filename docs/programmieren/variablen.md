# 📦 Variablen

Eine Variable ist ein benannter Speicherplatz für einen Wert. Mit guten Namen wird dein Programm leichter lesbar und du kannst Werte an einer Stelle verändern, statt überall nach Zahlen zu suchen.

## Wichtige Datentypen

| Typ | Beispiel | Verwendung |
|---|---|---|
| `int` | `int pause = 500;` | Ganze Zahlen |
| `bool` | `bool ledAn = false;` | Wahr oder falsch |
| `float` | `float temperatur = 21.5;` | Zahlen mit Nachkommastellen |
| `const int` | `const int ledPin = 9;` | Eine Zahl, die nicht verändert werden soll |

## Beispielcode

```cpp
const int ledPin = 9;
int pause = 500;
bool ledAn = false;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  ledAn = !ledAn;
  digitalWrite(ledPin, ledAn ? HIGH : LOW);
  delay(pause);
}
```

## Code-Erklärung

- `ledPin` bleibt immer `9` und wird deshalb als `const` definiert.
- `pause` kann später verändert werden.
- `ledAn` speichert nur `true` oder `false`.
- Das Ausrufezeichen in `!ledAn` kehrt den Wahrheitswert um.
- Mit jedem Durchlauf wechselt die LED dadurch ihren Zustand.