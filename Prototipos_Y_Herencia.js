/*En la programación, la herencia se refiere a la transmisión de las características de un padre a un niño 
para que una nueva pieza de código pueda reutilizar y construir sobre las características de uno existente. 
JavaScript implementa la herencia mediante el uso de objetos. Cada objeto tiene un vínculo interno con otro 
objeto llamado su prototipo. Ese objeto prototipo tiene un prototipo propio, y así aún hasta que se alcanza un 
objeto con null como su prototipo. Por definición, null no tiene prototipo y actúa como el eslabón final de esta 
cadena prototipo. Es posible mutar a cualquier miembro de la cadena prototipo o incluso intercambiar el prototipo 
en tiempo de ejecución, por lo que conceptos como el envío estático no existen en JavaScript.*/

//Prototipo y herencia
/*los prototipos solo existen en funciones de objetos como las clases o funciones constructoras
solo estas dos van a generar lo que se llama propiedad que es un prototipo que es crear un molde para poder usarlo despues con una clase hijo,*/

class Animal {
  //creamos una clase mas un constructor
  constructor(nombre, tipo) {
    //cosntructor con dos parametros
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirSonido() {
    //se crea un metodo para imprimir un mensaje
    console.log("El animal emite sonido");
  }
}

class Perro extends Animal {
  //creamos una nueva clase que va a ser el hijo de la clase animal y la referenciamos con extends y con esto podemos utilizar propiedades de la clase animal
  constructor(nombre, tipo, raza) {
    //en el constructor colocamos las propiedades de la clase padre y ademas de la clase local.
    super(nombre, tipo); // con esta palabra reservada puedo traer desde otra clase constructora padre las propiedades para poder usarlas en la clase constructora hijo.
    this.raza = raza; //con this hacemso referencia a la propiedad de la clase cosntructora local, solo usamos this para eso no es necesario usarlo para hacer referencia a otras propiedades.
  }
  emitirSonido() {
    console.log("el perro ladra");
  }
  correr() {
    console.log(`Nuestro ${this.nombre} es muy feliz`);
  }
}

const perroCasa = new Perro("Dixi", "perro", "salchiza");
console.log(perroCasa);
perroCasa.correr();
perroCasa.emitirSonido();

console.log("-----------------------");

class EquipoFutbol {
  constructor(nombre, añoFundacion) {
    this.nombre = nombre;
    this.añoFundacion = añoFundacion;
  }
  fechafundacion() {
    console.log(`Nuestro año de fundacion fue en el año ${this.añoFundacion}`);
  }
}
class FichaEquipo extends EquipoFutbol {
  constructor(nombre, añoFundacion, colorEquipacion, UltimoTitulo) {
    super(nombre, añoFundacion);
    this.colorEquipacion = colorEquipacion;
    this.UltimoTitulo = UltimoTitulo;
  }

  Felicitaciones() {
    console.log(
      `Felicitacion a ${this.nombre} en su aniversario de fundacion en el año ${this.añoFundacion}`
    );
  }
}

const Udechile = new FichaEquipo("UdeChile", "1927", "Azul", "2018");
console.log(Udechile);
Udechile.Felicitaciones();
Udechile.fechafundacion();
