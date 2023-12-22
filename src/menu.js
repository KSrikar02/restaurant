function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Chicken Tandoori Masala",
      "Delicious chicken dish with Tandoori masala."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Dal Makhani",
      "Creamy lentil curry with a blend of spices."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Shahi Paneer",
      "Paneer (Indian cheese) cooked in a rich, creamy sauce."
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;