//String primitivos
const stringPrimitivo = "soy un string primitivo";
console.log(typeof stringPrimitivo);

const stringPrimitivo2 = String("Soy un string");
console.log(typeof stringPrimitivo2);

//string objeto

const stringObjeto = new String("Soy un objeto");
console.log(typeof stringObjeto);

//Manipulacion de string

const saludo = "Hola como estas";
console.log(saludo[0]); //metodo para acceder a un indice en especifico
console.log(saludo.charAt(0)); //lo mismo de arriba con otro metodo.
console.log(saludo.length); //metodo para saber la longitud de un string.
console.log(saludo.indexOf("e")); //metodo para saber el indice de un caracter.
console.log(saludo.indexOf("estas")); //en este caso es lo mismo pero muestra el indice en dodne comienza la palabra bsucada.
console.log(saludo.lastIndexOf("m")); //metodo para buscar la ultima m en un string o cualquier otro
console.log(saludo.slice("3, 5")); //metodo para buscar entre indices, indicandole el comienzo y el fin.
console.log(saludo.toUpperCase(saludo)); //cambia todo los caracteres a mayuscula
console.log(saludo.toLowerCase(saludo)); //cambia todos los caracteres a minusculas.

const saludosDividido = saludo.split(" "); //metodo para dividir un string despues de un espacio
console.log(saludosDividido);
console.log(saludosDividido[2]); //accedemos al indice 2 que en este caso seria el strin estas.

const saludoConespacios = " hola mundo ";
const eliminadoEspacios = saludoConespacios.trim();
console.log(eliminadoEspacios); // eliminamos los espacios con el metro trim.

const nuevoString = "hola mundo";
const replaceString = nuevoString.replace("hola", "chao"); // reemplaza un string por otro string, el primer valor es al reemplazar y el segundo por el cual reemplazamos.
console.log(replaceString);
