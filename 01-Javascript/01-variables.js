// Mutables e Inmutables
// Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

// Inmutables
const configuracionArchivos = "PDF";
// configuracionArchivos = "XML";
//Vamos a preferir CONST > LET > NUNCA VAR




// Tipos de variables
const numero = 1; //number
const sueldo = 1.2; //number
const text = "Carlos"; //string
const apellido = "Mantilla"; //string
const booleano = false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof text);
console.log(typeof apellido);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);

//Truty y Falsy
if(""){
    console.log("String vacio es verdadero");
}else{
    console.log("String vacio es Falsy");
}
if ("Carlos"){
    console.log("string con datos es Truty");
}else{
    console.log("String con datos es Falso");
}

if(-1){
    console.log("Negativos es verdadero"); //negativos verdadero
}else{
    console.log("negativos es Falsy");
}
if(0){
    console.log("Cero es verdadero");
}else{
    console.log("Cero es Falsy"); //Cero es falso
}
if(1){
    console.log("Positivos es verdadero"); //positivos verdadero
}else{
    console.log("Positivos es Falsy");
}


if(null){
    console.log("null es verdadero");
}else{
    console.log("null es Falsy"); //null es falso
}

if(undefined){
    console.log("undefined es verdadero");
}else{
    console.log("undefined es Falsy"); // undefined es falso
}

// Objetos Js (JSON) - Arreglos
const carlos = {
    nombre: "Carlos", // llave: valor
    apellido: 'Mantilla',
    edad: 29,
    hijos: null,
    zapatos: undefined,
    casado: true,
    ropa: {
        color: 'rojo',
        talla: '38',
    },
    mascotas: ['Haru', 'Sky'],
};