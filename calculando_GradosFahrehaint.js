//convirtiendo grados fahrenheit a celsius

const fahrenheitTemperature = [32, 75, 110, 220, 170];
const FahrToCelsius = fahrenheitTemperature.map(
  (fahrenheit) => (5 / 9) * (fahrenheit - 32)
);
console.log(FahrToCelsius);
console.log(fahrenheitTemperature);

const sumNumbers = [1, 2, 3, 4, 5]; //se crea un array
let suma = 0; //Se inicializa una variable que ira guardando la suma del array
//al array original le aplicamos el metodo foreach para que itere y acceda a cada elemento del array y vaya guardando la suma de cada elemento en la variable suma
sumNumbers.forEach((number) => (suma = suma + number));
console.log(suma); //se imprime la suma total
console.log(sumNumbers); //se imprime el array para ver y verificar que no hubo cambio en el array
