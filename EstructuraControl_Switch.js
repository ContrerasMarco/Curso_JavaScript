/*Condicion Switch

La condición switch en JavaScript es una estructura de control que permite ejecutar diferentes bloques 
de código según el valor de una expresión.
Es especialmente útil cuando necesitas manejar múltiples casos basados en el valor de una variable, 
proporcionando una alternativa más limpia y legible a múltiples declaraciones if-else.*/

let fruta = "manzana";

switch (fruta) {
  case "uva":
    console.log("Las uvas son de color verde y sin pepas");
    break;
  case "manzana":
    console.log("Las manzanas son verde y rojas sin preservantes");
    break;
  case "maqui":
    console.log("El maqui es un gran producto antioxidante");
    break;
  case "Mora":
    console.log("Las moras son un gran producto antioxidante y blandas");
    break;
  default:
    console.log(
      `Lo siento la fruta que buscas, ${fruta}, no tenemos descripcion de ella`
    );
}
