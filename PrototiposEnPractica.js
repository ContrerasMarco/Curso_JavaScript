class Animal {
  //creamos una clase mas un constructor
  constructor(nombre, tipo) {
    //constructor con dos parametros
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

perroCasa.nuevoMetodo = function () {
  console.log("Soy un callejero");
};

Perro.prototype.metodoDos = function () {
  console.log("Agregando al prototype un nuevo metodo");
};
//para agregar un prototype solo se puede hacer hacia una clase o funcion constructora y no a una instancia.
//con esto agregamos un nuevo metodo para que se incluya la crear una instancia. este prototipo se agrega a la clase constructora.
//Este metodo no se esta heredando desde una clase padre sino que se esta agregando a traves de un prototype
Perro.prototype;
perroCasa.metodoDos(); //llamamos al metodo para que imprima el mensaje
perroCasa.nuevoMetodo(); //llamamos al metodo para que imprima el mensaje
