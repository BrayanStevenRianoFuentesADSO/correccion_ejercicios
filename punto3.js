// Diseñar un programa que me solicite por teclado n cantidad de números, al
// finalizar la carga de los números el programa debe enviar los números a
// una función expresada como único parámetro rest donde serán ordenados
// de mayor a menor para luego mostrarlos en una tabla por consola
// Crea una función de nos devuelva el elemento mayor de un arreglo de números.


let cant_nums = parseInt(prompt("Cantidad de números:"));
let total_numeros = [];
let nums_ordenados = [];

for (let cont = 1; cont <= cant_nums; cont++) {
    let num = parseInt(prompt("Ingrese un número (" + cont + "):"));
    total_numeros.push(num);
}

const ordenarnumeros = function(...numeros) {
    numeros.sort().reverse(); /** Ordena de menor a mayor el array 
    pero con el reverse ordena de mayor a menor*/ 
    
    return numeros;
};

const obtenermayor = function(numeros) {
    return Math.max(...numeros);
};

nums_ordenados = ordenarnumeros(...total_numeros);
let mayor = obtenermayor(total_numeros);

console.log("Números ordenados de mayor a menor:");
console.table(nums_ordenados);
console.log("El número mayor es:", mayor);
