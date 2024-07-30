//Creando un array

//1. new Array() or Array()

const frutas = Array("Uva", "pera", "platano", "mora", "manzana");
console.log(frutas);
console.log(frutas.length);

const soloUnNumero = Array(12); // crea un array vacio pero con 12 posibles elementos
console.log(soloUnNumero);

const numeros = Array(1, 2, 3, 4, 5, 6, 7, 8); //lo mismo que el primer ejemplo.
console.log(numeros);

//Declaracion de un array literal

const equipos = ["Udechile", "CC", "UC"];
console.log(equipos);
console.log(equipos.length);

const sports = []; //Array vacio
console.log(sports);

//Se pueden hacer array mixtos donde podemos meter un objeto dentro de un array.
const licores = [
  "vino",
  "pisco",
  "cerveza",
  {
    comida: "papas",
    cantidad: "3 bolsas",
  },
];
console.log(licores);
