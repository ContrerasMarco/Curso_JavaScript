/* las clases son una forma de definir objetos, es decir, de crear plantillas o moldes a partir de los cuales 
se pueden generar múltiples objetos con características y comportamientos similares.*/
//la sintaxis para crear una clase y su constructor es la siguiente
class JugadorCL {
  //definimos la clase con la palabra reservada class y un nombre que debe comenzar con mayuscula.
  constructor(nombre, edad, posicion, dorsal) {
    //agregamos su constructor como una funcion y le pasamos parametros y hacemos referencia con la palabra this.
    this.nombre = nombre;
    this.edad = edad;
    this.posicion = posicion;
    this.dorsal = dorsal;
  }
  fichaJugador() {
    //se crea un metodo o funcion para acceder a los parametros definidos y poder usarlos.
    console.log(
      `Hola el nombre del jugador es ${this.nombre}, su posicion en el campo es ${this.posicion} y tiene ${this.edad} años`
    );
  }
}

const jugadorCL1 = new JugadorCL("marco", 35, "volante", 10); //se crea la instancia y le pasamos argumentos
jugadorCL1.fichaJugador(); //se imprime por pantalla para ver los resultados.
