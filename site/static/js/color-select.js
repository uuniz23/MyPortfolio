/* Stage 1: deliberate disclosure, preset selection and persistence only.
 * Stage 2 will supply swatches and palette rules for data-color-theme.
 */
(() => {
  'use strict';
  const storageKey = 'portfolio-color-theme';
  const presets = [
    ['default', '기본'], ['forest', '포레스트'],
    ['ocean', '오션'], ['mono', '모노']
  ];
  const valid = value => presets.some(([id]) => id === value);
  function initialize() {
    if (document.getElementById('portfolio-color-select')) return;
    let selected = 'default';
    try {
      const stored = localStorage.getItem(storageKey);
      if (valid(stored)) selected = stored;
    } catch (_) { /* Selection still works when storage is unavailable. */ }
    document.documentElement.dataset.colorTheme = selected;
    const root = document.createElement('div');
    root.id = 'portfolio-color-select';
    root.className = 'portfolio-color-select';
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'portfolio-color-toggle';
    toggle.textContent = 'color';
    toggle.setAttribute('aria-label', 'color: 본문 색상 선택');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'portfolio-color-panel');
    const panel = document.createElement('section');
    panel.id = 'portfolio-color-panel';
    panel.className = 'portfolio-color-panel';
    panel.hidden = true;
    panel.setAttribute('aria-labelledby', 'portfolio-color-heading');
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.id = 'portfolio-color-heading';
    legend.textContent = '본문 색상 선택';
    const note = document.createElement('p');
    note.className = 'portfolio-color-note';
    note.textContent = '현재는 선택 기능만 제공됩니다. 색상 견본과 실제 색상 변경은 다음 단계에서 추가됩니다.';
    const options = document.createElement('div');
    options.className = 'portfolio-color-options';
    const status = document.createElement('p');
    status.className = 'portfolio-color-status';
    status.setAttribute('role', 'status');
    function updateStatus(saved) {
      const name = presets.find(([id]) => id === selected)[1];
      status.textContent = '선택: ' + name + (saved === false ? ' · 이 브라우저에서는 선택 저장이 제한됩니다.' : ' · 실제 색상은 아직 변경되지 않습니다.');
    }
    for (const [id, name] of presets) {
      const label = document.createElement('label');
      label.className = 'portfolio-color-option';
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'portfolio-color-preset';
      radio.value = id;
      radio.checked = selected === id;
      const text = document.createElement('span');
      text.textContent = name;
      label.append(radio, text);
      options.append(label);
      radio.addEventListener('change', () => {
        if (!radio.checked) return;
        selected = id;
        document.documentElement.dataset.colorTheme = id;
        let saved = true;
        try { localStorage.setItem(storageKey, id); } catch (_) { saved = false; }
        updateStatus(saved);
        document.dispatchEvent(new CustomEvent('portfolio:colorchange', { detail: { theme: id } }));
      });
    }
    fieldset.append(legend, note, options);
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'portfolio-color-close';
    close.textContent = '닫기';
    panel.append(fieldset, status, close);
    root.append(toggle, panel);
    document.body.append(root);
    updateStatus();
    function setOpen(open, restoreFocus = false) {
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      if (open) options.querySelector('input:checked').focus();
      else if (restoreFocus) toggle.focus({ preventScroll: true });
    }
    toggle.addEventListener('click', () => setOpen(panel.hidden));
    close.addEventListener('click', () => setOpen(false, true));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !panel.hidden) {
        event.preventDefault();
        setOpen(false, true);
      }
    });
    document.addEventListener('click', event => {
      if (!panel.hidden && !root.contains(event.target)) {
        setOpen(false, panel.contains(document.activeElement));
      }
    });
    root.addEventListener('focusout', () => {
      // This is a non-modal panel: allow Tab to leave and close it without trapping focus.
      setTimeout(() => {
        if (!panel.hidden && !root.contains(document.activeElement)) setOpen(false);
      }, 0);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
})();
