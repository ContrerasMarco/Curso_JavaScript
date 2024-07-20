/* Operadores Logicos.

&& con este operador llamado Y se deben cumplir si o si uno o varias condicones
|| con este operador llamado OR se debe cumplir solo una de las condiones para poder realizar una accion
! este operador es de negacion y es lo contrario a lo que buscamos.
*/

const a = 10;
const b = 10;
const c = "10";
const d = 20;

console.log(a == b && b == c); //comparamos el valor y como se cumple ambas condiciones nos devuelve un true
console.log(a === c || a === b); //con el operador logico || (OR) solo nos debe cumplir una condicion para que nso devuelva un true
console.log(
  !(a === c)
); /* con el operador de negacion ! nos devuelve el contrario de la afirmacion, ejemplo este ejercicio es falso ya que el valor 
y el tipo de datos que estamos conparando no son iguales y nos debe devolver un false, pero como lo negamos nos imprime un true por pantalla.*/
