/*los metodos push y pop se utilizan tanto para agregar elemento al final del array original esto es con push y adicionalmente
tambien devuelve la longitud del array, con el metodo pop se elimina el ultimo elemento del 
array y ademas tambien nos devulver la nueva longitud del array, los cambios se
hacen sobre el mismo array original*/

const paises = ["chile", "brasil", "hungria"]; //Array original
console.log(paises); //Imprime el array con lso elementos
paises.push("alemania", "rusia"); //Se agregan elementos con el metodo push()
console.log(paises); //Imprime el array original con los nuevos elementos
paises.pop(); //con el metodo por() se elimina el ultimo elemento del array
console.log(paises); //por ultimo se imprime nuevamente el array con los elementos que hay
