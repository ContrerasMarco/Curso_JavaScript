/*en este ejercicio vemos la funcion y el tipo de como declaramos una funcion
incide en el resultado de la funcion*/
const nameProduct = "Notebook"; //declaramos funciones en un scope global
const price = 500;
const model = "Chino";

function ProductName() {
  const nameProduct = "Iphone";
  const price = 1000;
  return ` el producto ${nameProduct} tiene un costo de ${price} y el modelo es ${model}`;
} // dentro de la funcion re declaramos dos variables ya que con const podemos re declarar una variable y esta es la que se imprime
console.log(ProductName());

/* en este ejemplo comparado con el anterior, la salida pro pantalla nos imprimira las variables que se han definido en el scope global ya
que estamos haciendo un console.log fuera del scope local en este caso fuera de la funcion, esto pasa porque desde un contexto global
no podemos acceder a un contexto local. pero si podemos acceder a variables globales desde un scope local.*/
function ProductName() {
  const nameProduct = "Iphone";
  const price = 1000;
  return ` el producto ${nameProduct} tiene un costo de ${price} y el modelo es ${model}`;
} // dentro de la funcion re declaramos dos variables ya que con const podemos re declarar una variable y esta es la que se imprime
console.log(
  `el producto ${nameProduct} tiene un costo de ${price} y el modelo es ${model}`
);
/* en este ejemplo se piden identificar los bloques existentes tanto locales como globales, tanto la declaracion de la variable de userpoint y console.log
pertenecen a un scope global, y tenemos 3 scope locales, el primero es la funcion como tal y ademas tenemos dos scope locales con la condicional if y else,
a esta anidacion de bloques locales se le llama scope chain, */
const userPoints = 15;
function checkAccess() {
  if (userPoints < 100) {
    const message = "Acceso denegado, obtenga mas puntos";
    return message;
  } else {
    const message = "Acceso garantizado, disfrutalo";
    return message;
  }
}
console.log(checkAccess());

const globalVariable = "Hola";

function LocalOne() {
  console.log("Global 1", globalVariable);
  //console.log("Local 1", localvariable);

  function localtwo() {
    const zanahoria = "Carrot";
    console.log("local 2", zanahoria);
  }
  function Localthree() {
    console.log("Local 3", zanahoria);
  }
  localtwo();
  Localthree();
}
console.log(LocalOne());
