/* Preset-only color selection. Cover/background images are never modified. */
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
    note.textContent = '색상 견본을 선택하면 본문에 적용됩니다. 배경 이미지는 유지됩니다.';
    const options = document.createElement('div');
    options.className = 'portfolio-color-options';
    const status = document.createElement('p');
    status.className = 'portfolio-color-status';
    status.setAttribute('role', 'status');
    function updateStatus(saved) {
      const name = presets.find(([id]) => id === selected)[1];
      status.textContent = '현재 테마: ' + name + (saved === false ? ' · 적용됨. 이 브라우저에서는 선택 저장이 제한됩니다.' : ' · 적용됨');
    }
    for (const [id, name] of presets) {
      const label = document.createElement('label');
      label.className = 'portfolio-color-option';
      label.dataset.theme = id;
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'portfolio-color-preset';
      radio.value = id;
      radio.checked = selected === id;
      const swatch = document.createElement('span');
      swatch.className = 'portfolio-color-swatch';
      swatch.setAttribute('aria-hidden', 'true');
      const text = document.createElement('span');
      text.textContent = name;
      label.append(radio, swatch, text);
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
      setTimeout(() => {
        if (!panel.hidden && !root.contains(document.activeElement)) setOpen(false);
      }, 0);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
})();
