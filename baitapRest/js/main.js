const getElement = (id) => document.getElementById(id);

const tinhDiemTB = (...param) => {
  let total = 0;
  for (let i = 0; i < param.length; i++) {
    total += param[i] / param.length;
  }
  return total;
};

getElement("btnKhoi1").onclick = () => {
  const arrNum1 = [];
  const diemToan = Number(getElement("inpToan").value);
  const diemLy = Number(getElement("inpLy").value);
  const diemHoa = Number(getElement("inpHoa").value);
  const total1 = tinhDiemTB(diemToan, diemLy, diemHoa);
  getElement("tbKhoi1").innerHTML = total1.toFixed(2);
};

getElement("btnKhoi2").onclick = () => {
  const arrNum2 = [];
  const diemVan = Number(getElement("inpVan").value);
  const diemSu = Number(getElement("inpSu").value);
  const diemDia = Number(getElement("inpDia").value);
  const diemAnh = Number(getElement("inpEnglish").value);
  const total2 = tinhDiemTB(diemVan, diemSu, diemDia, diemAnh);
  getElement("tbKhoi2").innerHTML = total2.toFixed(2);
};
