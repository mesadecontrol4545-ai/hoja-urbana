// Hoja Urbana - Catálogo

const WHATSAPP_NUMBER = "522211893908"; // sin +

const products = [
  { title: "Bota todoterreno (Beige)", id: "1274111", price: "$999", desc: "Para frío y calle. Suela chunky, look urbano y cómodo.", image: "img/producto_1.png" },
  { title: "Bota invernal ajustable (Negra)", id: "1149867", price: "$335", desc: "Abriga sin perder estilo. Ajuste superior y plataforma ligera.", image: "img/producto_2.png" },
  { title: "Bota todoterreno (Gris)", id: "1274112", price: "$999", desc: "Todoterreno real: resistente, combinable y lista para el diario.", image: "img/producto_3.png" },
  { title: "Tenis urbano cebra", id: "1248742", price: "$799", desc: "Atrevido y juvenil. Contraste blanco/negro con toque street.", image: "img/producto_4.png" },
  { title: "Sandalia tacón (Negra)", id: "1285542", price: "$539", desc: "Elegante y versátil. Tacón fino para salir sin sufrir.", image: "img/producto_5.png" },
  { title: "Tenis urbano hearts", id: "1298005", price: "Precio por WhatsApp", desc: "Cómodo y llamativo. Detalle de corazones para un look cool.", image: "img/producto_6.png" },
  { title: "Kit sandalia tacón básicas", id: "1312332", price: "$869", desc: "Dos pares, más outfits. Perfectas para oficina, cita o evento.", image: "img/producto_7.png" },
  { title: "Sandalia plana piedras", id: "1203193", price: "$579", desc: "Brilla sin exagerar. Detalles con pedrería para elevar tu outfit.", image: "img/producto_8.png" },
  { title: "Zapatilla tacón asimétrico (Negra)", id: "1031556", price: "$619", desc: "Premium y poderosa. Punta fina para verte y sentirte increíble.", image: "img/producto_9.png" },
  { title: "Zapatilla con estoperoles (Negra)", id: "1169147", price: "$899", desc: "Actitud total. Estoperoles sutiles para un look más fuerte.", image: "img/producto_10.png" },
];

function buildWhatsAppLink(productId, productTitle, productPrice) {
  // Captura UTMs si vienen de campaña (opcional)
  const params = new URLSearchParams(window.location.search);
  const utm = [
    params.get("utm_source"),
    params.get("utm_medium"),
    params.get("utm_campaign"),
  ].filter(Boolean).join(" / ");

  const priceLine = productPrice ? `\nPrecio publicado: ${productPrice}` : "";
  const utmLine = utm ? `\nCampaña: ${utm}` : "";

  const text = `Hola, soy cliente de Hoja Urbana 💚\nMe interesa este modelo:\n• ${productTitle}\n• ID ${productId}${priceLine}\n\n¿Me confirmas disponibilidad y mi talla, por favor?${utmLine}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const grid = document.getElementById("grid");

products.forEach((p) => {
  const card = document.createElement("div");
  card.className = "card reveal";

  card.innerHTML = `
    <img src="${p.image}" alt="${p.title}">
    <h3>${p.title}</h3>
    <a class="btn" href="${buildWhatsAppLink(p.id, p.title, p.price)}" target="_blank" rel="noopener noreferrer">Comprar por WhatsApp</a>
    <p class="id">ID ${p.id}</p>
    <p class="price">${p.price}</p>
    <p class="desc">${p.desc}</p>
  `;

  grid.appendChild(card);
});

// Animaciones suaves: reveal al hacer scroll
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
