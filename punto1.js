/**Diseñar un programa que permita validar el tipo de tarjeta de crédito que
 registra el operador, para ello debemos tener en cuenta que las diferentes
 tarjetas tienen diferentes nomenclaturas:
 • American Express: 15 dígitos y empieza por(34 – 37)
 • Diners Club: tiene 14 dígitos y empieza por(300 – 305 o 36 - 38)
 • Discover: tiene 16 dígitos y empieza por(6011)
 • Mastercard: tiene 16 dígitos y empieza por(51 – 55)
 • Visa: tiene: 16 dígitos y empieza por(4)
 El programa solo se debe permitir el ingreso de enteros positivos y máximo
16 caracteres, si el operador ingresa un carácter no permitido se debe
 mostrar por pantalla el error y solicitar nuevamente el número de su tarjeta
 de crédito.
 Para este ejercicio se solicita trabajar con módulos, expresiones regulares y
condicionales.Si está permitido solicitar al operador el tipo de su tarjeta de
crédito. */



export function validarnum() {
  let tipo = parseInt(prompt("Ingrese el tipo de tarjeta: American Express (1), Diners Club (2), Discover (3), Mastercard (4), Visa (5)"));


  let num_correcto = false

  while (num_correcto == false) {

    if (tipo == 1) {
      let numero = prompt("Ingrese el número de su tarjeta American Express");
      let validar1 = /^[3][4][0-9]{13}$/;
      let validar2 = /^[3][7][0-9]{13}$/;

      if (validar1.test(numero) || validar2.test(numero)) {
        alert("NUMERO CORRECTO");
        num_correcto = true
      } else {
        alert("POR FAVOR, VERIFIQUE SU NUMERO");
      }
    }

    if (tipo == 2) {
      let numero = prompt("Ingrese el número de su tarjeta Diners Club");
      let validar1 = /^[3][0][0][0-9]{11}$/;
      let validar2 = /^[3][0][5][0-9]{11}$/;
      let validar3 = /^[3][6][0-9]{12}$/;
      let validar4 = /^[3][8][0-9]{12}$/;

      if (validar1.test(numero) || validar2.test(numero) || validar3.test(numero) || validar4.test(numero)) {
        alert("NUMERO CORRECTO");
        num_correcto = true
      } else {
        alert("POR FAVOR, VERIFIQUE SU NUMERO");
      }
    }

    if (tipo == 3) {
      let numero = prompt("Ingrese el número de su tarjeta Discover");
      let validar1 = /^[6][0][1][1][0-9]{12}$/;

      if (validar1.test(numero)) {
        alert("NUMERO CORRECTO");
        num_correcto = true
      } else {
        alert("POR FAVOR, VERIFIQUE SU NUMERO");
      }
    }

    if (tipo == 4) {
      let numero = prompt("Ingrese el número de su tarjeta Mastercard");
      let validar1 = /^[5][1][0-9]{12}$/;
      let validar2 = /^[5][5][0-9]{12}$/;

      if (validar1.test(numero) || validar2.test(numero)) {
        alert("NUMERO CORRECTO");
        num_correcto = true
      } else {
        alert("POR FAVOR, VERIFIQUE SU NUMERO");
      }
    }

    if (tipo == 5) {
      let numero = prompt("Ingrese el número de su tarjeta Visa");
      let validar1 = /^[4][0-9]{15}$/;

      if (validar1.test(numero)) {
        alert("NUMERO CORRECTO");
        num_correcto = true
      } else {
        alert("POR FAVOR, VERIFIQUE SU NUMERO");
      }
    }
  }
}

