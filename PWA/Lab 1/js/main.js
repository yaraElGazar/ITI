let botton = document.getElementById("btn");

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

botton.addEventListener("click", async () => {
  deferredPrompt.prompt();
  // const { outcome } = await deferredPrompt.userChoice;
  // deferredPrompt = null;
});
