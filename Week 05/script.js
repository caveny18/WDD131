document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
        { id: 3, name: "Product C" }
    ];

    const select = document.getElementById("productSelect");
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });

    let count = localStorage.getItem("reviewCount") || 0;
    document.getElementById("reviewCounter").textContent = `Reviews submitted: ${count}`;

    document.getElementById("reviewForm").addEventListener("submit", function(event) {
        event.preventDefault();
        count++;
        localStorage.setItem("reviewCount", count);
        document.getElementById("reviewCounter").textContent = `Reviews submitted: ${count}`;
        alert("Review submitted successfully");
    });

    document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleString();
});
