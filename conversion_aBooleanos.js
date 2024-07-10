//Buena práctica, es agregar al inicio del variable de tipo boolean unas palabras claves que permiten identificar su tipo, como si fuera una pregunta.

const isActive = true;
const hasPermission = false;

//javascript puede hacer una conversion a booleano de forma implicita o explicita
//esto sin que nosotros lo sepamos

//conversion implicita
const result = 5 > 3;
console.log(result);

const name = "platzi";
console.log(!!name);

//conversion explicita es cuando nosotros hacemos la comprobacion

const value = -4;
const explicitoBoolean = Boolean(value);
console.log(explicitoBoolean);
//al evaluar el cero javascrip siempre nos va a calificar como falso ya que considera que el cero es falso.
//cualquier otro numero ya sea negativo o positivo lo considera verdadero.
