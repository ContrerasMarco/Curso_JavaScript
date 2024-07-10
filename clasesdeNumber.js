//tipo de entero y decimal
const entero = 10;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);

//notacion cientifica

const cientifico = 5e3;
console.log(typeof cientifico, cientifico);

//infinitos y Nan

const infinito = Infinity;
const noNumber = NaN;

//operaciones aritmeticas

const number1 = 10;
const number2 = 10;
const suma = number1 + number2;
const resta = number1 - number2;
const multiplicacion = number1 * number2;
const division = number1 / number2;
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);

//modulo y exponenciacion.

const modulo = 15 % 5;
const exponenciacion = 2 ** 3;
console.log(modulo);
console.log(exponenciacion);

//Precision

const resultado = 0.1 + 0.2;
console.log(resultado); //muestra el resultado completo
console.log(resultado.toFixed(2)); //podemos decirle que muestre uan cantidad determinada de decimales.

//operaciones avanzadas usando funciones como math() y sus metodos.

const raizCuadrada = Math.sqrt(16); //metodo de raiz cuadrada
const valorAbsoluto = Math.abs(-10); //metodo de valor absoluto
const numberRandom = Math.random(10, 20); //metodo de un numero al azar
console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(numberRandom);
