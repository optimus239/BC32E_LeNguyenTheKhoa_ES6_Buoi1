const getClass = (cls) => document.getElementsByClassName(cls);

const renderSpan = () => {
  let html = "";
  let string = getClass("heading")[0].innerHTML;
  const text = [...string];
  for (let i = 0; i < text.length; i++) {
    const chars = `<span>${text[i]}</span>`;
    html += chars;
  }
  getClass("heading")[0].innerHTML = html;
};

renderSpan();
