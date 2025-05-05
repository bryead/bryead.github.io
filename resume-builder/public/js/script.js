// script.js

document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    // Check for saved user preference, if any, on page load
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.innerHTML = '<i class="fas fa-sun"></i> Switch to Light Mode'; // Sun icon for dark mode
    } else {
        body.classList.add('light-mode');
        modeToggle.innerHTML = '<i class="fas fa-moon"></i> Switch to Dark Mode'; // Moon icon for light mode
    }

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        // Save the user's preference in local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            modeToggle.innerHTML = '<i class="fas fa-sun"></i> Switch to Light Mode'; // Sun icon for dark mode
        } else {
            localStorage.setItem('theme', 'light');
            modeToggle.innerHTML = '<i class="fas fa-moon"></i> Switch to Dark Mode'; // Moon icon for light mode
        }
    });
});
