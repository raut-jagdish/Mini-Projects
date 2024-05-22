document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggle-button');
    const body = document.body;

    // Load the saved mode from local storage
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        body.classList.add(savedMode);
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        // Save the current mode to local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('mode', 'dark-mode');
        } else {
            localStorage.setItem('mode', 'light-mode');
        }
    });
});
