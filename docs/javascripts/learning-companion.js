(function () {
  const storagePrefix = 'hid-interface-anleitung-checklist:dein-weg:';
  const checklistSteps = ['ide', 'erster-sketch', 'setup-loop', 'bauteil', 'projekt'];
  const companionId = 'course-companion';
  const homeLinkSelector =
    '.md-sidebar--primary .md-nav--primary > .md-nav__list > .md-nav__item > a.md-nav__link[href]';

  function getProgress() {
    try {
      return checklistSteps.filter((step) =>
        localStorage.getItem(`${storagePrefix}${step}`) === 'true').length;
    } catch (error) {
      return 0;
    }
  }

  function updateCompanion() {
    const sidebar = document.querySelector('.md-sidebar--secondary');
    const inner = sidebar?.querySelector('.md-sidebar__inner');
    const homeLink = document.querySelector(homeLinkSelector);

    if (!inner || !homeLink) {
      return;
    }

    // Die Startseite zeigt den Fortschritt bereits als grosse Checkliste. Dort
    // bleibt die rechte Seitenleiste frei, damit der Inhalt die ganze Breite nutzt.
    if (document.querySelector('.course-checklist')) {
      inner.querySelector(`#${companionId}`)?.remove();
      sidebar.setAttribute('hidden', '');
      return;
    }

    sidebar.removeAttribute('hidden');

    let companion = inner.querySelector(`#${companionId}`);

    if (!companion) {
      companion = document.createElement('aside');
      companion.id = companionId;
      companion.className = 'course-companion';
      companion.setAttribute('aria-label', 'Dein Lernfortschritt');
      companion.innerHTML = [
        '<span class="course-companion__eyebrow">Dein Lernbegleiter</span>',
        '<strong class="course-companion__title">Schritt für Schritt ans Ziel</strong>',
        '<p class="course-companion__copy">Behalte deinen Fortschritt im Blick und mache in deinem Tempo weiter.</p>',
        '<div class="course-companion__meter" aria-hidden="true"><span></span></div>',
        '<span class="course-companion__status"></span>',
        '<a class="course-companion__link">📋 Zur Checkliste</a>',
      ].join('');
      inner.appendChild(companion);
    }

    const completed = getProgress();
    const total = checklistSteps.length;
    const percentage = (completed / total) * 100;
    const meter = companion.querySelector('.course-companion__meter > span');
    const status = companion.querySelector('.course-companion__status');
    const link = companion.querySelector('.course-companion__link');

    meter.style.width = `${percentage}%`;
    status.textContent = `${completed} von ${total} Schritten erledigt`;
    link.href = new URL('#dein-weg', homeLink.href).href;
  }

  document.addEventListener('change', (event) => {
    if (event.target.matches('.course-checklist input[type="checkbox"]')) {
      updateCompanion();
    }
  });

  window.addEventListener('storage', updateCompanion);
  updateCompanion();

  if (typeof document$ !== 'undefined') {
    document$.subscribe(updateCompanion);
  }
})();
