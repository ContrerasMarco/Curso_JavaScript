/*sirve para iterar pro cada elemento que venga en una lista*/

//estructura del ciclo for
/*for (variable; condicion que se ejecuta; incremento) {
    codigo que se va a ejecutar
}
    la iteracion se rompe ya cuando la condicion sea falsa*/

let equipos = ["U", "uc", "cc", "cobreloa", "ue", "pal"]; //se crea una lista para recorrerla

for (let i = 0; i < equipos.length; i++) {
  //se declara una variable i para recorrer lso indices de la lsita y la recorre hasta el largo de esta con length y luego se incrementa.
  console.log("los equipos en la lista son ", equipos[i]);
  //se imprime la lista completa
}

let frutas = ["manzana", "uva", "mora", "maqui", "pera", "melon", "sandia"];
// codigo para imprimir solo los indices pares de una lista.
for (let i = 0; i < frutas.length; i++) {
  if (i % 2 === 0) {
    console.log("las frutas con indice pares son ", frutas[i]);
  }
}

//for of, es otra forma de iterar y se usara para elementos iterables como string o arrays
//estrucutura base
/*for (variable of objeto){
     codigo a ejecutar
}*/

let comida = ["arroz", "fideos", "asado", "pescado", "ensalada"];
for (alimento of comida) {
  console.log(alimento);
}
