let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;

    // Show an "Install" button manually
    const installButton = document.createElement("button");
    installButton.innerText = "Install App";
    installButton.style.display = "block";
    installButton.addEventListener("click", () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choice) => {
            if (choice.outcome === "accepted") {
                console.log("User installed the app");
            }
            deferredPrompt = null;
        });
    });

    document.body.appendChild(installButton);
});
