document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("modeToggle");
    const darkModeOn = localStorage.getItem("darkMode") === "true";

    if (darkModeOn) {
        document.body.classList.add("dark-mode");
    }

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });
});