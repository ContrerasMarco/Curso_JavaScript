/*El spread operator o spread syntax (...) nos permite, como su nombre lo indica, esparcir o expandir objetos iterables*/

//copiar array con spread operator

const animales = ["vaca", "leon", "buho"];
const copia_array = [...animales];
console.log(animales);
console.log(copia_array);

//agregar elementos

const licores = ["vino", "cerveza"];
const addelements = [...licores, 40, 50, 50];
console.log(addelements);
console.log(licores);

//combinar elementos

const num = [1, 2, 3];
const num2 = [4, 5, 6];
const ArrayCombinados = [...num, ...num2];
console.log(ArrayCombinados);
console.log(num);
console.log(num2);

//pasar parametros a una funcion con spread operators

function suma(a, b) {
  return a + b;
}
const argumentos = [1, 2];
const resultado = suma(...argumentos);
console.log(resultado);
