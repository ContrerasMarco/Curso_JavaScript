/* identificador this,
El identificador this es una referencia al objeto que está ejecutando el contexto actual del código en JavaScript. 
Te permite acceder a las propiedades y métodos de ese objeto.
Por ejemplo, dentro de un método de un objeto, this se refiere al objeto que contiene el método.*/
//
const auto = {
  marca: "susuki",
  año: "2000",
  modelo: "alto 800",
  modeloCar: function () {
    console.log(`Hola mi auto es un modelo ${this.modelo}`);
  },
};
auto.modeloCar();
