---
hide:
  - toc
---

<div class="home-page">

  <section class="home-hero" aria-labelledby="home-title">
    <div class="home-hero__content">
      <p class="home-eyebrow"><span aria-hidden="true">✦</span> Qwiic Pro Micro · Interaktiver Lernkurs</p>
      <h1 id="home-title">Baue dein eigenes <span>PC-Interface.</span></h1>
      <p class="home-hero__lead">Lerne Schritt für Schritt, wie du Eingaben misst, Ausgaben steuerst und aus wenigen Bauteilen eine eigene Computersteuerung entwickelst.</p>

      <div class="home-actions">
        <a class="home-button home-button--primary" href="#dein-weg">Jetzt loslegen <span aria-hidden="true">→</span></a>
        <a class="home-button home-button--secondary" href="#bauteile">Bauteile entdecken</a>
      </div>

      <dl class="home-stats" aria-label="Kursübersicht">
        <div><dt>5</dt><dd>Lernschritte</dd></div>
        <div><dt>8</dt><dd>Bauteile</dd></div>
        <div><dt>5</dt><dd>Projekte</dd></div>
      </dl>
    </div>

    <div class="home-hero__visual" aria-hidden="true">
      <div class="code-window">
        <div class="code-window__bar">
          <span></span><span></span><span></span>
          <small>interface.ino</small>
        </div>
        <pre><code><span class="code-keyword">void</span> <span class="code-function">loop</span>() {
  <span class="code-keyword">if</span> (tasteGedrueckt) {
    <span class="code-function">digitalWrite</span>(LED, HIGH);
    <span class="code-function">sendeHID</span>();
  }
}</code></pre>
      </div>
      <span class="signal-chip signal-chip--usb">USB HID</span>
      <span class="signal-chip signal-chip--ready"><i></i> Bereit</span>
    </div>
  </section>

  <section class="home-section" id="dein-weg" aria-labelledby="lernweg-title">
    <header class="home-section__header">
      <p class="home-section__number">01 · Dein Weg</p>
      <h2 id="lernweg-title">Vom ersten Sketch zum eigenen Projekt</h2>
      <p>Arbeite die Schritte in deinem Tempo durch. Dein Fortschritt bleibt in diesem Browser gespeichert.</p>
    </header>

    <div class="course-checklist" data-checklist-id="dein-weg" aria-label="Dein Lernfortschritt">
      <div class="course-checklist__header">
        <div>
          <span class="course-checklist__eyebrow">Lernfortschritt</span>
          <output class="course-checklist__status" data-progress-label aria-live="polite">Fortschritt wird geladen …</output>
        </div>
        <button class="course-checklist__reset" type="button" data-checklist-reset>
          <span aria-hidden="true">↺</span> Zurücksetzen
        </button>
      </div>

      <div class="course-progress" role="progressbar" aria-label="Fortschritt" aria-valuemin="0" aria-valuemax="5" aria-valuenow="0">
        <div class="course-progress__segments" aria-hidden="true">
          <span class="course-progress__segment"></span>
          <span class="course-progress__segment"></span>
          <span class="course-progress__segment"></span>
          <span class="course-progress__segment"></span>
          <span class="course-progress__segment"></span>
        </div>
      </div>

      <ol>
        <li>
          <input id="course-step-ide" type="checkbox" data-step="ide">
          <div class="course-checklist__copy">
            <label for="course-step-ide"><small>Schritt 1</small><strong>Arduino IDE einrichten</strong><span>Installiere die Entwicklungsumgebung und verbinde dein Board.</span></label>
            <a href="erste-schritte/ide-einrichten/">Anleitung öffnen <span aria-hidden="true">→</span></a>
          </div>
        </li>
        <li>
          <input id="course-step-erster-sketch" type="checkbox" data-step="erster-sketch">
          <div class="course-checklist__copy">
            <label for="course-step-erster-sketch"><small>Schritt 2</small><strong>Ersten Sketch laden</strong><span>Übertrage dein erstes kleines Programm auf den Mikrocontroller.</span></label>
            <a href="erste-schritte/erster-sketch/">Anleitung öffnen <span aria-hidden="true">→</span></a>
          </div>
        </li>
        <li>
          <input id="course-step-setup-loop" type="checkbox" data-step="setup-loop">
          <div class="course-checklist__copy">
            <label for="course-step-setup-loop"><small>Schritt 3</small><strong>setup() und loop() verstehen</strong><span>Lerne die beiden wichtigsten Bereiche eines Arduino-Programms kennen.</span></label>
            <a href="erste-schritte/setup-loop/">Anleitung öffnen <span aria-hidden="true">→</span></a>
          </div>
        </li>
        <li>
          <input id="course-step-bauteil" type="checkbox" data-step="bauteil">
          <div class="course-checklist__copy">
            <label for="course-step-bauteil"><small>Schritt 4</small><strong>Ein Bauteil ausprobieren</strong><span>Wähle unten ein Bauteil, teste den Beispielcode und löse die Zusatzaufgabe.</span></label>
            <a href="#bauteile">Bauteil auswählen <span aria-hidden="true">↓</span></a>
          </div>
        </li>
        <li>
          <input id="course-step-projekt" type="checkbox" data-step="projekt">
          <div class="course-checklist__copy">
            <label for="course-step-projekt"><small>Schritt 5</small><strong>Eigenes Projekt starten</strong><span>Verbinde einen Sensor mit einem Aktor oder setze eine Projektidee um. Erkläre vor dem Start kurz, was du vorhast.</span></label>
            <a href="projekte/projektverzeichniss/">Projekte ansehen <span aria-hidden="true">→</span></a>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <section class="home-section" id="bauteile" aria-labelledby="bauteile-title">
    <header class="home-section__header">
      <p class="home-section__number">02 · Bauteile</p>
      <h2 id="bauteile-title">Wähle dein nächstes Experiment</h2>
      <p>Starte mit einem Bauteil, welches dich interessiert. Du must nicht zwingend auf die Schwierigkeit achten. Jede Anleitung enthält einen kurzen Beispielcode und eine Zusatzaufgabe.</p>
    </header>

    <div class="difficulty-grid">
      <article class="difficulty-card difficulty-card--easy">
        <div class="difficulty-card__topline">
          <span class="difficulty-badge"><i></i> Leicht</span>
          <span>Zum Einsteigen</span>
        </div>
        <h3>Erste Signale</h3>
        <p>Lerne digitale und analoge Grundlagen mit übersichtlichen Schaltungen.</p>
        <nav class="component-links" aria-label="Leichte Bauteile">
          <a href="bauteile/led/"><span class="component-icon">💡</span><span><strong>LED</strong><small>Licht ein- und ausschalten</small></span><b aria-hidden="true">→</b></a>
          <a href="bauteile/taster/"><span class="component-icon">🔘</span><span><strong>Taster</strong><small>Einen Eingang auslesen</small></span><b aria-hidden="true">→</b></a>
          <a href="bauteile/poti/"><span class="component-icon">🎚️</span><span><strong>Potentiometer</strong><small>Analoge Werte messen</small></span><b aria-hidden="true">→</b></a>
        </nav>
      </article>

      <article class="difficulty-card difficulty-card--medium">
        <div class="difficulty-card__topline">
          <span class="difficulty-badge"><i></i> Mittel</span>
          <span>Zum Vertiefen</span>
        </div>
        <h3>Werte sichtbar machen</h3>
        <p>Kombiniere Messwerte, Libraries und mehrere Ausgaben miteinander.</p>
        <nav class="component-links" aria-label="Mittelschwere Bauteile">
          <a href="bauteile/lichtsensor/"><span class="component-icon">🌟</span><span><strong>Lichtsensor</strong><small>Helligkeit erkennen</small></span><b aria-hidden="true">→</b></a>
          <a href="bauteile/drucksensor/"><span class="component-icon">👆</span><span><strong>Drucksensor</strong><small>Druckstärke messen</small></span><b aria-hidden="true">→</b></a>
          <a href="bauteile/led-bar/"><span class="component-icon">📊</span><span><strong>LED-Bar</strong><small>Farben und Balken steuern</small></span><b aria-hidden="true">→</b></a>
        </nav>
      </article>

      <article class="difficulty-card difficulty-card--hard">
        <div class="difficulty-card__topline">
          <span class="difficulty-badge"><i></i> Schwer</span>
          <span>Für Fortgeschrittene</span>
        </div>
        <h3>Mit dem Computer sprechen</h3>
        <p>Arbeite mit Displays, USB-Befehlen und umfangreicheren Libraries.</p>
        <nav class="component-links" aria-label="Schwere Bauteile">
          <a href="bauteile/lcd/"><span class="component-icon">🖥️</span><span><strong>LCD</strong><small>Texte und Werte anzeigen</small></span><b aria-hidden="true">→</b></a>
          <a href="bauteile/hid/"><span class="component-icon">🖱️</span><span><strong>HID-Steuerungen</strong><small>Den Computer bedienen</small></span><b aria-hidden="true">→</b></a>
        </nav>
      </article>
    </div>
  </section>

  <section class="project-banner" aria-labelledby="project-title">
    <div class="project-banner__icon" aria-hidden="true">⚡</div>
    <div>
      <p class="home-section__number">03 · Projekte</p>
      <h2 id="project-title">Bereit, alles zu verbinden?</h2>
      <p>Setze dein Wissen in einem Lautstärkeregler, Makropad oder Mini-Gamecontroller ein.</p>
    </div>
    <a class="home-button home-button--light" href="projekte/projektverzeichniss/">Projekte entdecken <span aria-hidden="true">→</span></a>
  </section>

</div>
