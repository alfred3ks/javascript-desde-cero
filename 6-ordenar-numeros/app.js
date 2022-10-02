/*
JavaScript desde cero.
Video - 6: Condicional if.
Ejercicio #1

Ordena 3 números de mayor a menor introducidos por un usuario:

Analizamos el problema.
Como son 3 numeros tenemos que ver cuantas combinaciones tendremos:

  3! = 3 * 2 * 1 = 6,

  Vamos a ver las combinaciones:
  abc 123
  acb 132
  bac 213
  bca 231
  cab 312
  cba 321

Tendremos 6 posiblidades de combinaciones:

*/

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = parseInt(prompt('Introduce el primer número:'));
let b = parseInt(prompt('Introduce el segundo número:'));
let c = parseInt(prompt('Introduce el tercer número:'));

// Asi pintamos en el DOM teniendo el id
numbers.textContent = `Los números introducidos son: ${a}, ${b}, ${c}`;

if (a >= b && a >= c) {
  if (b > c) {
    result.textContent = `Los números ordenados de mayor a menor -> : ${a}, ${b}, ${c}`;
  } else {
    result.textContent = `Los números ordenados de mayor a menor -> : ${a}, ${c}, ${b}`;
  }
} else if (b >= a && b >= c) {
  if (a > c) {
    result.textContent = `Los números ordenados de mayor a menor -> : ${b}, ${a}, ${c}`;
  } else {
    result.textContent = `Los números ordenados de mayor a menor -> : ${b}, ${c}, ${a}`;
  }
} else if (c >= a && c >= b) {
  if (a > b) {
    result.textContent = `Los números ordenados de mayor a menor -> : ${c}, ${a}, ${b}`;
  } else {
    result.textContent = `Los números ordenados de mayor a menor -> : ${c}, ${b}, ${a}`;
  }
}

