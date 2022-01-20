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

//Acceder a las rpopiedades del objeeto
carlos.nombre;
carlos.apellido;
carlos["nombre"];
console.log(carlos);
carlos.nombre = "Wilfrido";
console.log(carlos);
carlos["nombre"] = "Carlos";
carlos.sueldo;
console.log(carlos.sueldo);
carlos.sueldo = 1.2;
console.log(carlos.sueldo);
carlos["gastos"] = 0.8;
console.log(carlos.gastos);
carlos.nombre = undefined;
console.log(carlos);
console.log(Object.keys(carlos));
console.log(Object.values(carlos));

delete carlos.nombre;
console.log(carlos);

//Variables por valor o referencia?

//Variables por valor en JS son las primitivas
let edadCarlos = 29;
let edadWilfrido = edadCarlos;

console.log(edadCarlos);
console.log(edadWilfrido);
edadCarlos = edadWilfrido + 1;
console.log(edadCarlos);
console.log(edadWilfrido);

//Variables por referencia: object({],[])
// let rafael = {
//     nombre: "Rafael"
// };
// let lenin = rafael;
// console.log(rafael);
// console.log(lenin);
// lenin.nombre = "Lenin";
// console.log(rafael);
// console.log(lenin);
// delete rafael.nombre;
// console.log(rafael);
// console.log(lenin);

let rafael = {
    nombre: "Rafael"
};
let lenin = Object.assign({}, rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);
let arregloNumeros = [1,2,3,4,5];
let arregloClonado = Object.assign([], arregloNumeros);
console.log(arregloNumeros);
console.log(arregloClonado);
arregloNumeros[0] = 200;
arregloClonado[0] = 100;
console.log(arregloNumeros);
console.log(arregloClonado);