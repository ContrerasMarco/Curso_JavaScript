//Funciones y metodos en JS

//Pasar funciones como argumentos (Callback)

function a() {}
function b(a) {}
b(a);

function fruta() {
  return "uva";
}
function mensaje(fruta) {
  return `hola soy una funcion dentro de otra y me gusta la ` + fruta;
}
console.log(mensaje(fruta()));

function fruit() {
  return "🍏";
}

function message(fruit) {
  return "Ì would love to have an " + fruit;
}

console.log(message(fruit()));
let resultado;
function suma() {
  return 2 + 2;
}

function result(suma) {
  const sumado = suma();
}
resultado = suma();
console.log(`la suma es ${resultado}`);

//Asignar funciones a variables (expresion de funciones)

//const a = function () {}; //Se debe dejar sin nombre a la funcion ya que la variables vendria reemplazando el nombre

// Tener propiedades y metodos en una funcion, pasar un objeto a una funcion y funcion anidada

const usuario = {
  // se crea un objeto
  nombre: "Mauricio",
  apellido: "alaves",
  edad: "40",
};
/*function saludarUsuario(usuario) {
  return (`Hola como esta ${usuario.nombre}`);
}
console.log(saludarUsuario(usuario));*/
//////////////////////////////////////////////////////////////////

function DatosUsuario(usuario) {
  function NameUsuario() {
    return `Hola usuario ${usuario.nombre}`;
  }
  console.log(NameUsuario());

  function LastnameUsuario() {
    return `Hola, sabemos que tu apellido es ${usuario.apellido}`;
  }
  console.log(LastnameUsuario());

  function EdadUsuario() {
    return `y tambien sabemos cual es su edad  ${usuario.edad}`;
  }
  console.log(EdadUsuario());
}
DatosUsuario(usuario);

//Almacenar funciones en objetos.

const cohete = {
  nombre: "falcon 9",
  MensajeLanzamiento: function LaunchMessaje() {
    console.log("Lanzamiento exitoso falcon 9");
  },
};
cohete.MensajeLanzamiento();
