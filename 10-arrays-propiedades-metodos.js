/*
JavaScript desde cero.
Video - 10: Arrays - Propiedades y metodos.
*/

let numbers = [1, 2, 3, 4, 5];

// Propiedades:
/*
.length: Propiedad:
array.length -> devuelve el numero de posiciones que contiene el array.
*/
console.log('--.length:--');
console.log(numbers.length);  // 5

// Metodos:
/*
Array.isArray(x); -> Devuelve true si la variable es un array. Se le pasa por parametro la variable a evaluar.
*/
console.log('--Array.isArray(x)--');
let numbersA = [1, 2, 3, 4, 5];
let number = 4;
console.log(Array.isArray(number)); // false
console.log(Array.isArray(numbersA)); // true

/*
Eliminar elementos a un array:
.shift() -> Elimina el primer elemento del array y devuelve ese elemento.
.pop() -> Elimina el ultimo elemento de un array y devuelve ese elemento.
Estos metodos alteran el array original.
*/
console.log('--.shift() .pop()--');
let numbersB = [1, 2, 3, 4, 5];
console.log(numbersB); // [ 1, 2, 3, 4, 5 ]
let deleteInitial = numbersB.shift();
console.log(deleteInitial); // 1
console.log(numbersB); // [ 2, 3, 4, 5 ]

let deleteEnd = numbersB.pop();
console.log(deleteEnd); // 5
console.log(numbersB); // [2, 3, 4]

/*
Añadir elementos a un array:
- .push(x,y,z) -> Añade uno o mas elementos al final del array y devuelve la nueva longitud.
- .unshift(x,y,z) -> Añade uno o ma elementos al comienzo del array y devuelve la nueva longitud
*/
console.log('--.push() .unshift():--');
let numbersC = [1, 2, 3, 4, 5];
console.log(numbersC); // [ 1, 2, 3, 4, 5 ]
let addEnd = numbersC.push(6, 7, 8)
console.log(addEnd); // 8
console.log(numbersC); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
let addInitial = numbersC.unshift(-2, -1, 0, 1)
console.log(addInitial); // 12
console.log(numbersC); // [-2, -1, 0, 1, 1, 2, 3, 4, 5, 6, 7, 8]

// Buscar elementos en un array:
/*
.indexOf() -> Devuelve el primer indice del elemento que coincida con el valor especificado, si devuelve -1 es que no lo ha encontrado o no existe.
*/
let numbersD = [1, 2, 3, 4, 5];
console.log('--.indexOf():--');
console.log(numbersD.indexOf(-3)); // -1
console.log(numbersD.indexOf(3)); // 2
console.log(numbersD.indexOf(5)); // 4

/*
- .lastIndexOf() -> Devuelve el ultimo indice del elemento que coincida con el valor especificado, si devuelve -1 es que no existe.
*/
console.log('--.lastIndexOf():--');
let numbersE = [1, 2, 3, 4, 1, 5, 6];
console.log(numbersE.lastIndexOf(1));  // 4

/*
- .reverse() -> Invierte el orden de los elementos del array.
*/
console.log('--.reverse():--');
let numbersF = [1, 2, 3, 4, 1, 5, 6];
console.log(numbersF); // [1,2,3,4,1,5,6]
console.log(numbersF.reverse()); // [6, 5, 1, 4,3, 2, 1]

/*
.join(separador) -> devuelve un string con el separador que le indiquemos, por defecto son comas.
*/
console.log('--.join(separador):--');
let numbersG = [1, 2, 3, 4, 1, 5, 6];
console.log(numbersG);
let arrayString = numbersG.join('-')
console.log(arrayString); // 6-5-1-4-3-2-1

/*
.splice(A,B,Items) -> Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
A-Indice de inicio,
B-Numero de elementos (opcional)
Items-Elementos a añadir en el caso de que se añadan.(opcional)
*/
console.log('--.splice(A,B,Items) B(opcional), Items(opcional):--');
let numbersH = [1, 2, 3, 4, 5, 6];
console.log(numbersH); // [1, 2, 3, 4, 5, 6]

console.log('---H');
let newArrayH = numbersH.splice(3);
console.log(newArrayH); // [ 4, 5, 6 ] Guarda lo que elimina en un nuevo array
console.log(numbersH); // [ 1, 2, 3 ]

console.log('---I');
let numbersI = [1, 2, 3, 4, 5, 6];
let newArrayI = numbersI.splice(2, 2)
console.log(newArrayI);// [3,4]
console.log(numbersI); // [ 1, 2, 5, 6]

console.log('---J');
let numbersJ = [1, 2, 3, 4, 5, 6];
console.log(numbersJ);  // [ 1, 2, 3, 4, 5, 6 ]
let newArrayJ = numbersJ.splice(2, 2, 10, 23, 56);
console.log(newArrayJ); // [ 3, 4 ]
console.log(numbersJ); // [ 1, 2, 10, 23, 56, 5, 6 ]
// Para este caso vemos que elimina en la posicion 2, 2 elementos y luego agrega los que les pasamos

console.log('---K');
let numbersK = [1, 2, 3, 4, 5, 6];
console.log(numbersK); // [ 1, 2, 3, 4, 5, 6 ]
let newArrayK = numbersK.splice(2, 0, 33, 44, 55)
console.log(newArrayK); // []
console.log(numbersK); // [1, 2, 33, 44, 55, 3, 4, 5, 6]
// Si ponemos cero no elimina y agrega tambien al resto a partir de la posicion que le marquemos como primer valor

/*
.slice(A,B) -> Extrae elementos de un array desde el indice A hasta el indice B. si no existe B lo hace hasta el final, si no existe A ni B hace una copia del original.
*/
console.log('--.slice(A,B):--');
let numbersM = [11, 22, 33, 44, 55, 66];
console.log(numbersM); // [ 11, 22, 33, 44, 55, 66 ]
let newArrayM = numbersM.slice();
console.log(newArrayM); // [ 11, 22, 33, 44, 55, 66 ]

let newArrayN = numbersM.slice(2);
console.log(newArrayN); // [ 33, 44, 55, 66 ] desde posicion 2 en adelante

let newArrayO = numbersM.slice(0, 3);
console.log(newArrayO); // [ 11, 22, 33 ] Comienza en cero hasta 2 ya que no incluye a 3