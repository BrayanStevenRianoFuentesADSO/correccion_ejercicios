// Diseñar un programa que me permita ingresar n cantidad de palabras por
// teclado, al finalizar la carga, se debe enviar como a una función expresada
// como único parámetro rest donde nos responderá cual de las palabras
// ingresadas es mayor a todas las anteriores.

let cant_palabras = parseInt(prompt("Cantidad de palabras:"));
let palabras = [];

for (let cont = 1; cont <= cant_palabras; cont++) {
    let palabra = prompt("Ingrese una palabra (" + cont + "):");
    palabras.push(palabra);
}

const encontrarMayor = function(...palabras) {
    let mayor = palabras[0];
    for (let i = 1; i < palabras.length; i++) {
        if (palabras[i] > mayor) {
            mayor = palabras[i];
        }
    }
    return mayor;
};

let palabraMayor = encontrarMayor(...palabras);

console.log("La palabra mayor es:", palabraMayor); 


