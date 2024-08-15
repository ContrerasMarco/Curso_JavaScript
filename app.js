/*las promesas seran lo que nos va a permitir hacer que javascript pase de trabajar de forma sincrona a manera asincrona, esto le dira al navegado
que debe trabajar una funcion de forma separada, una que ya este resuelta y la agrugue al call stack y pueda dar un resultado,

Las promesas tienen 3 estados:

1. Pending, este estado es cuando se va a crea la promesa, este estado estara en pendiente ya que se va a empezar a 
generar la promesa.

2. Fullfilled, estes es el segundo estado, este estado sera cuando la promesa se resulva para bien o para mal.

3. Rejected, este es el tercer estado, y este estado sera cuando la promesa no se resolvio.

Las promesas manejan dos tipos de call back, la primera es resolve y es cualdo la promesa se resuelve de manera satisfactoria,
y la segunda es reject y es cuando la promesa no se puede resolver.

al generar una promesa como funcion podemos usar dos metodos dentro de ella, el then(), este metodo se ejecuta cuando la promesa 
se resuelve con algun mensaje que determinemos y el segundo metodo es el catch() el cual se ejecutara cuando la promesa no se resuelve
y con este metodo vamos a obtener el error.*/

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let operationSuccesfull = true;
    if (operationSuccesfull) {
      resolve("Fue exitoso");
    } else {
      reject("No fue exitoso");
    }
  }, 3000);
});

promesa
  .then((mensajeExitoso) => {
    console.log(mensajeExitoso);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

const notasAlumno = new Promise((resolve, reject) => {
  setTimeout(() => {
    let notasAlumno = 5.0;
    if (notasAlumno > 4.5) {
      resolve("Aprobaste");
    } else if (notasAlumno <= 4.5) {
      reject("No aprobaste");
    }
  }, 3000);
});

notasAlumno
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((messageError) => {
    console.log(messageError);
  });
