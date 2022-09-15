import productos from "./productos.js";

//Consultas de elementos del dom
const parrafos = document.getElementsByClassName("parrafos");

const parrafo1 = document.querySelector('#parrafo1');
const boton1 = document.getElementById("boton1");

console.log(parrafo1);
console.log(parrafos);



//Eventos

boton1.addEventListener('click', () => {
    console.log(productos);
});
