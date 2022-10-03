/*
JavaScript desde cero.
Video - 9: Arrays - Introducción.

- Son estructuras que nos pemiten almacenar varios datos y agruparlos,
- Se pueden llenar con cualquier tipo de dato valido en JavaScript y deben ir separados por comas,
- Se pueden mezclar tipos de datos, pero no es recomendable,
- Se declaran con corchetes -> [],
- Pueden declararse vacios o con un contenido ya establecido,
- Pueden añadirse o eliminarse elementos en el momento que queramos,
- En JavaScript los arrays se comportan como listas en otros lenguajes.

Sintaxis:

  let array = [];

  let numeros = [1,2,3,4];

  let frutas = ["manzana", "pera", "uva"];

- Cada uno de los elementos podra ser identificado por su indice, es decir su posicion,
- Los indices en los arrays de JavaScript empiezan en cero (0),

*/

// Declaramos un array vacio:
let num1 = [];
console.log(num1);

// Declaramos un array de numeros:
let num2 = [1, 2, 3];
console.log(num2);

// Accedemos a sus valores:
console.log(num2[0]);
console.log(num2[1]);
console.log(num2[2]);
console.log(num2[2] + num2[1]);

// array de string:
let palabras = ["hola", "estamos", "programando"];
console.log(palabras);
console.log(palabras[0]);

// Propiedad .length:
console.log(palabras.length);
console.log(palabras[0].length);
console.log(palabras[1].length);
console.log(palabras[2].length);
