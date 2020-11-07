function playGame() 
{
  
  document.getElementById("resultado").innerHTML = "<br>";
  resultado.insertAdjacentHTML("beforeend", `<h2>Start</h2> `);
  showElements();
  
  cajones.splice(lastElement, 1, "Blanco");
  
  resultado.insertAdjacentHTML("beforeend", `<h2>Agregar Auto Blanco</h2> `);
  showElements();
  let posicionElementoBusqueda = cajones.indexOf("Amarillo");
  resultado.insertAdjacentHTML("beforeend", `<h2>Busqueda Vehículo Amarillo</h2> `);
  resultado.insertAdjacentHTML("beforeend", `El Vehículo Amarillo se encuentra en la posicion ${posicionElementoBusqueda}  `);
  
  resultado.insertAdjacentHTML("beforeend", `<h2>Busqueda de un Auto mediante función FOR</h2> `);
  
  var colorAutoBusqueda = "Gris";
  encontrarAuto(colorAutoBusqueda);
}


function encontrarAuto(colorAuto) {
  let encontrado = false;
  let posicion;
  for (let i = 0; i < cajones.length; i++) {
    if (cajones[i] == colorAuto) {
      posicion = i;
      encontrado = true;
      break;
    }
  }
  if (encontrado == true) {
    resultado.insertAdjacentHTML("beforeend", `<br>El carro de color ${colorAuto} esta en la posición ${posicion}. `);
  }
  else {
    resultado.insertAdjacentHTML("beforeend", `<br>El carro de color ${colorAuto} no esta en el estacionamiento`);
  }
  
}
function showElements() {
  
  carros_estacionados = cajones.length;
  for (let i = 0; i < cajones.length; i++) {
    let valor = cajones[i];
    let posicion = i;
    if (cajones[i] == "vacio") {
      carros_estacionados--;
      resultado.insertAdjacentHTML("beforeend", `<br><strong>El elemento en la posición ${posicion} esta Vacio </strong>`);
    }
    else {
      resultado.insertAdjacentHTML("beforeend", `<br>El elemento en la posición ${posicion} es ${valor} `);
      
    }
    console.log(posicion);
  }
  resultado.insertAdjacentHTML("beforeend", `<br><br>En este momento hay ${carros_estacionados} carros en el estacionamiento `);
  
  
}
var resultado = document.getElementById("resultado");
var b = document.getElementById("play");
b.addEventListener("click", playGame);
var cajones = [];
cajones = ["Rojo", "Gris", "Azul", "Amarillo", "Verde", "vacio"];
console.log(cajones);
var carros_estacionados = cajones.length;
var lastElement = cajones.length - 1;
