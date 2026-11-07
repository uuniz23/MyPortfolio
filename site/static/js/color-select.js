/* Preset selector: visible labels only; accessible names remain available. */
(() => {
  'use strict';
  const storageKey = 'portfolio-color-theme';
  const presets = [['default', 'Default'], ['forest', 'Forest'], ['ocean', 'Ocean'], ['mono', 'Mono']];
  const valid = value => presets.some(([id]) => id === value);
  function initialize() {
    if (document.getElementById('portfolio-color-select')) return;
    let selected = 'default';
    try {
      const stored = localStorage.getItem(storageKey);
      if (valid(stored)) selected = stored;
    } catch (_) { /* Selection works without storage. */ }
    document.documentElement.dataset.colorTheme = selected;
    const root = document.createElement('div');
    root.id = 'portfolio-color-select';
    root.className = 'portfolio-color-select';
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'portfolio-color-toggle';
    toggle.textContent = 'color';
    toggle.setAttribute('aria-label', 'Color theme');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'portfolio-color-panel');
    const panel = document.createElement('section');
    panel.id = 'portfolio-color-panel';
    panel.className = 'portfolio-color-panel';
    panel.hidden = true;
    panel.setAttribute('aria-label', 'Color themes');
    const fieldset = document.createElement('fieldset');
    fieldset.setAttribute('aria-label', 'Color theme');
    const options = document.createElement('div');
    options.className = 'portfolio-color-options';
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
        try { localStorage.setItem(storageKey, id); } catch (_) { /* Keep applying locally. */ }
        document.dispatchEvent(new CustomEvent('portfolio:colorchange', { detail: { theme: id } }));
      });
    }
    fieldset.append(options);
    panel.append(fieldset);
    root.append(toggle, panel);
    document.body.append(root);
    function setOpen(open, restoreFocus = false) {
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      if (open) options.querySelector('input:checked').focus();
      else if (restoreFocus) toggle.focus({ preventScroll: true });
    }
    toggle.addEventListener('click', () => setOpen(panel.hidden));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !panel.hidden) {
        event.preventDefault();
        setOpen(false, true);
      }
    });
    document.addEventListener('click', event => {
      if (!panel.hidden && !root.contains(event.target)) setOpen(false, panel.contains(document.activeElement));
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
