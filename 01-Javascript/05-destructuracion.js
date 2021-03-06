//05-destructuracion.js

// Destructuracion de objetos
const adrian = {
    nombre: "Adrian"
};
const carolina = {
    nombre: "Carolina",
    apellido: "Eguez"
};
const adrianCarolina = {    // Creando una nueva referencia
    ...carolina,        //1 El orden es importante para propiedades que se repiden
    ...adrian,          //2 El último reemplaza a los anteriores
};
console.log('adrianCarolina', adrianCarolina);

// Destructuracion de arreglos
const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];
const superArreglo = [
    ...arregloUno,      //El orden importa
    ...arregloDos,
];
console.log('superArreglo', superArreglo);