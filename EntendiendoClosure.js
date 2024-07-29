/* el closure es cuando se crea un enlace lexico cuando se crea una funcion por ejemplo una anidacion de funciones y la funcion que
esta dentro de la otra puede acceder a las variables que estan por encima de la propia funcion*/

//ejemplo

function saludo() {
  //creamos uan funcion donde creamos una variable de un simple saludo
  let SayMe = "Hola como estas";

  function rescatandoSaludo() {
    //Creamos otra funcion para poder acceder a otra variable que esta en otro ambito
    console.log(SayMe); //Accedemos a la variable
  }
  return rescatandoSaludo; //retornamos la funcion para poder imprimir el saludo
}
const imprimiendoSaludo = saludo(); //asignamos una variable a una funcion
imprimiendoSaludo(); //imprimimos la funcion principal

function SaludoDinamico() {
  //en este ejemplo hacemos un closure  con dos funciones para imprimir las veces que sea necesario un saludo
  let SaludoSimple = " Hola , "; //declaramos una variable con un saludo

  function IngresandoName(name) {
    //Luego otra funcion pasandole como parametro un nombre para hacer el saludo
    console.log(SaludoSimple + name); //dentro de la funcion se imprime el saludo concatenando el saludo de la funcion principal y agregandole el parametro de la funcion siguiente
  }
  return IngresandoName; //retornamos la referencia de la funcion sin el parametro
}
let imprimirSaludo = SaludoDinamico(); // asignamos variables a la funcion principal dos veces para imrpimir esa cantidad de veces el saludo
let imprimirSaludo2 = SaludoDinamico();

imprimirSaludo("Marco"); // a las variables que le asignamos la funcion la llamamos pasandole como argumento un nombre.
imprimirSaludo2("Bruno");
