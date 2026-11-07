/* Progressive enhancement: unsupported browsers retain the original images. */
(() => {
  'use strict';
  function initializeImageViewer() {
    if (document.getElementById('portfolio-image-viewer')) return;
    const dialog = document.createElement('dialog');
    if (typeof dialog.showModal !== 'function') return;
    dialog.id = 'portfolio-image-viewer';
    dialog.className = 'image-viewer-dialog';
    dialog.setAttribute('aria-labelledby', 'image-viewer-title');
    dialog.setAttribute('aria-describedby', 'image-viewer-caption');

    const toolbar = document.createElement('div');
    toolbar.className = 'image-viewer-toolbar';
    const title = document.createElement('h2');
    title.id = 'image-viewer-title';
    title.className = 'image-viewer-title';
    title.textContent = '이미지 확대 보기';
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'image-viewer-close';
    close.textContent = '닫기 (Esc)';
    close.autofocus = true;
    toolbar.append(title, close);

    const figure = document.createElement('figure');
    figure.className = 'image-viewer-figure';
    const enlarged = document.createElement('img');
    const caption = document.createElement('figcaption');
    caption.id = 'image-viewer-caption';
    caption.className = 'image-viewer-caption';
    figure.append(enlarged, caption);
    dialog.append(toolbar, figure);
    document.body.append(dialog);

    let opener = null;
    let previousOverflow = '';
    close.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right ||
          event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.documentElement.style.overflow = previousOverflow;
      enlarged.removeAttribute('src');
      if (opener && opener.isConnected) opener.focus({ preventScroll: true });
      opener = null;
    });

    // Native modal dialog provides Esc dismissal, focus containment and inert background.
    document.querySelectorAll('main img, .post-content img').forEach(image => {
      if (image.closest('a, button, dialog') || image.hasAttribute('data-no-enlarge')) return;
      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'image-viewer-trigger';
      const description = image.alt.trim() || '본문 이미지';
      trigger.setAttribute('aria-label', description + ' 확대 보기');
      trigger.setAttribute('aria-haspopup', 'dialog');
      trigger.setAttribute('aria-controls', dialog.id);
      const hint = document.createElement('span');
      hint.className = 'image-viewer-hint';
      hint.textContent = '이미지 확대 보기';
      hint.setAttribute('aria-hidden', 'true');
      image.parentNode.insertBefore(trigger, image);
      trigger.append(image, hint);
      trigger.addEventListener('click', () => {
        if (dialog.open) return;
        opener = trigger;
        enlarged.src = image.currentSrc || image.src;
        enlarged.alt = description;
        caption.textContent = description;
        dialog.showModal();
        dialog.scrollTop = 0;
        previousOverflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
        close.focus();
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeImageViewer, { once: true });
  } else {
    initializeImageViewer();
  }
})();
