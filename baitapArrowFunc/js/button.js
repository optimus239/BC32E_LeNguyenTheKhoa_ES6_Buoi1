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

window.onload = () => {
  let html = "";
  for (let i = 0; i < colorList.length; i++) {
    html += `<button class="color-button ${colorList[i]}"></button>`;
    document.getElementById("colorContainer").innerHTML = html;
  }
};

const getElement = (id) => document.getElementById(id);
const querySelect = (i) => document.querySelector(i);

const changeColor = (color) => {
  getElement("house").className = `house ${color}`;
  getElement("house").style.backgroundColor = `${color}`;
  document.querySelector(color), (className = `color-button ${color} active`);
};

const btn = document.querySelectorAll("button");
console.log("btn: ", btn);
