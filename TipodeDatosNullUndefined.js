const snoopy = null; // le decimos que es una variable y su valos es null
console.log(snoopy);
console.log(typeof snoopy);

let name;
console.log(name); // al declarar una variable y no entregarle un valor, javascript identifica esa variable como undefined

/*Symbol: Es un tipo de dato cuyos valores son únicos e inmutables. Los símbolos son útiles 
para crear propiedades únicas para los objetos. Aquí, se crean varios símbolos y se demuestra 
que cada símbolo es único, incluso si su descripción es la misma.*/
const uniqueId = Symbol("id");
const symbol1 = Symbol(1);
const symbol2 = Symbol(1);
console.log(symbol1 === symbol2);

/*tambien podemos escribir simbolos para objetos, en este caso creamos una constante ID y su simbolo id,
luego creados una variable con un objeto vacio y a continuacion le asignamos un valor a ese objeto con el
simbolo ID y el valo "1234"*/
const ID = Symbol("id");
let user = {};
user[ID] = "1234";
console.log(user);

/*BigInt: Es un objeto incorporado que proporciona una forma de representar números enteros más grandes que 2^53 - 1, 
que es el límite superior para el tipo de datos Number en JavaScript. Aquí, se crean dos BigInts y se demuestra que 
pueden manejar números extremadamente grandes sin perder precisión.*/
const bigNumber = 109823746783982764567847654782374n;
console.log(bigNumber);
const numberOfParticlesInTheUniverse = 10000000000000000000n;
console.log(numberOfParticlesInTheUniverse);
