/*metodo filter(), este metodo se usa para crear un nuevo array si el
elemento cumple alguna condicion que pongamos*/
//ejemplo

const numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Filterpares = numerosPares.filter((number) => number % 2 === 0);
console.log(Filterpares);

//otra manera de hacerlo sin usar el metodo filter()
for (numbers of numerosPares) {
  if (numbers % 2 === 0) {
    console.log(numbers);
  }
}
console.log(numerosPares); //verificando si modifico el array original.

//metodo reduce() en este método tenemos un array original que pasamos por una función. Al final, obtendremos de vuelta un resultado,
//ya sean los elementos transformados o filtrados.

const numerosPares2 = [1, 2, 3, 4, 5]; //se crea un array y el ejercicio es sumar todos los elementos de este
//se crea una variable para gaurdar la suma del array que se itera con el metodo reduce(), este metodo recibe 3 parametros, un acumulador
//el valor actual o indice del array que se iterando y en cuanto se inicializa el valor actual. en este caso guarda el elemento de cada indice
// y se va sumando y se guarda en la variable
const sumArray = numerosPares2.reduce(
  (acumulator, valoractual) => acumulator + valoractual,
  0
);
console.log(sumArray);
console.log(numerosPares2);

//Usar reduce para ver cuantas veces se repite una palabra en un array.

const equipos = ["UCH", "CC", "UC", "COB", "UCH", "UCH", "CC", "CC"];

const ContadorEquipos = equipos.reduce((contador, words) => {
  if (contador[words]) {
    contador[words]++;
  } else {
    contador[words] = 1;
  }
  return contador;
}, {});
console.log(ContadorEquipos);
