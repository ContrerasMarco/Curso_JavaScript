// Atraves de las apis nostros en la partr del front hacemos peticiones a un servidor
// para pedir informacion o enviar o incluso eliminar informacion, esto se 
// hace gracia a ciertos metodos de HTTP como pro ejemplo fetch que 
// uno le pide a traves de un servidor que nos envie cierta informacion 
// para poder recogerla y asi inyectarla en el DOM.

fetch ("https://jsonplaceholder.typicode.com/posts")
        .then((Response) => Response.json())
        .then((data) => console.log(data))

// si no imprimimos el resultado de la peticion tenermos otra forma de ver si realmente 
// nos comunicamos con el servidor y si la peticion fue hecha correctamente.
// para eso en el navegador nos vamos a la pestana de network y ahi podemos ver la conexion
// con el servidor y si la peticion fue exitosa o no.
// dentro de la pestana de network podemos ver la peticion que hicimos y si fue exitosa o no
// y esta genera un metodo GET que es el que se utiliza para obtener informacion de un recurso.
// tambien nos aparece desde donde se hizo la peticion que en este caso fue desde una API.
// podemos ver el status que nos dice si la peticion fue exitosa o no y en este caso fue 200 y
// exitosa. tambien nos dice que fue del tipo fech y la cantidad de bytes que se transfirieron.
// Tambien nos muestra el tiempo que se demoro en la peticion.
// en el header pordemos ver todo resumido lo que se hizo en la peticion.