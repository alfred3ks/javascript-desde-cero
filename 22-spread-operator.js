/*
Spread Operator: Es el operador de expansion.
Su sintaxis es ... Tod esto ha venido ES6
*/

const numbers = [-12, 2, 3, 23, 43, 2, 3];
console.log(numbers);
console.log(...numbers);

// Enviar elementos en un array a una funcion
console.log('--Enviar elementos en un array a una funcion:--');
const addNumbers = (a, b, c) => {
  console.log(a + b + c);
}
addNumbers(1, 2, 3);
let numbersToAdd = [1, 2, 3];
addNumbers(...numbersToAdd);

// Añadir un array a otro array
console.log('--Añadir un array a otro array:--');
let users = ['Javier', 'David', 'Rosa', 'Juan', 'Mercedes'];
let newUsers = ['Marta', 'Jaime', 'Laura'];

users.push(...newUsers);
console.log(users);
users.unshift(...newUsers);
console.log(users);

// Copiar arrays
console.log('--Copiar arrays:--');
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);

// Concatenar arrays
console.log('--Concatenar arrays:--');
let arr3 = [4, 5, 6];
let arr4 = [7, 8, 9];

// Concat
let concat1 = arr3.concat(arr4);
console.log(concat1);
// spread operator
let concat2 = [...arr3, ...arr4];
console.log(concat2);

// Enviar un numero indefinido de argumentos a una funcion (parametros REST)
console.log('--Enviar un numero indefinido de argumentos a una funcion (parametros REST):--');
const restParams = (...params) => {
  // Se convierten en un array
  console.log(params);
}
restParams(1, 2);

// Libreria math
console.log('--Libreria math:--');
let datos = [-12, 2, 3, 23, 43, 2, 3];
console.log(Math.max(...datos));
console.log(Math.min(...datos));

// Eliminar elementos duplicados: Set()
console.log('--Eliminar elementos duplicados:--');
let repetidos = [-12, 2, 3, 23, 43, 2, 3];
console.log([...new Set(repetidos)]);

let origin = new Set(repetidos);
console.log(origin); // -> objeto
console.log(...origin);