(function () {
  const buttonId = 'checklist-return-button';
  const homeLinkSelector =
    '.md-sidebar--primary .md-nav--primary > .md-nav__list > .md-nav__item > a.md-nav__link[href]';

  function isCurrentPage(url) {
    const current = new URL(window.location.href);
    const target = new URL(url, window.location.href);

    return current.pathname.replace(/index\.html$/, '').replace(/\/$/, '')
      === target.pathname.replace(/index\.html$/, '').replace(/\/$/, '');
  }

  function updateChecklistButton() {
    const homeLink = document.querySelector(homeLinkSelector);
    let button = document.getElementById(buttonId);

    if (!homeLink || isCurrentPage(homeLink.href)) {
      button?.remove();
      return;
    }

    if (!button) {
      button = document.createElement('a');
      button.id = buttonId;
      button.className = 'checklist-return-button';
      button.textContent = 'Zur Checkliste ✔️';
      button.setAttribute('aria-label', 'Zur Checkliste');
      document.body.appendChild(button);
    }

    button.href = new URL('#dein-weg', homeLink.href).href;
  }

  updateChecklistButton();

  if (typeof document$ !== 'undefined') {
    document$.subscribe(updateChecklistButton);
  }
})();
