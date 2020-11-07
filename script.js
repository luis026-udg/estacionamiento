function createStartArray() {
  startArray = ["leche", "huevos", "pan", "yogurt", "frijoles", "pollo", "café"];
  startArray.push("arroz");
}
function createArrayInvert() {
  arrayInvert = startArray.slice();//Esta linea utiliza el metodo slice para crear una copia independiente de un array en JS
  arrayInvert.reverse();
}
function createFinalArray() {
  finalArray = arrayInvert.slice();//Esta linea utiliza el metodo slice para crear una copia independiente de un array en JS
  let posicionLeche = finalArray.indexOf("leche");
  let posicionCafe = finalArray.indexOf("café");
  finalArray.splice(posicionLeche, 1, "leche descremada")
  finalArray.splice(posicionCafe, 1, "café descafeinado")
}
function displayArrays(showArray) 
{
  for (var i = 0; i < showArray.length; i++) {
    let posicion = 0;
    let valor = 0;
    posicion = i;
    valor = showArray[i];
    resultado.insertAdjacentHTML("beforeend", `<br>El elemento en la posición ${posicion} es ${valor} `);
  }
}
function playGame() {
  startArray = [];
  arrayInvert = [];
  finalArray = [];
  createStartArray();
  createArrayInvert();
  createFinalArray();
  console.log(finalArray);
  document.getElementById("resultado").innerHTML = "<br>";
  resultado.insertAdjacentHTML("beforeend", `<h2>Arreglo 1</h2>`);
  displayArrays(arrayInvert);
  resultado.insertAdjacentHTML("beforeend", `<h2>Arreglo 2</h2>`);
  displayArrays(finalArray);
}
var startArray = [];
var arrayInvert = [];
var finalArray = [];
var resultado = document.getElementById("resultado");
var b = document.getElementById("play");
b.addEventListener("click", playGame);
