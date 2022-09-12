//Mostrar objetos agrupados => con las mismas propiedades

class producto {
    constructor(id, nombre, marca, precio, stock){
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new producto (1, "aritos", "trululu", 800, 20);
const producto2 = new producto (2, "gomitas", "trululu", 1200, 10);
const producto3 = new producto (3, "ositos", "trululu", 500, 25);
const producto4 = new producto (4, "elefantes", "trululu", 1500, 13);


//Guardamos en un array

const productos = [producto1, producto2, producto3, producto4];

export default productos;