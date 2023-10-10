function converter() {
  var horas = document.getElementById('n1').value;
  var res = document.getElementById('resultado');
  res.innerHTML = `${(horas / 24).toFixed(2)} Dias`;
}
