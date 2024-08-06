/*const EquipoTeam = {
    Nombre: "Charles",
    Apellido: "Aranguiz",
    Dorsal: "20",
    Posicion: "Volante"
    
}*/
/*la funcion constructora sirve para crear objetos de forma dinamica, la sintaxis es parecida a una funcion normal, un cambio
es que el nombre de la funcion constructora debe comenzar con una mayuscula.*/
//A la funcion le pasamos como parametros las propiedades del objeto creado.
//luego dentro de la funcion tenemos que hacer referencia con el objeto creado
//y para eso debemos hacerlo con el metodo this para que haga referencia al objeto con la funcion constructora
function Jugadoruch(nombre, apellido, dorsal, posicion) {
  //se crea una funcion constructora para luego crear los objetos y se utiliza el metodo this para la referencia
  this.nombre = nombre;
  this.apellido = apellido;
  this.dorsal = dorsal;
  this.posicion = posicion;
}
//luego creamos una instancia que es en donde seguimos creando el tipo de objeto antes creado
//en una variable.

const jugador1 = new Jugadoruch("Marcelo", "Diaz", "21", "volante"); // aqui creamos las instancia para crear un objeto
const jugador2 = new Jugadoruch("Marcelo", "Morales", "22", "defensa");
const jugador3 = new Jugadoruch("Marcelo", "Salas", "11", "delantero");
const jugador4 = new Jugadoruch("Sergio", "vargas", "01", "arquero");

console.log(jugador1); //imprimimos el objeto
console.log(jugador2);
console.log(jugador3);
console.log(jugador4);

//con el metodo prototype podemos agregar una nueva propiedad al objeto. este puede estar con la propiedad y queda para todos ya incluidos o podemos dejar
//por ejemplo agregar una propiedad con un string vacio y luego agregarlo cuando sea necesario.
console.log("----------------");
Jugadoruch.prototype.edad = ""; //se crea una nueva propiedad con el metodo prototype en este caso vacio y queda disponible para cuando se crea uan nueva instancia.
jugador1.edad = "30"; //rellenamos esa nueva propiedad para solo una instancia o si queremos mas adelante podemos rellenar para las siguientes instancias.

console.log(jugador1); //verifico que la porpiedad edad agregada con el metodo prototype queda agregada para este y todos los demas objetos creados anteriormente.
console.log(jugador2);
console.log(jugador3);
console.log(jugador4);
console.log("------------------------");
Jugadoruch.prototype.ficha = function () {
  // se crea una funcion anonimapara msotrar con template literal un tipo de presentacion donde accedemos a su nombre y su posicion.
  console.log(
    `Hola soy ${this.nombre} y mi posicion favorita es ${this.posicion}`
  );
};
jugador1.ficha(); //se imprime por pantalla la funcion.
