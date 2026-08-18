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
      // Die Checkliste funktioniert auch dann, wenn der Browser nichts speichern darf.
    }
  }

  function updateProgress(checklist) {
    const checkboxes = Array.from(checklist.querySelectorAll('input[type="checkbox"]'));
    const segments = Array.from(checklist.querySelectorAll('.course-progress__segment'));
    const completed = checkboxes.filter((checkbox) => checkbox.checked).length;
    const progress = checklist.querySelector('.course-progress');

    segments.forEach((segment, index) => {
      segment.classList.toggle('is-complete', index < completed);
    });

    progress.setAttribute('aria-valuemax', checkboxes.length);
    progress.setAttribute('aria-valuenow', completed);
    progress.setAttribute('aria-valuetext', `${completed} von ${checkboxes.length} Schritten abgeschlossen`);
  }

  function setupChecklists() {
    document.querySelectorAll('.course-checklist').forEach((checklist) => {
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

      checklist.dataset.initialized = 'true';
      updateProgress(checklist);
    });
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(setupChecklists);
  } else {
    document.addEventListener('DOMContentLoaded', setupChecklists);
  }
})();
