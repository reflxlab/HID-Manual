(function () {
  const primaryNavigationSelector =
    '.md-sidebar--primary .md-nav--primary > .md-nav__list';

  function getSectionToggles() {
    return Array.from(document.querySelectorAll(primaryNavigationSelector))
      .flatMap((list) => Array.from(list.children))
      .filter((item) => item.classList.contains('md-nav__item--nested'))
      .map((item) => Array.from(item.children)
        .find((child) => child.matches('input.md-nav__toggle')))
      .filter(Boolean);
  }

  function closeOtherSections(openedToggle) {
    getSectionToggles().forEach((toggle) => {
      toggle.classList.remove('md-toggle--indeterminate');

      if (toggle !== openedToggle) {
        toggle.checked = false;
      }
    });
  }

  function normalizeSections() {
    const toggles = getSectionToggles();
    const activeToggle = toggles.find((toggle) =>
      toggle.parentElement?.classList.contains('md-nav__item--active'));
    const checkedToggle = toggles.find((toggle) => toggle.checked);
    const visibleToggle = activeToggle || checkedToggle;

    toggles.forEach((toggle) => {
      // Entfernt einen eventuell noch aus einer alten navigation.expand-Version
      // vorhandenen Zustand, der alle Bereiche sichtbar halten würde.
      toggle.classList.remove('md-toggle--indeterminate');
      toggle.checked = toggle === visibleToggle;
    });
  }

  document.addEventListener('change', (event) => {
    const toggle = event.target;

    if (!(toggle instanceof HTMLInputElement)
      || !getSectionToggles().includes(toggle)) {
      return;
    }

    toggle.classList.remove('md-toggle--indeterminate');

    if (toggle.checked) {
      closeOtherSections(toggle);
    }
  });

  normalizeSections();

  // Material ersetzt bei navigation.instant Teile des Dokuments ohne kompletten Reload.
  if (typeof document$ !== 'undefined') {
    document$.subscribe(normalizeSections);
  }
})();
