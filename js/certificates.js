
(() => {
  const dialog = document.getElementById("certificate-dialog");
  if (!dialog) return;

  const image = document.getElementById("certificate-dialog-image");
  const title = document.getElementById("certificate-dialog-title");
  const original = document.getElementById("certificate-image-open");
  const closeButton = dialog.querySelector(".certificate-dialog-close");

  let lastButton = null;

  document.querySelectorAll(".cert-view-button").forEach(button => {
    button.addEventListener("click", () => {
      lastButton = button;

      const imagePath = button.dataset.certSrc;
      const certificateTitle = button.dataset.certTitle || "Certificate";

      title.textContent = certificateTitle;
      image.src = imagePath;
      image.alt = certificateTitle;
      original.href = imagePath;

      dialog.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", event => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    image.removeAttribute("src");
    if (lastButton) lastButton.focus();
  });
})();
    
