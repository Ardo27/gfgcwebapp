document.addEventListener("DOMContentLoaded", function () {
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.expand(); // Expand web app inside Telegram
    }
});
