// Diseñar un modulo llamado calculadora, en este módulo debe exportar una
// clase con los siguientes metodos:
// a.Suma
// b.Resta
// c.Multiplicación
// d.División
// Al momento de realizar cada operación el sistema debe validar que no se
// presenten errores, si al momento de su ejecución se presenta algún error, el
// sistema debe enviar un mensaje personalizado indicando el tipo de error
// para que el usuario lo solucione y continue realizando los cálculos básicos de las matemáticas.


export function calculadora(a,b) {
  class Calcular {
    static sumar(a, b) {
      return a + b;
    }

    static restar(a, b) {
      return a - b;
    }

    static multiplicar(a, b) {
      return a * b;
    }

    static dividir(a, b) {
      if (b === 0) {
        return "No es posible dividir entre 0";
      } else {
        return a / b;
      }
    }
  }




  if (isNaN(a) || isNaN(b)) {
    alert("Por favor ingrese números válidos.");
  } else {
    alert("El resultado de la suma es " + Calcular.sumar(a, b) +
      ", el resultado de la resta es " + Calcular.restar(a, b) +
      ", el resultado de la multiplicación es " + Calcular.multiplicar(a, b) +
      ", el resultado de la división es " + Calcular.dividir(a, b));
  }
}

