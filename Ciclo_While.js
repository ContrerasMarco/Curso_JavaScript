/*El loop while ejecuta repetidamente el código mientras la condición que le indiquemos se cumpla 
(es decir, que la condición corresponda a true)🚧 Es por esto que hay que tener mucho cuidado en la 
definición de nuestra condición, de lo contrario tendremos un loop infinito*/
//Imprime los numeros pares hasta 100
contador = 0;
while (contador <= 100) {
  if (contador % 2 == 0) {
    console.log(contador);
  }
  contador++;
}
