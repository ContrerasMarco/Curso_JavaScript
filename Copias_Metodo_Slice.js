/*El método slice() nos permite trabajar con arrays, sin mutarlos, generando una copia del array original o una parte del array.*/

const licores = ["vino", "cerveza", "vodka", "tequila"];
console.log(licores.slice(1)); //muestra lso elementos del array desde la posicion 1 del array
console.log(licores); //el array original no se modifica despues de la impresion.
console.log(
  licores.slice(1, 3)
); /*aqui nos mostrara el array desde la posicion 1 hasta la posicion 2, ya que el metodo no incluye un ultimo valor 
y para mostrar el elemento que queremos debemos asegurarnos que debemos pasarnos un elemento en el array para que nos muestre el indice que queremos en este
caso el elemento 2 y 3 del array*/
console.log(licores.slice(-1)); //muestra el ultimo elemento del array
console.log(licores.slice(-2)); //muestra los dos ultimos elementos del array
