//La mutabilidad es cuando podemos cambiar el estado original de por ejemplo un array
//ejemplo. creamos un array original de 5 elementos y luego agregamos un nuevo elemento
//Al final del array con el metodo push() y el array se modifica y a esto le llamamos mutabilidad

const equipos = ["Udechile", "CC", "UC", "cobreloa", "UE"];
console.log(equipos);
console.log(equipos.length);
equipos.push("osorno");
console.log(equipos);
console.log(equipos.length);

/*inmutabilidad, se refiere cuando no se modifica el array original y por ejemplo concatenamos un array con otro
manteniendo el array original intacto sin modificaciones*/

const newTeams = equipos.concat(["PM", "temuco"]);
console.log(equipos); //Imprime el array original sin modificaciones.
console.log(newTeams); //Imprime lso elementos del array original en un nuevo array y agregandole dos nuevos elementos con el metodo concat()

/*existe un metodo para verificar si creamos un array o no*/
const EsunArray = Array.isArray(equipos);
console.log(EsunArray);

/*usando for para sumar los elementos de un array*/

const ArraySumNumber = [1, 2, 3, 4, 5]; //Se crea un array
let sum = 0; //se inicializa una variable que almacenara la suma de elementos

for (elements of ArraySumNumber) {
  //recorremos el array con un for of
  sum += elements; //sumam lso elementos y va guardando esa suma en la variable sum
}
console.log(sum); //se imprime la suma de los elementos.
