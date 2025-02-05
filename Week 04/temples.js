const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl: "https://www.ldstemple.pics/wp-content/uploads/salt-lake-temple-a-glimpse-of-heaven.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 5290,
      imageUrl: "https://assets.churchofjesuschrist.org/2d/f7/2df7e4d1360c93925003617cdaaa3b995a0dc7601073691/toronto_temple_lds.jpeg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 40800,
      imageUrl: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/rome-lds-temple-kelly-c-jones.jpg"
    },
    {
      templeName: "São Paulo Brazil",
      location: "São Paulo, Brazil",
      dedicated: "1978, October, 30",
      area: 59645,
      imageUrl: "https://media.ldscdn.org/images/media-library/temples/sao-paulo-brazil/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
    },
    {
      templeName: "Johannesburg South Africa",
      location: "Johannesburg, South Africa",
      dedicated: "1985, August, 24",
      area: 19224,
      imageUrl: "https://newsroom.churchofjesuschrist.org/media/orig/Johannesburg-South-Africa-Temple1a.jpg"
    },
   
    {
      templeName: "Barranquilla Colombia",
      location: "Barranquilla, Colombia",
      dedicated: "2018, December, 9",
      area: 32000,
      imageUrl: "https://i.pinimg.com/originals/72/87/6f/72876f7b00b8fb8914a91d162a712f0d.jpg"
    },
    {
      templeName: "Fortaleza Brazil",
      location: "Fortaleza, Brazil",
      dedicated: "2019, June, 2",
      area: 37600,
      imageUrl: "https://s3-us-west-2.amazonaws.com/ldsdaily/Photos+for+Posts/Temples/Fortaleza/20190319_112136_MReier_FT_EXT_MTR9498alt.jpg"
    },
    {
      templeName: "Bangkok Thailand",
      location: "Bangkok, Thailand",
      dedicated: "2023, October, 22",
      area: 48302,
      imageUrl: "https://bk.asia-city.com/sites/default/files/u143789/bangkok-thailand-temple-35010-main.jpg"
    },
    {
      templeName: "San Juan Puerto Rico",
      location: "San Juan, Puerto Rico",
      dedicated: "2024, January, 15",
      area: 29000,
      imageUrl: "https://files.mormonsud.org/wp-content/uploads/2022/11/Templo-de-San-Juan-Puerto-Rico-3.png"
    },
    {
      templeName: "Okinawa Japan",
      location: "Okinawa, Japan",
      dedicated: "2024, November, 17",
      area: 11000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-thumb.jpg"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    // Mostrar el año actual en el footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // Obtener y formatear la fecha de última modificación
    const lastModified = new Date(document.lastModified);
    const formattedDate = `${lastModified.getFullYear()}-${String(lastModified.getMonth() + 1).padStart(2, '0')}-${String(lastModified.getDate()).padStart(2, '0')} ${String(lastModified.getHours()).padStart(2, '0')}:${String(lastModified.getMinutes()).padStart(2, '0')}:${String(lastModified.getSeconds()).padStart(2, '0')}`;
    document.getElementById("lastModified").textContent = formattedDate;

    // Evento para el botón de menú hamburguesa
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", function() {
        menu.classList.toggle("open");
    });

    // Llenar la galería de templos
    const templeGallery = document.getElementById("templeGallery");
    temples.forEach(temple => {
        const templeElement = document.createElement("div");
        templeElement.classList.add("temple");

        templeElement.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}">
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
        `;

        templeGallery.appendChild(templeElement);
    });
});

