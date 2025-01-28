
document.addEventListener("DOMContentLoaded", function() {
    // Mostrar el año actual en el footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // Obtener y formatear la fecha de última modificación
    const lastModified = new Date(document.lastModified);
    const formattedDate = `${lastModified.getFullYear()}-${String(lastModified.getMonth() + 1).padStart(2, '0')}-${String(lastModified.getDate()).padStart(2, '0')} ${String(lastModified.getHours()).padStart(2, '0')}:${String(lastModified.getMinutes()).padStart(2, '0')}:${String(lastModified.getSeconds()).padStart(2, '0')}`;

    document.getElementById("lastModified").textContent = formattedDate;

    // Evento para el botón de hamburguesa
    document.getElementById("hamburgerButton").addEventListener("click", function() {
        document.querySelector("nav ul").classList.toggle("visible");
    });
});