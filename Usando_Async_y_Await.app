/*existe otra forma de usar las promesas de forma asincrona en JS y es con Async y Await
estos devuelven una promesa y el resultado es el mismo, el codigo que este en en async y await
pasa a una web api, ahi trabaja la funcion y resolver esa funcion como una promesa y una vez pase eso
pasa al even loop para que la pasae al call stack para que se pueda ejecutar la respuesta de esa promesa
existen difecrencia entra las promesas y el async y await y es que es mas legible de poder leer los pasos de lo que este
pasando,*/

/*function fechData() {
  fetch("https://pokeapi.co/api/v2/pokemon-form/132/")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

async function fechData() {
  //con async trasnformamos una funcion en una promesa para que pueda trabajar de forma asincrona
  try {
    //con este metodo es lo que que debe pasar si la promesa se cumple junto con el await
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = response.json();
    console.log(data);
  } catch (error) {
    //con el catch nos referimos cuando la promesa no se cumple.
    console.log(error);
  }
}*/

const ConsultaUrlApi = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode",
];

async function fechUrlConsulta() {
  try {
    for await (let url of ConsultaUrlApi) {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
    }
  } catch (error) {}
  console.log(error);
}
