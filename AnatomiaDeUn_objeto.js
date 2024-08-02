/* un objeto es una estrucutura de daos que permite guardar datos
tienen una propiedad y un valor. esto se llama igual programacion orienrada a objetos
sintaxis.
objeto {
propiedad:valor,
propiedad:valor,
propiedad:valor
}
*/
//construir una persona en javascript
//ademas los objetos pueden contener metodos dentro del objeto como una funcion.
const persona = {
  //creacion de un objeto con diferentes propiedades y valores y ademas de una funcion para saludar.
  nombre: "marco",
  apellido: "lastname",
  edad: 40,
  address: {
    //se agrega otro objeto dentro del mismo objeto.
    calle: "la moneda",
    ciudad: "santiago",
  },
  saludar() {
    //funcionpara saludar
    console.log(
      `hola mi nombre es ${persona.nombre}, mi apellido es ${persona.apellido}, tengo ${persona.edad} años`
    );
  },
};
//console.log(persona);
persona.saludar(); //llamamos a la funcion dentro del objeto creado

persona.telefono = "555 555 555"; //Manera de agregar una nueva propiedad al objeto
console.log(persona);

//para eliminar un metodo utilizamos lo siguiente

delete persona.saludar;
console.log(persona);

//para eliminar una propiedad de un objeto
delete persona.address;
console.log(persona);
