function updateCountdown() {
    const weddingDate = new Date("2025-08-01T00:00:00"); // Ajusta la fecha del evento
    const now = new Date();
    const timeDifference = weddingDate - now;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        document.querySelector(".timer").innerHTML = "¡Feliz día de la boda!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
