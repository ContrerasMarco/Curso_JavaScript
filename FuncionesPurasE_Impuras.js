//funciones puras
/*En las funciones puras, dada una misma entrada (input), obtendremos una misma salida (output). Por otro lado, las funciones puras no tienen efectos secundarios (side effects).

Qué nos puede causar side effects:

Modificar variables globales.
Modificar parámetros.
Solicitudes HTTP.
Impresiones de mensajes en pantalla o consola.
Manipulación del DOM (Document Obect Model).
Obtener la hora actual.*/

function sum(num, num2) {
  // esta es una funcion pura ya que siempre obtendremos los mismos resultados
  return num + num2;
}

//Funcion impura porque dentro de la funcion imprimimos un mensaje pro pantalla.
function suma(num, num2) {
  console.log(typeof num);
  return num + num2;
}
console.log(suma(2, 2));

let total = 0;

function contador(a) {
  total += a;
  return total;
}
console.log(contador(4));
