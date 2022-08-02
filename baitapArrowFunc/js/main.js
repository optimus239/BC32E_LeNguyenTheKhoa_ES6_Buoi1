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
window.onload = () => {
  let html = [];
  for (let i = 0; i < colorList.length; i++) {
    html += `<button class="color-button ${colorList[i]}" onclick="changeActive('${colorList[i]}')"></button>`;
  }
  document.getElementById("colorContainer").innerHTML = html;
};

const changeActive = (color) => {
  const btn = document.querySelectorAll(`#colorContainer button`);
  for (let i = 0; i < btn.length; i++) {
    const val = btn[i].classList;
    // console.log("val: ", val);
    if (val.value === `color-button ${color}`) {
      btn[i].classList.add("active");
      getElement("house").classList = `house ${color}`;
      getElement("house").style.backgroundColor = `${color}`;
    } else {
      btn[i].classList.remove("active");
    }
  }
};
