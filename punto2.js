/**Diseñar un programa que me solicite ingresar n cantidad de números por
 teclado, luego de ingresar los números el programa me debe solicitar que
 operación deseo realizar:
 a.Sumar los números
 b.Contar los números primos
 c.Contar los números pares
 d.Calcular el promedio de los números primos
 e.Calcular el promedio de números pares
 Para este ejercicio se solicita trabajar con módulos. */

 export function operaciones() {
  let cant_nums = parseInt(prompt("Cuantos numeros desea ingresar"));
  let array_nums = [];
  let suma = 0;
  let cont_primos = 0;
  let cont_pares = 0;
  let prom_primos = 0;
  let prom_pares = 0;

  for (let cont = 1; cont <= cant_nums; cont++) {
    let num = parseInt(prompt("ingrese un numero (" + cont + ")"));
    array_nums.push(num);
  }

  let operacion = prompt("Que operacion desea realizar: Sumar los números (a) Contar los números primos (b) Contar los números pares (c) Calcular el promedio de los números primos (d) Calcular el promedio de números pares (e)");

  if (operacion == "a") {
    for (let cont = 0; cont < array_nums.length; cont++) {
      suma += array_nums[cont];
    }
    alert("el resultado de la suma es " + suma);
  }

  if (operacion == "b") {
    for (let cont = 0; cont < array_nums.length; cont++) {
      let esprimo = true;
      for (let divisor = 2; divisor < array_nums[cont]; divisor++) {
        if (array_nums[cont] % divisor == 0) {
          esprimo = false;
        }
      }
      if (esprimo) {
        cont_primos++;
      }
    }
    alert("hay " + cont_primos + " numeros primos");
  }

  if (operacion == "c") {
    for (let cont = 0; cont < array_nums.length; cont++) {
      if (array_nums[cont] % 2 == 0) {
        cont_pares++;
      }
    }
    alert("hay " + cont_pares + " numeros pares");
  }


  if (operacion == "d") {
    for (let cont = 0; cont < array_nums.length; cont++) {
      let esprimo = true;
      for (let divisor = 2; divisor < array_nums[cont]; divisor++) {
        if (array_nums[cont] % divisor == 0) {
          esprimo = false;
        }
      }
      if (esprimo) {
        cont_primos++;
        suma += array_nums[cont];
      }
    }
    prom_primos += suma / cont_primos;
    alert("el promedio de numeros primos es " + prom_primos);
  }

  
  if (operacion == "e") {
    for (let cont = 0; cont < array_nums.length; cont++) {
      if (array_nums[cont] % 2 == 0) {
        cont_pares++;
        suma += array_nums[cont];
      }
    }
    prom_pares += suma / cont_pares;
    alert("el promedio de numeros pares es de " + prom_pares);
  }
}



