/*
JavaScript desde cero.
Video - 13: Bucle for of / for in.

Estos dos bucles nuevos han llegado con ES06. Para recorrer arrays
Simplifica el bucle for tradicional sin tener que darle un numero de vueltas ni realizar un incremento.

Sintaxis:

let names = ['Luis', 'Andres', 'Antonio', 'Maria'];

for of -> muestra los valores del array:
for(let name of names){
  console.log(name);
}

  1-Luis
  2-Andres
  3-Antonio
  4-Maria

for in -> muestra los indices del array: Mas indicado para recorrer objetos que array. Pero se puede hacer.

  1-0,
  2-1,
  3-2,
  4-3

Existen unas palabras reservadas que podemos usar dentro de los bucles:

- break -> Rompe el bucle y hasta aho se ejecuta.
- continue -> Se salta la(s) posiciones que le indiquemos y continúa su ejecución

*/

let names = ['Luis', 'Andres', 'Antonio', 'Maria'];

// for of
console.log('--- for of ---');
for (let name of names) {
  console.log(`NamesA:${name}`);
  // Asi tambien podemos ver el index:
  console.log(`IndexA: ${names.indexOf(name)}`);
}

// Aqui se rompe el ciclo y
for (let name of names) {
  if (name === 'Andres') {
    continue;
  }
  // Imprime todos menos el del if
  console.log(`NamesB:${name}`);
}

console.log('--- for in ---');
// for in
for (let index in names) {
  console.log(`IndexC:${index}`);
  // Asi sacamos el valor:
  console.log(`NamesC:${names[index]}`);
}

for (let index in names) {
  if (names[index] === 'Antonio') {
    continue;
  }
  console.log(`IndexD:${index}`);

}

