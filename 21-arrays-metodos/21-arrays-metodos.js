/*
Arrays - Metodos II OJO al video 10
*/
/*---.from(iterable)---
Convierte en array un elemento iterable. Muy usado en el DOM.
Vamos a tomar todos los link de nuestro archivo index.html:
*/
const links = document.querySelectorAll('a');
console.log(links);

// Como vemos al imprimir por pantalla nos muestra:
/*
NodeList(7) [a, a, a, a, a, a, a]

Un NodeList. Con el metodo from() podemos tranasformar ese NodeList a un array.
*/
let lista = Array.from(links);
console.log(lista);
console.log(lista[0].innerHTML);

let word = 'Hola mundo';
let arrayWord = Array.from(word);
console.log(arrayWord); // ['H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

/*
---.sort(callback)---
Ordena los elementos de un array alfabeticamente(valor Unicode), si le pasamos un callback los ordena en funcion del algoritmo que le pasemos. Este callback es opcional.
https://unicode-table.com/es/
callback es una funcion que la ejecuta otra funcion.
*/
const letters = ['b', 'z', 'w', 'd', 'a'];
console.log(letters);

const letterShort = letters.sort();
console.log(letterShort); // ['a', 'b', 'd', 'w', 'z']

const numbers = [8, 3, 1, 55, 89, 100];
const numbers1 = numbers.sort();
console.log(numbers1); //  [1, 100, 3, 55, 8, 89] 😯
/*Vemos que lo odena no de menor a mayor, usa el valor unicode le pasaremos un callback para que lo ordene de menor a mayor:
*/
// Ordenamos de menor a mayor
const numbers2 = numbers.sort((a, b) => {
  return a - b; // 😯
})
console.log(numbers2); //  [1, 3, 8, 55, 89, 100]

// Ordenamos de mayor a menor
const numbers3 = numbers.sort((a, b) => {
  return b - a; // 😯
})
console.log(numbers3); // [100, 89, 55, 8, 3, 1] 😯

/*
Veamos lo que hace internamente:
function menorMayor(a,b){
  if(a - b < 0) return -1;
  if(a - b > 0) return 1;
  if(b == a) return 0;
}

function mayorMenor(a,b){
  if(b - a < 0) return -1;
  if(b - a > 0) return 1;
  if(b == a) return 0;
}
*/

/*
---.forEach(callback(currentValue, [index]))---
Ejecuta la funcion indicada una vez por cada elemento del array.
Es un tipo de bucle que tenemos en JS. Recorremos el array.
*/
const arrayNumber = [12, 34, 65, 34, 98];
arrayNumber.forEach((number, index) => {
  console.log(number);
  console.log(index);
})

/*
---.some(callback)---
Comprueba si al menos un elemento del array cumple la condicion. Los recorre cada palabra si es un string.

.every(callback)
Comprueba si todos los elementos del array cumple la condicion.
Funcionan casi igual.
*/

// Lo que hace es recorrer cada elemento del array y devuelve true o false si existe o no.
const lenguajes = ['HTML5', 'JavaScript', 'PHP', 'CSS3'];
let some = lenguajes.some((lenguaje) => lenguaje.length > 2);
console.log(some); // true
let every = lenguajes.every((lenguaje) => lenguaje.length > 3);
console.log(every); // false

/*
Estos tres metodos siguientes son muy muy importantes: Todos estos metodos recorren un array y devuelven un nuevo array. OJO se usa mucho con el DOM.

.map(callback)
Transforma todos los elementos del array y devuelve un nuevo array.
*/
const arrayNumberA = [12, 34, 65, 34, 98];
let arrayNumberA2 = arrayNumberA.map((num) => {
  let multiplo = num * 2;
  return multiplo;
})
console.log(arrayNumberA2);

/*
.filter(callback)
Filtra todos los elementos del array que cumplan un condicion y devuelven un nuevo array.
*/
let arrayNumberA3 = arrayNumberA.filter((num) => {
  if (num > 40) {
    return num;
  }
})
console.log(arrayNumberA3);

/*
---.reduce(callback)---
Reduce todos los elelentos del array a un unico valor
*/
let reduceNumbers = arrayNumberA.reduce((a, b) => {
  return a + b;
});
console.log(reduceNumbers); // 243

// Veamos otro ejemplo:
const users = [
  {
    name: 'user 1',
    online: true
  },
  {
    name: 'user 2',
    online: true
  },
  {
    name: 'user 3',
    online: false
  },
  {
    name: 'user 4',
    online: true
  },
  {
    name: 'user 5',
    online: false
  },
  {
    name: 'user 6',
    online: true
  }
]

let usersOnline = users.reduce((contador, user) => {
  if (user.online) {
    contador++;
  }
  return contador;
}, 0)

console.log(usersOnline);
