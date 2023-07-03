let darkMode = false

function changeTheme() {
    let root = document.documentElement;

    darkMode = !darkMode;
        
    root.style.setProperty('--color-primary', darkMode ? '#fff' : '#000');
    root.style.setProperty('--color-secondary', darkMode ? '#ccc' : '#444');
    root.style.setProperty('--color-tertiary', darkMode ? '#aaa' : '#888');
    root.style.setProperty('--color-background', darkMode ? '#000' : '#fff');
}

changeTheme();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('change-theme').addEventListener('click', function() {
        changeTheme();

        document.getElementById('change-theme').style.backgroundImage = darkMode ? 'url("Images/sun.svg")' : 'url("Images/moon.svg")'
    });
});
