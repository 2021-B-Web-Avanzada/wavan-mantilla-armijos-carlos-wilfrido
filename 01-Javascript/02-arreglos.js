//02-arreglos.js
let arreglo = [6, 7, 8, 9, 10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true, 1, 1.1, "Carlos", "Wilfrido", undefined, null, {}, [1,2]];
arreglo = [6,7,8,9,10];

//for of
for (let numero of arreglo) {   //VALORES
    console.log('numero ',numero);
}
//for in
for (let indice in arreglo) {   //INDICES
    arreglo[indice]
    console.log('indice ',indice);
}
let objetoPrueba = {a: '1', b:'2', c:'3'};
for (let llave in objetoPrueba) {
    console.log('llave ', llave);
}

arreglo.push(11); // añadir elemento al final
arreglo.pop(); // eliminar un elemento del final
arreglo.unshift(5); //añadir al principio del arreglo

console.log(arreglo);
//agregar en el indice 0
//splice(indice, numero de elementos eliminados,items a agregar)
arreglo.splice(0,0,4);
console.log(arreglo);
const indiceNueeve = arreglo.indexOf(9); // encuentra el primer elemento y devuelve el indice
arreglo.splice(indiceNueeve,0);
console.log(arreglo);