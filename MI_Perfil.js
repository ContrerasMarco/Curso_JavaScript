const name = "My name";
const lastname = "My lastname";
const age = "40 ";
const myaddress = {
  direccion: "MyAddress",
  number: "12345",
  comuna: "MyState",
  city: "MyCity",
};
const MyHobbies = ["Soccer", "Tenis", "Gaming"];

const MiPerfil = `Hola mi nombre es ${name}, 
Mi Apellido es ${lastname} ,
Mi edad es de ${age} años,
vivo en la ciudad de ${myaddress.city} 
y tengo varios hobbies como ${MyHobbies.join(" ")}.
Sigueme en mis redes sociales :) `;
console.log(
  "------------------------------------------------------------------------------------"
);
console.log(MiPerfil);
console.log(
  "------------------------------------------------------------------------------------"
);
