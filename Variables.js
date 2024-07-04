let cajaFruta = "manzana";
console.log(cajaFruta);

/*Let se usa para variables que pueden cambiar en el tiempo, mientras que const se usa para variables que no cambian y se pueden usar durante el desarrollo
de todo el programa*/

/*scope global y scope local, con scope local las variables solo se pueden usar durante ese ambito, por ejemplo en una funcion, mientras que el scope global
podemos usar la variable en cualquier parte del codigo.*/

/*cuando se declara una variable con var dentro de una función, esta variable tendrá alcance global, aunque esté dentro de una función. Sin embargo, 
si se declara con let o const, la variable tendrá alcance local.

ejemplo*/

/* en este ejemplo de scope global, declaramos y asignamos a la variable fruit el valor de manzana y para verificar
que declaramos en global la variable la usamos dentro de la funcion y fuera de ella y nos imprime por pantalla dos 
veces la palabra manzana*/
var fruit = "Manzana";
console.log(fruit);
function bestfruit() {
  console.log(fruit);
}
bestfruit();

/* en el caso de local scope o function scope es el entorno donde las variables locales solo se pueden acceder desde
 una función del programa o en cualquier funcion que este anillada.*/

function saludo() {
  let username = "Marco";
  console.log(username);

  if (username === "Marco") {
    console.log("Hola, ${username}");
  }
}
saludo();
console.log(username);
/* en este caso el console.log llamando a la variable usrname que esta dentro de una funcion, ya n oes accesible
    desde un scope global y nos imprime un error que la variable no esta definida*/

/*scope de bloque*/

function frutas() {
  if (true) {
    var fruta1 = "Manzana";
    let fruta2 = "Uva";
    const fruta3 = "Maqui";
    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
  }
  //console.log(fruta1);
}
frutas();
/* El scope local de bloque es el entorno donde las variables locales únicamente pueden ser 
accedidas desde un bloque de código del programa. Un bloque de código es todo aquello que está 
dentro de los caracteres de llaves {}, en este ejemplo primero llamamos a las variables fuera del bloque 
del IF y nos trae error con las variables let y const ya que ellas pertenecen al scope de bloque y var no, 
es por eso que con var podemos acceder a su variable fuera del scope de bloque, para solucionar el problema
debemos llamar a las variables declaradas con let y const dentro del bloque del IF y var podemos llamarla fuera
del bloque y con eso accedemos a todas las variables declaradas e incluso si queremos acceder a la variable declarada
con var dentro del bloque no tendriamos problemas igualmente.*/
