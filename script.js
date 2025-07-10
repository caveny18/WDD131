// FECHA DE INICIO (ajústala para tu sorpresa)
const fechaInicio = new Date('2025-07-06');

const datos = [
  {
    atributo: "✨ Amor ✨",
    frase: '"El amor todo lo soporta, todo lo espera. — 1 Corintios 13"',
    recuerdo: "Cada día que estoy a tu lado puedo ver y puedo entender más acerca del amor que Cristo tiene para cada uno de sus hijos. El amor que reflejas hacia cada persona, hacia tus semejantes, te hace una persona totalmente increíble. Y ayudas a que más personas por medio de ti puedan conocer el amor que Cristo tiene. Y gracias por demostrarme tu amor cada día.",
    foto: "dia1.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Inteligente ✨",
    frase: '"La gloria de Dios es la inteligencia." — Doctrina y Convenios 93:36',
    recuerdo: "Me encanta este atributo de Jesucristo. La inteligencia se radica mucho en no solamente tener un conocimiento, sino en poder elegir hacer lo bueno. Me encanta cómo por medio de tus decisiones te esfuerzas por hacer lo correcto, aunque a veces sea difícil.",
    foto: "dia2.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Humildad ✨",
    frase: '"Dios enaltece a los humildes de corazón." — Lucas 14:11',
    recuerdo: "Me encanta cuando escuchas y aprendes, me sorprende la capacidad que tienes de aprender y desarrollar tan facilmente las mejoras necesarias en tu vida, yo estoy aprendiendo mucho de ti, me encanta como conces tus limitaciones, porque eso te hace mejor cada día te amo",
    foto: "dia3.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Paciencia ✨",
    frase: '"La paciencia es el arte de confiar en el tiempo de Dios."',
    recuerdo: "Sabes el recuerdo que me hace amarte cada día un poco más, es el que no me te hayas ido cuando estuve mal, no te alejaste, me ayudate y te qedaste. Mi amor temereces todo quiero hacerte tan feliz como tu me haces, quiero hacerte soñar asi como tu abriste mi mente para soñar un futuro a tu lado, gracias por tu paciencia mi amor",
    foto: "dia4.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto, y dale muchos besitos a tu amorcito y comparte lo que haz aprendido."
  },
  {
    atributo: "✨ Mansedumbre ✨",
    frase: '"Aprended de mí, que soy manso y humilde de corazón." — Mateo 11:29',
    recuerdo: "Sabes eres mansa, te esfuerzas por ir donde tus papas te dicen, cuestionas a vece, pero creo que para no perder la costumbre amorcito, sigue asi mi amor y sigue aun desarrollando estos maravillosos atributos te amo.",
    foto: "dia5.jpg",
    reto: "Amor no te olvides de anotar tus sentimientos, lo hice con mucho amor para tí."
  },
  {
    atributo: "✨ Gratitud ✨",
    frase: '"Dad gracias en todo." — 1 Tesalonicenses 5:18',
    recuerdo: "Este es un atributo increible, porque nos ayuda a recordar a Dios mailove y de donde viene cada cosa, me encanta que pases tiempo con tu familia, que te esfuerzas por amarlos, gracias por esforzarte en tu llamamiento, la gratitud aparte de hablarlo y decir gracias se demuestra cuando amas lo que se te dio y eso lo veo en ti, te amo"
    foto: "dia6.jpg",
    reto: "Ahora que descubriste este nuevo atributo guapota, tómate el día de hoy 7 minutos para leer más acerca de esto, no seas falla."
  },
  {
    atributo: "✨ Esperanza ✨",
    frase: '"La esperanza no defrauda." — Romanos 5:5',
    recuerdo: "",
    foto: "dia7.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Gozo ✨",
    frase: '"El gozo del Señor es mi fortaleza." — Nehemías 8:10',
    recuerdo: "",
    foto: "dia8.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Generosidad ✨",
    frase: '"Hay más dicha en dar que en recibir." — Hechos 20:35',
    recuerdo: "",
    foto: "dia9.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Perseverancia ✨",
    frase: '"Corred con paciencia la carrera que tenéis por delante." — Hebreos 12:1',
    recuerdo: "",
    foto: "dia10.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Servicio ✨",
    frase: '"El mayor entre vosotros será vuestro servidor." — Mateo 23:11',
    recuerdo: "",
    foto: "dia11.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Bondad ✨",
    frase: '"Sed bondadosos y compasivos." — Efesios 4:32',
    recuerdo: "",
    foto: "dia12.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Compasión ✨",
    frase: '"Jesús tuvo compasión de ellos." — Mateo 14:14',
    recuerdo: "",
    foto: "dia13.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Fortaleza ✨",
    frase: '"Todo lo puedo en Cristo que me fortalece." — Filipenses 4:13',
    recuerdo: "",
    foto: "dia14.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Prudencia ✨",
    frase: '"Sed prudentes como serpientes y sencillos como palomas." — Mateo 10:16',
    recuerdo: "",
    foto: "dia15.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Obediencia ✨",
    frase: '"Si me amáis, guardad mis mandamientos." — Juan 14:15',
    recuerdo: "",
    foto: "dia16.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Sencillez ✨",
    frase: '"Bienaventurados los de corazón limpio." — Mateo 5:8',
    recuerdo: "",
    foto: "dia17.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Alegría ✨",
    frase: '"Estad siempre gozosos." — 1 Tesalonicenses 5:16',
    recuerdo: "",
    foto: "dia18.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Fidelidad ✨",
    frase: '"Sé fiel hasta la muerte." — Apocalipsis 2:10',
    recuerdo: "",
    foto: "dia19.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Sabiduría ✨",
    frase: '"El principio de la sabiduría es el temor de Dios." — Proverbios 9:10',
    recuerdo: "",
    foto: "dia20.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Disciplina ✨",
    frase: '"El que ama la disciplina ama el conocimiento." — Proverbios 12:1',
    recuerdo: "",
    foto: "dia21.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Templanza ✨",
    frase: '"El dominio propio es fruto del Espíritu." — Gálatas 5:23',
    recuerdo: "",
    foto: "dia22.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Justicia ✨",
    frase: '"Practica la justicia, ama la misericordia." — Miqueas 6:8',
    recuerdo: "",
    foto: "dia23.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Misericordia ✨",
    frase: '"Sed misericordiosos como vuestro Padre." — Lucas 6:36',
    recuerdo: "",
    foto: "dia24.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Honestidad ✨",
    frase: '"El justo camina en su integridad." — Proverbios 20:7',
    recuerdo: "",
    foto: "dia25.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Paz ✨",
    frase: '"Bienaventurados los pacificadores." — Mateo 5:9',
    recuerdo: "",
    foto: "dia26.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Confianza ✨",
    frase: '"Confía en el Señor con todo tu corazón." — Proverbios 3:5',
    recuerdo: "",
    foto: "dia27.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Valentía ✨",
    frase: '"Esfuérzate y sé valiente." — Josué 1:9',
    recuerdo: "",
    foto: "dia28.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Caridad ✨",
    frase: '"La caridad nunca deja de ser." — 1 Corintios 13:8',
    recuerdo: "",
    foto: "dia29.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  },
  {
    atributo: "✨ Santidad ✨",
    frase: '"Sed santos porque yo soy santo." — 1 Pedro 1:16',
    recuerdo: "",
    foto: "dia30.jpg",
    reto: "Ahora que descubriste este nuevo atributo, tómate el día de hoy 5 minutos para leer más acerca de esto."
  }
];

const hoy = new Date();
const diferencia = Math.floor((hoy - fechaInicio) / (1000 * 60 * 60 * 24));
const diaActual = diferencia + 1;

// ELEMENTOS
const diaNumero = document.getElementById('dia-numero');
const tarjeta = document.getElementById('tarjeta');
const botonDescubrir = document.getElementById('descubrir-btn');
const progresoFill = document.getElementById('progress-fill');

const atributoEl = document.getElementById('atributo');
const fraseEl = document.getElementById('frase');
const recuerdoEl = document.getElementById('recuerdo');
const fotoEl = document.getElementById('foto');
const retoEl = document.getElementById('reto');
const reflexionText = document.getElementById('reflexion-text');
const guardarReflexionBtn = document.getElementById('guardar-reflexion');
const mensajeGuardado = document.getElementById('mensaje-guardado');

// Modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementsByClassName('close')[0];

// PROGRESO
if (diaActual > 0 && diaActual <= datos.length) {
  const porcentaje = Math.floor((diaActual / datos.length) * 100);
  progresoFill.style.width = `${porcentaje}%`;
} else if (diaActual > datos.length) {
  progresoFill.style.width = '100%';
} else {
  progresoFill.style.width = '0%';
}

// BOTÓN DESCUBRIR
if (diaActual > 0 && diaActual <= datos.length) {
  diaNumero.textContent = `Día ${diaActual} de ${datos.length}`;
  const item = datos[diaActual - 1];

  atributoEl.textContent = item.atributo;
  fraseEl.textContent = item.frase;
  recuerdoEl.textContent = item.recuerdo;
  fotoEl.src = item.foto;
  retoEl.textContent = item.reto;

  // Cargar reflexión guardada
  const key = `reflexion-dia${diaActual}`;
  const savedReflexion = localStorage.getItem(key);
  if (savedReflexion) {
    reflexionText.value = savedReflexion;
  }

  // Guardar reflexión
  guardarReflexionBtn.addEventListener('click', () => {
    const texto = reflexionText.value.trim();
    localStorage.setItem(key, texto);
    mensajeGuardado.textContent = "✅ ¡Reflexión guardada!";
    setTimeout(() => mensajeGuardado.textContent = "", 3000);
  });

  // Mostrar tarjeta al descubrir
  botonDescubrir.addEventListener('click', () => {
    botonDescubrir.style.display = 'none';
    tarjeta.classList.remove('oculto');
  });

} else if (diaActual > datos.length) {
  diaNumero.textContent = "🎉 ¡Felicidades! 🎉";
  botonDescubrir.style.display = 'none';
  tarjeta.classList.remove('oculto');
  atributoEl.textContent = "Has completado la cuenta regresiva.";
  fraseEl.textContent = "Gracias por acompañarme cada día.";
  recuerdoEl.textContent = "Hoy celebramos juntos 20 meses llenos de amor y fe. ❤️";
  fotoEl.style.display = 'none';
  retoEl.textContent = "Disfruta este día especial a mi lado.";
} else {
  diaNumero.textContent = "✨ ¡Aún no empieza la cuenta regresiva! ✨";
  botonDescubrir.style.display = 'none';
}

// MODAL DE FOTO
fotoEl.addEventListener('click', () => {
  modal.style.display = "block";
  modalImg.src = fotoEl.src;
});

closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// MEMORIA / HISTORIAL
const memoriaLista = document.getElementById('memoria-lista');

for (let i = 0; i < diaActual && i < datos.length; i++) {
  const item = datos[i];
  const contenedor = document.createElement('div');
  contenedor.classList.add('memoria-item');

  const titulo = document.createElement('p');
  titulo.classList.add('memoria-titulo');
  titulo.textContent = `✅ Día ${i+1}: ${item.atributo.replace("✨", "").trim()}`;

  const detalle = document.createElement('div');
  detalle.classList.add('memoria-detalle');

  // Reflexión guardada
  const reflexionKey = `reflexion-dia${i+1}`;
  const reflexionGuardada = localStorage.getItem(reflexionKey) || "";

 detalle.innerHTML = `
  <p><strong>✨ ${item.atributo}</strong></p>
  <p><em>${item.frase}</em></p>
  <p>💌 <strong>Recuerdo:</strong> ${item.recuerdo}</p>
  <img src="${item.foto}" alt="Foto día ${i+1}">
  <p>🌟 <strong>Reto:</strong> ${item.reto}</p>
  <div class="reflexion-historial">
    <h4>🖊️ Tu reflexión personal</h4>
    <textarea id="reflexion-dia${i+1}" placeholder="Escribe aquí tu reflexión...">${reflexionGuardada}</textarea>
    <button class="guardar-reflexion-btn" data-dia="${i+1}">💾 Guardar cambios</button>
    <p class="mensaje-guardado" id="mensaje-guardado-dia${i+1}"></p>
  </div>
`;
// Asignar evento al botón de guardar reflexión
setTimeout(() => {
  const btnGuardar = contenedor.querySelector(`.guardar-reflexion-btn[data-dia="${i+1}"]`);
  const textarea = contenedor.querySelector(`#reflexion-dia${i+1}`);
  const mensaje = contenedor.querySelector(`#mensaje-guardado-dia${i+1}`);

  btnGuardar.addEventListener('click', () => {
    const texto = textarea.value.trim();
    localStorage.setItem(`reflexion-dia${i+1}`, texto);
    mensaje.textContent = "✅ ¡Reflexión guardada!";
    setTimeout(() => mensaje.textContent = "", 3000);
  });
}, 0);


  contenedor.appendChild(titulo);
  contenedor.appendChild(detalle);

  contenedor.addEventListener('click', () => {
    detalle.style.display = detalle.style.display === 'none' ? 'block' : 'none';
  });

  memoriaLista.appendChild(contenedor);
}

// BOTÓN DE DESCARGA
const descargarBtn = document.getElementById('descargar-pdf');

if (diaActual >= datos.length) {
  descargarBtn.classList.remove('oculto');
}

descargarBtn.addEventListener('click', async () => {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF('p', 'mm', 'a4');

  const items = document.querySelectorAll('.memoria-item');
  if (items.length === 0) {
    alert("No hay atributos desbloqueados aún.");
    return;
  }

  descargarBtn.textContent = "Generando PDF... Por favor espera ❤️";

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    await html2canvas(item, {
      scale: 2,
      useCORS: true
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = 210;
      const pdfHeight = 297;
      const imgRatio = imgProps.width / imgProps.height;
      let imgHeight = pdfWidth / imgRatio;

      if (imgHeight > pdfHeight) {
        imgHeight = pdfHeight;
      }

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight);

      if (i < items.length - 1) {
        pdf.addPage();
      }
    });
  }

  pdf.save('Diario_de_Amor.pdf');
  descargarBtn.textContent = "📥 Descarga tu Diario en PDF";
});

// ❤️ AUDIO AUTOMÁTICO AL PRIMER CLICK
document.addEventListener('click', () => {
  const audio = document.getElementById('audio-fondo');
  const mensaje = document.getElementById('mensaje-audio');

  if (audio && audio.paused) {
    audio.play().catch((error) => console.log("Error al reproducir audio:", error));
  }

  if (mensaje) {
    mensaje.style.display = "none";
  }
}, { once: true });

// ❤️ AUDIO AUTOMÁTICO AL PRIMER CLICK
document.addEventListener('click', () => {
  const audio = document.getElementById('audio-fondo');
  const mensaje = document.getElementById('mensaje-audio');

  if (audio && audio.paused) {
    audio.play().catch((error) => console.log("Error al reproducir audio:", error));
  }

  if (mensaje) {
    mensaje.style.display = "none";
  }
}, { once: true });
