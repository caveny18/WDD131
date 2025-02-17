document.addEventListener("DOMContentLoaded", () => {
    // Intentar cargar la lista desde localStorage o usar la lista predeterminada
    let giftList = JSON.parse(localStorage.getItem("giftList")) || [
        { name: "Honeymoon Fund", goal: 2000, raised: 50 },
        { name: "Kitchen Appliances", goal: 800, raised: 300 },
        { name: "Home Furniture", goal: 1500, raised: 700 },
        { name: "Washing Machine", goal: 1200, raised: 400 },
        { name: "Living Room Sofa", goal: 1500, raised: 250 },
        { name: "Smart TV", goal: 1000, raised: 600 },
        { name: "Dining Set", goal: 1000, raised: 150 },
        { name: "Vacation Fund", goal: 2500, raised: 800 },
        { name: "Bed and Mattress", goal: 1200, raised: 100 },
        { name: "Home Renovation Fund", goal: 3000, raised: 200 },
        { name: "Wedding Photography", goal: 1500, raised: 500 },
        { name: "Gift Cards for Stores", goal: 500, raised: 150 },
        { name: "Outdoor Furniture", goal: 1000, raised: 300 },
        { name: "Cooking Classes", goal: 600, raised: 100 }
    ];

    const giftSelect = document.getElementById("gift-choice");
    const giftContainer = document.getElementById("gift-list");
    const form = document.getElementById("contribution-form");

    function updateGiftList() {
        giftContainer.innerHTML = "";
        giftSelect.innerHTML = ""; // Evita duplicar opciones

        giftList.forEach((gift, index) => {
            let progress = (gift.raised / gift.goal) * 100;

            // Crear los elementos de la lista
            let giftItem = document.createElement("div");
            giftItem.classList.add("gift");
            giftItem.innerHTML = `
                <h3>${gift.name}</h3>
                <div class="progress-bar">
                    <div class="progress" style="width: ${progress}%;"></div>
                </div>
                <p>$${gift.raised} recaudados de $${gift.goal}</p>
            `;
            giftContainer.appendChild(giftItem);

            // Agregar opciones al selector de regalos
            let option = document.createElement("option");
            option.value = index;
            option.textContent = gift.name;
            giftSelect.appendChild(option);
        });

        // Guardar la lista actualizada en localStorage
        localStorage.setItem("giftList", JSON.stringify(giftList));
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const selectedGiftIndex = giftSelect.value;
        const amount = parseFloat(document.getElementById("amount").value);

        if (amount > 0) {
            giftList[selectedGiftIndex].raised += amount;
            updateGiftList();
            form.reset();
        }
    });

    updateGiftList();
});
