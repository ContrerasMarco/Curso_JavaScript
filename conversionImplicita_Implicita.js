//conversion explicita
/*en este ejemplo pasamos de manera explicita de una variable declarada como string hacia un valor de number.*/
const string = "42";
const integer = parseInt(string);
console.log(typeof integer, integer);

//otro ejemplo
/*mismo ejemplo que el anterior pasamos un string que contenga un numero flotante y se convierte a un number*/
const stringDecimal = "1.1";
const StringToFloat = parseFloat(stringDecimal);
console.log(typeof StringToFloat, StringToFloat);

//Conversion Implicita
/*es cuando es el lenguaje de programacion hace conversiones por si solo de un dato a otro
generalmente se hace cuando en el codigo hay dos tipos de datos y ahi es cuando
javascript hace conversiones de los tipos de datos.*/

const suma = "5" + 4;
console.log(suma);
/*en este jemplo javascript como en el codigo esta el signo + javascript verifica que los datos son distintos y en vez de hacer una suma lo que hace es que concatena esa operacion.*/
