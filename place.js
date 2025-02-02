// Año actual y última modificación
document.getElementById("year").textContent = new Date().getFullYear();

const lastMod = new Date(document.lastModified);
document.getElementById("last-mod").textContent = lastMod.toLocaleDateString("es-ES") + " " + lastMod.toLocaleTimeString("es-ES");

// Función para calcular la sensación térmica (wind chill)
function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}

// Obtener temperatura y viento desde el HTML
const temperatura = parseFloat(document.getElementById("temp").textContent) || 0;
const viento = parseFloat(document.getElementById("viento").textContent) || 0;

// Mostrar el resultado en todas las etiquetas de sensación térmica
document.querySelectorAll(".windchill").forEach(element => {
    element.textContent = calculateWindChill(temperatura, viento);
});

