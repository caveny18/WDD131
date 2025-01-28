const lastModificationElement = document.querySelector('.footer p:last-child');
const currentDate = new Date();
lastModificationElement.textContent = `Last Modification: ${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('hidden');
    });
});


const weatherCard = document.querySelector('.card h3:contains("Weather")');
if (weatherCard) {
    const weatherContainer = weatherCard.parentElement;
    const temperature = Math.floor(Math.random() * 35); // Random temperature for demo
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

    weatherContainer.innerHTML += `<p><strong>Temperature:</strong> ${temperature}°C</p>`;
    weatherContainer.innerHTML += `<p><strong>Conditions:</strong> ${randomCondition}</p>`;
}
