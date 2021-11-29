//04-funciones.js

function soloNumeros (a,b,c){
    return a - b - c; // valor a devolver
}
// JS permite el uso de funcinoes sin validaciones
//soloNumeros('v'), true, [1,2,3]);
//soloNumeros((a)=> a, (a) => a, (A) => a);
//soloNumeros(1, 2, 3, 4, 5, 6, 78, 9);
//soloNumeros();

function soloLetras(a,b,c){ //undefined
    console.log(a,b,c);
}

//Funciones nombradas - named functions
function funcionNombrada(){
}
//Funciones anonimas
const funcionSinNombre1 = function () {};
var funcionSinNombre2 = function () {};
let funcionSinNombre3 = function () {};
[].forEach(function () {})
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();
//Funcniones anonimas - Fat Arrow Functions
const functionFatArrow1 = () => {};
var functionFatArrow2 = () => {};
let functionFatArrow3 = () => {};
[].forEach(()=>{})
functionFatArrow1();
functionFatArrow2();
functionFatArrow3();

const functionFatArrow4 = () => {};
const functionFatArrow5 = (x) => {
    return x + 1;
};
const functionFatArrow6 = (x) => x + 1; // FAT ARROW FUNCTIONS
                                        // Una sola línea
                                        //Omito return
                                        //Omito llaves
const functionFatArrow7 = x => x + 1;   // SI SOLO TENEMOS UN PARÁMETRO
                                        //Omito los parentesis
const functionFatArrow8 = (x,y,z) => x + y + z;

// ... = > Parámetros infinitos que llegan en un arreglo
           //Solo se puede tener uno de estos por función
function sumarNumeros(...otrosNumeros) {// Parámetros inf [2,3,4,5,...]]}
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return total;
    //return otrosNumeros.reduce((a, v) => a + v, 0);
}
sumarNumeros(1,2,3,4,5,6,7,8,9,10,11,12,13)
