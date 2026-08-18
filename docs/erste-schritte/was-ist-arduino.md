# 🤖 Was ist Arduino?

**[Arduino](https://www.arduino.cc/){ target="_blank" }** ist eine weltweit beliebte Open-Source-Plattform, die es jedem ermöglicht, eigene elektronische Projekte zu bauen und zu programmieren. Sie besteht aus zwei Hauptkomponenten:

1. **Hardware:** Ein Mikrocontroller-Board, das Signale aus der Umwelt aufnehmen (z. B. Tastendruck, Temperatur, Licht) und darauf reagieren kann (z. B. LEDs anschalten, Motoren drehen, Displays ansteuern).
2. **Software (Arduino IDE):** Das Programm auf deinem Computer, in dem du den Code schreibst und per USB-Kabel auf das Board überträgst.

---

## 🛠️ Welche Arduino-Boards gibt es?

Es gibt eine Vielzahl unterschiedlicher Boards für verschiedene Einsatzzwecke. Die bekanntesten Unterschiede liegen in der Leistung, den Anschlüssen und Sonderfunktionen wie WLAN oder USB-Kommunikation.

### **Die Klassiker**

* **[Arduino Uno:](https://docs.arduino.cc/hardware/uno-rev3/){ target="_blank" }** Der Standard für den Einstieg. Robust, einfach zu bedienen und ideal zum Lernen der Grundlagen.
* **[Arduino Nano:](https://docs.arduino.cc/hardware/nano/){ target="_blank" }** Bietet fast die gleichen Funktionen wie der Uno, ist aber extrem klein und passt direkt auf ein Steckbrett (Breadboard).
* **[Arduino Mega 2560:](https://docs.arduino.cc/hardware/mega-2560/){ target="_blank" }**** Der „große Bruder“ mit besonders vielen Pins für komplexe Projekte mit vielen Bauteilen.

### **Spezial- & Leistungsstarke Boards**

* **ESP32 / ESP8266:** Sehr beliebte Dritthersteller-Boards mit integriertem WLAN und Bluetooth für IoT-Projekte (Internet of Things).
* **Boards mit ATmega32U4 (z. B. Leonardo, Pro Micro):** Können sich direkt als USB-Eingabegerät (HID) wie eine Tastatur oder Maus am PC ausgeben.

---

### Das Board in diesem Kurs

Auf dem Board sitzt der Mikrocontroller. In diesem Kurs verwenden wir voraussichtlich ein **SparkFun Qwiic Pro Micro USB-C mit ATmega32U4**, das sich dank seiner USB-Funktion auch als Tastatur oder Maus ausgeben kann.

---

## 💡 Warum ist Arduino so beliebt?

* **Einfacher Einstieg:** Die Programmiersprache basiert auf C/C++, ist aber stark vereinfacht.
* **Große Community:** Für fast jeden Sensor und jedes Bauteil gibt es fertige Code-Beispiele (Bibliotheken).
* **Günstig & Flexibel:** Es gibt zahlreiches Zubehör und kompatible Bauteile für kleine Budgets.