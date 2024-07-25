/* el ciclo do while es parecido al ciclo while pero la diferencia es que ejecuta primero el codigo
dentro de la sentencia do y luego verifica la condicion del while*/

let contador = 0;

do {
  if (contador % 2 == 0) {
    console.log(contador);
  }
  contador++;
} while (contador <= 100);
