// Accessible certificate viewer: click or keyboard activate to view full image.
(() => {
  const dialog = document.getElementById('certificate-dialog');
  if (!dialog) return;
  const image = document.getElementById('certificate-dialog-image');
  const title = document.getElementById('certificate-dialog-title');
  const original = document.getElementById('certificate-image-open');
  const close = dialog.querySelector('.certificate-dialog-close');
  let trigger = null;

  document.querySelectorAll('.cert-view-button').forEach(button => {
    button.addEventListener('click', () => {
      trigger = button;
      const src = button.dataset.certSrc;
      title.textContent = button.dataset.certTitle || 'Certificate';
      image.src = src;
      image.alt = button.querySelector('img')?.alt || 'Full certificate image';
      original.href = src;
      dialog.showModal();
      close.focus();
    });
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    image.removeAttribute('src');
    if (trigger) trigger.focus();
  });
})();
