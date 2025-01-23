// Actualiza dinámicamente el año de copyright y la última fecha de modificación
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Funcionalidad del menú hamburguesa
const hamburgerButton = document.getElementById('hamburgerButton');
const navMenu = document.querySelector('nav ul');

hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('visible');
});

