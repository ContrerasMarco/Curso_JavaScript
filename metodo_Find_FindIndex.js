//metodo findIndex devuelve el indice del primer elemento que cumple la condicion propuesta en la funcion

const numbers_Array = [10, 20, 30, 40];
const NumberIndex = numbers_Array.findIndex((number) => number > 15);
console.log(numbers_Array);
console.log(NumberIndex);

//metodo find devuelve el primer elemento que cumple la condicion de la funcion

const FirstElement = numbers_Array.find(
  (number) => number % 2 === 0 && number > 15
);
console.log(FirstElement);
console.log(numbers_Array);
