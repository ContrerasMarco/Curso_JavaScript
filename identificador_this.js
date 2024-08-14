/* identificador this,
El identificador this es una referencia al objeto que está ejecutando el contexto actual del código en JavaScript. 
Te permite acceder a las propiedades y métodos de ese objeto o clase.
Por ejemplo, dentro de un método de un objeto, this se refiere al objeto que contiene el método.*/
//
const auto = {
  marca: "susuki",
  año: "2000",
  modelo: "alto 800",
  modeloCar: function () {
    console.log(
      `Hola mi auto es un modelo ${this.modelo} y es del año ${this.año}`
    );
  },
};
auto.modeloCar();

class Car {
  constructor(modelo, tipoAuto, año) {
    this.modelo = modelo;
    this.tipoAuto = tipoAuto;
    this.año = año;
  }
  fichaCliente() {
    console.log(
      `el clietne tiene un auto del año ${this.año} y es de tipo ${this.tipoAuto}`
    );
  }
}

const auto1 = new Car("suzuki", "sedan", 2000);
console.log(auto1);
auto1.fichaCliente();
