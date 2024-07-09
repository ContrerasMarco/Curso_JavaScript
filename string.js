//creacion de string

const primerString = "Hola mundo";
const stringUnGuion = "un guion";
const stringComillasimples = `Comillas simples`;

//Concatenando string con +

const direccion = "calle falsa";
const comuna = " Santiago ";
const direccionCompleta =
  "La direccion es " + direccion + " " + " en la ciudad de " + comuna;
console.log(direccionCompleta);

// Concatenacion con template ${}

const nombre = "marco";
const apellido = "apellidofalso";
const nombreCompleto = `Hola me llamo ${nombre} y mi apellido es ${apellido}`;
console.log(nombreCompleto);

//Concatenacion con join()

const miPais = "Chile";
const miEdad = "39";
const miPerfil = [miPais, miEdad];
console.log(miPerfil.join(" "));

//Concatenacion con concat()

const pais1 = "Chile";
const pais2 = "brasil";
const pais3 = "Inglaterra";
const paisesFavoritos = " Mis paises favoritos son ".concat(
  pais1,
  ", ",
  pais2,
  ", ",
  pais3
);
console.log(paisesFavoritos);

//casos especiales con caracteres en ingles

const myname = "I'am marco"; //para colocar una comilla dentro de una frase como en ingles debe ir la frase entre comillas dobles y dentro la comilla simple
console.log(myname);

const myname2 = "I'am marco"; //otra alternativa es colocar el slash invertido si no se quiere usar comillas dobles.

const myname3 = `I'a Marco`; //usando comillas invertidas tambien podemos usar la comilla simple para frases en ingles.

//Probando salto de linea
const phrase =
  "Yo soy un joven,\n" + "que vivo en santiago, \n" + "hace muchos años";
console.log(phrase);

//Probando otro salto de linea

const phrase2 = "Yo soy un joven,\n que vivo en santiago, \n hace muchos años";
console.log(phrase2);

//tercer metodo para salto de linea

const phrase3 = `Yo soy un joven,
que vivo en santiago,
hace muchos años`;
console.log(phrase3);
