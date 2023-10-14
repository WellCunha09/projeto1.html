const outDias = document.getElementById('dias');
const outMinutos = document.getElementById('minutos');
const outSegundos = document.getElementById('segundos');

//chamas as respectivas funcões para alterar o HTML
function chamarFuncoes(e) {
  outDias.innerHTML = horasParaDias(e);
  outMinutos.innerHTML = horasParaMinutos(e);
  outSegundos.innerHTML = horasParaSegundos(e);
}

//corveter horas para dias
function horasParaDias(horas) {
  var res = horas / 24;

  res = res.toFixed(2);

  return res;
}

//converter horas para minutos
function horasParaMinutos(horas) {
  var res = horas * 60;

  return res;
}

//converter horas para segundos
function horasParaSegundos(horas) {
  var res = horas * 60 * 60;

  return res;
}