function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const chefImage = document.createElement("img");
  chefImage.src = "images/restaurant.png";
  chefImage.alt = "Chef";

  home.appendChild(createParagraph("Welcome to Our Restaurant!"));
  home.appendChild(createParagraph("Indulge in the rich and diverse flavors of Indian cuisine at our restaurant. We take pride in offering a variety of authentic dishes that showcase the culinary heritage of India. From savory curries to tantalizing tandoori specialties, our menu is a journey through the vibrant and aromatic world of Indian spices. Join us for a memorable dining experience that captures the essence of India's gastronomic delights."));
  home.appendChild(chefImage);
  home.appendChild(createParagraph("Order online or visit us!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;