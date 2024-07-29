/*For In es otro metodo para iterar pero este en especifico sirve para la iteracion
sobre objetos solamentes y poder acceder a sus propiedades y el valor
que se guardan de lso elementos en un objeto.*/

/*estrucutura de for in

for (variable in objeto){
   codigo a ejecutar
}*/

//primero creamos una variable de tipo objeto que contendra propiedades y valores del objeto creado.

const dispositivos = {
  Tv: 3,
  ipad: 6,
  celular: 3,
  notebook: 4,
};

//luego para iterar al objeto debemos hacerlo con for in y accedemos a la propiedad del objeto

for (tecnologicos in dispositivos) {
  console.log("los dispositivos tecnologicos de la casa son ");
  console.log(tecnologicos);
}

/*Para acceder al valor de la propiedad hacemos esto. iteramos con un for in
luego para imprimir utilizamos el template literal para acceder primero a la propiedad
para despues acceder al valor de la propiedad*/

for (tecnologicos in dispositivos) {
  console.log(`${tecnologicos} : ${dispositivos[tecnologicos]}`);
}
