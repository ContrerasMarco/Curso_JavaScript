/*Iteracion con el metodo map(), este metodo ayuda a recorrer un array
pero no lo modifica y para entregar resultados crea un nuevo array*/
//metodo map()
const number = [2, 4, 6, 8]; //creamos el array original
const multiplicacion = number.map((num) => num * num); // creamos una variable a la cual el pasamos un arrow functions en donde multimplicas el numero por si mismo
console.log(number); //se imprime el array original para verificar que despues de la operacion este no haya cambiado
console.log(multiplicacion); //verificamos el nuevo array con la operacion hecha anteriormente
console.log(number); //imprimimos nuevamente el array original para ver que no ha sido modificado.

/*iterando con foreach().*/
/*con este metodo se itera sobre cada elemento de un array y ejecuta una funcion para cada elemento, este metodoitera 
sobre el array original y lo modifica*/

const numbers = [3, 6, 9]; //Se crea un array
const multi2 = numbers.forEach((num) => {
  //con foreach iteramos cada elemento del array para luego hacer una operacion de multiplicacion del numero sobre si mismo
  const num2 = num * num;
  console.log(num2); //imprimimos el resultado
});
console.log(numbers); //imprimimos el array apra ver si se modifico o no.

const colores = ["azul", "rojo", "blanco"];
const IterColores = colores.forEach((colores) => console.log(colores));

console.log(IterColores);
console.log(colores);
