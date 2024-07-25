/* la condicional if es una estructura para determinar si alguna parte del codigo
se ejecuta si la condicion es verdadera, tambien esta el condicional if else que funciona
en caso de colocar diferentes condicionales y pro ultimo esta el condicional else que funciona
para enviar algun mensaje si la primera condicion no funciona*/

/*const num = 4;
if (num === 4) {
  console.log("Si es el mismo numero");
} else {
  console.log("Lo siento no es el numero");
}
*/
const prompt = require("prompt-sync")();
const num = prompt("Ingrese un numero ");
const num2 = prompt("Ingrese otro numero ");
if (num > num2) {
  console.log(`El numero ${num} es mayor`);
} else if (num === num2) {
  console.log(`Tanto el numero ${num} y ${num2} son iguales`);
} else if (num2 > num) {
  console.log(`El numero ${num2} es mayor`);
}
