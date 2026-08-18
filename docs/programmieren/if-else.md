# 🔁 Entscheidungen und Schleifen

Programme führen Befehle in einer Reihenfolge aus. Mit `if` und `else` treffen sie Entscheidungen; mit `for` und `while` wiederholen sie Befehle.

## if / else: Entscheiden

`if` führt einen Block nur aus, wenn die Bedingung wahr ist. `else` ist der Block für alle anderen Fälle.

```cpp
if (digitalRead(buttonPin) == LOW) {
  digitalWrite(ledPin, HIGH);
} else {
  digitalWrite(ledPin, LOW);
}
```

`==` vergleicht zwei Werte. Ein einzelnes `=` weist einer Variable einen Wert zu.

## for: Eine feste Anzahl wiederholen

`for` eignet sich, wenn vorher klar ist, wie oft etwas passieren soll.

```cpp
for (int i = 0; i < 3; i++) {
  digitalWrite(ledPin, HIGH);
  delay(200);
  digitalWrite(ledPin, LOW);
  delay(200);
}
```

Die LED blinkt dreimal. `i` beginnt bei `0`, der Block läuft, solange `i` kleiner als `3` ist. Nach jedem Durchlauf erhöht `i++` die Zahl um eins.

## while: Wiederholen, solange etwas gilt

`while` wiederholt einen Block, solange seine Bedingung wahr ist.

```cpp
while (digitalRead(buttonPin) == LOW) {
  digitalWrite(ledPin, HIGH);
}
digitalWrite(ledPin, LOW);
```

Die LED leuchtet, solange der Taster gedrückt wird. Wichtig: Die Bedingung muss irgendwann falsch werden, sonst bleibt das Programm in der Schleife hängen.
