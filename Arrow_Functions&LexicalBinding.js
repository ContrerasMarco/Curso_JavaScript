/*Las Arrow Function son útiles porque permiten:

Escribir métodos más concisos
Simplificar una línea de código para que sea más legible
Aprovechar las características de retorno implícito y el no uso de paréntesis
Olvidarse de manejar el contexto this
Definir de manera compacta una función convencional
Eliminar las llaves y la palabra return si la función tiene solamente una sentencia que devuelve un valor
Reducir el código aún más utilizando parámetros*/

//sintaxis de una funcion flecha o arrow y explicito return
const almuerzo = (proteina, verdura) => {
  return `${proteina} ${verdura}`;
};
//almuerzo("carne", "lechuga");
console.log(almuerzo("carne", "lechuga"));

//funcion saludo con arrow

const saludo = (name) => {
  return `Hola buen dia ${name}`;
};
console.log(saludo("Marco"));

//Funcion suma

const suma = (num1, num2) => {
  return num1 + num2;
};
console.log(suma(3, 3));

//sintaxis de una funcion flecha o arrow e implicito return
// podriamos no usar parentesis al pasar los parametros siempre y cuando sea solo uno
//implicito indica que podemso obviar la palabra clave return.
const multiplicacion = (num1, num2) => num1 * num2;
console.log(multiplicacion(2, 2));

//enlace lexico
//
const FuncionSaludoTioBen = {
  name: "Tio Ben",
  mensajeTio: function (mensaje) {
    console.log(`${this.name} dice: ${mensaje}`);
  },
  mensajeTioBen: (mensaje) => {
    console.log(`${this.name} dice: ${mensaje}`);
  },
};
FuncionSaludoTioBen.mensajeTio(`Hola Peter como estas`);
FuncionSaludoTioBen.mensajeTioBen(
  `acuerdate que un gran poder conlleva una gran responsabilidad`
);
