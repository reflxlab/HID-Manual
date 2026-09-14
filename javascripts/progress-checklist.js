(function () {
  const storagePrefix = "hid-interface-anleitung-checklist:";

  function getSavedValue(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function saveValue(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // Die Checkliste bleibt nutzbar, auch wenn der Browser nichts speichern darf.
    }
  }

  function createSegments(checklist, count) {
    const container = checklist.querySelector('.course-progress__segments');

    if (!container) {
      return [];
    }

    if (container.children.length !== count) {
      container.replaceChildren();

      for (let index = 0; index < count; index += 1) {
        const segment = document.createElement('span');
        segment.className = 'course-progress__segment';
        container.appendChild(segment);
      }
    }

    container.style.setProperty('--progress-segments', count);
    return Array.from(container.children);
  }

  function updateProgress(checklist) {
    const checkboxes = Array.from(checklist.querySelectorAll('input[type="checkbox"]'));
    const segments = createSegments(checklist, checkboxes.length);
    const completed = checkboxes.filter((checkbox) => checkbox.checked).length;
    const progress = checklist.querySelector('.course-progress');
    const status = checklist.querySelector('[data-progress-label]');

    checkboxes.forEach((checkbox, index) => {
      segments[index]?.classList.toggle('is-complete', checkbox.checked);
      checkbox.closest('li')?.classList.toggle('is-complete', checkbox.checked);
    });

    if (progress) {
      progress.setAttribute('aria-valuemax', checkboxes.length);
      progress.setAttribute('aria-valuenow', completed);
      progress.setAttribute('aria-valuetext', `${completed} von ${checkboxes.length} Schritten abgeschlossen`);
    }

    const finished = checkboxes.length > 0 && completed === checkboxes.length;
    checklist.classList.toggle('is-finished', finished);

    if (status) {
      status.textContent = finished
        ? `Geschafft – ${completed} von ${checkboxes.length}!`
        : `${completed} von ${checkboxes.length} erledigt`;
    }
  }

  function setupChecklist(checklist) {
    if (checklist.dataset.initialized === 'true') {
      return;
    }

    const checklistId = checklist.dataset.checklistId;
    const checkboxes = Array.from(checklist.querySelectorAll('input[type="checkbox"]'));

    checkboxes.forEach((checkbox, index) => {
      const stepId = checkbox.dataset.step || index;
      const storageKey = `${storagePrefix}${checklistId}:${stepId}`;
      const savedValue = getSavedValue(storageKey);

      if (savedValue !== null) {
        checkbox.checked = savedValue === 'true';
      }

      checkbox.addEventListener('change', () => {
        saveValue(storageKey, checkbox.checked);
        updateProgress(checklist);
      });
    });

    checklist.querySelector('[data-checklist-reset]')?.addEventListener('click', () => {
      checkboxes.forEach((checkbox, index) => {
        const stepId = checkbox.dataset.step || index;
        checkbox.checked = false;
        saveValue(`${storagePrefix}${checklistId}:${stepId}`, false);
      });

      updateProgress(checklist);
    });

    checklist.dataset.initialized = 'true';
    updateProgress(checklist);
  }

  function setupChecklists() {
    document.querySelectorAll('.course-checklist').forEach(setupChecklist);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupChecklists);
  } else {
    setupChecklists();
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(setupChecklists);
  }
})();
