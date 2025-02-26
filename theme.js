document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const container = document.querySelector('.container');
    const inputs = document.querySelectorAll('input');

    // Load theme from localStorage
    function loadTheme() {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'enabled') {
            body.classList.add('dark-mode');
            if (container) container.classList.add('dark-mode');
            inputs.forEach(input => input.classList.add('dark-mode'));
        }
    }

    loadTheme();

    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function () {
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                if (container) container.classList.remove('dark-mode');
                inputs.forEach(input => input.classList.remove('dark-mode'));
                localStorage.setItem('darkMode', 'disabled');
            } else {
                body.classList.add('dark-mode');
                if (container) container.classList.add('dark-mode');
                inputs.forEach(input => input.classList.add('dark-mode'));
                localStorage.setItem('darkMode', 'enabled');
            }
        });
    }
});
// useless