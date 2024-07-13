function suma(num1, num2) {
  //palabra clave function, nombre de la funcion y parametros
  return num1 + num2; //palabra clave return y cuerpo de la funcion y puede haber o ejecutar algun codigo
}
result = suma(2, 2); //llamada de la funcion asignandola a una variable junto a los argumentos que le pasamos a la funcion
console.log(result); //imprimir por pantalla el resultado de la funcion.

console.log("---------------------------------------------");

function calculateDiscountedPrice(price, discountPercentage) {
  // funcion que calcula el descuento sobre el rpecio de un producto.
  const discount = (price * discountPercentage) / 100;
  const priceWithDiscount = price - discount;
  return priceWithDiscount;
}

const originalPrice = 1000; // se espcifican el precio del producto
const discountPercentage = 15; // se agrega el descuento que se le quiere hacer en termino de porcentaje %
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage); //se iguala una constante a la llamada de la funcion
console.log("Original Price: $" + originalPrice); //se imprime el precio original
console.log("Discount: " + discountPercentage + "%"); // se imprime el descuento que se le hace al producto
console.log("Price with discount: $" + finalPrice); // se imprime el precio ya con el descuento hecho.
