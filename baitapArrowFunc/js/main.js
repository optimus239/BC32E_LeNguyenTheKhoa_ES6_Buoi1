const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermil",
  "lion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const getElement = (id) => document.getElementById(id);
const querySelect = (i) => document.querySelector(i);
window.onload = () => {
  let html = [];
  for (let i = 0; i < colorList.length; i++) {
    html += `<button class="color-button ${colorList[i]}" onclick="changeColor('${colorList[i]}')"></button>`;
  }
  btnChangeColor = document.getElementById("colorContainer").innerHTML = html;
};

const changeColor = (color) => {
  getElement("house").className = `house ${color}`;
  getElement("house").style.backgroundColor = `${color}`;
};
