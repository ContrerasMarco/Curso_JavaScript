//declarar, reasignar y redeclarar con VAR.
var firstname; //inicializamos la variable
firstname = "marco"; //asignamos un valor a la variable
console.log(firstname); //accedemos a la variable.

var lastname = "contreras"; //asignamos y declaramos en una linea la variable
lastname = "aranda"; //reasinagmos la variable
console.log(lastname); // accedimos a ella
var lastname = "marco"; // re declaramos la variables
console.log(lastname);

//declarar, reasignar y redeclarar con LET

let frutas = "Mora"; // declaramos y asignamos
frutas = "kiwi"; //con LET puedo reasignar el valor de una variable.
console.log(frutas);

//let frutas = "manzana"; // con LET no podemos re declarar una variable

/*en resumen con LET podemos declarar y asignar en una misma linea, ademas
de reasignar la variable pero no podemos re declarar una variable*/

//Declarar, reasignar y re declarar con CONST

const team = "U de chile"; //declarar y asignar
console.log(team); //accedemos a la variable y nos imprime la variable

team = "CC"; //reasinagmos pero con const no es posible reasignar una variable pro su scope de bloque
console.log(team);

const team = "UC"; //re declarar tampoco podemos con const.
console.log(team);
