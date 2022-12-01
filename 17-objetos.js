/*
JavaScript desde cero.
Video - 17: Los objetos en JavaScript.

- Un objeto son estructuras de datos que representan propiedades, valores y acciones que puede realizar el objeto.

- Todos los objetos tienen propiedades o atributos y comportamientos o acciones represetnados por pares de clave:key: valor:value.

  const computer = {
    screenSize:17,
    model: 'MacBook Pro'
  }

  const table = {
    material: 'wood',
    width: 160,
    height: 110
  }

Para acceder a las propiedades y acciones del objetos se utiliza la nomenclatura del punto.

const person = {
  name: 'Juan',
  age: 26,
  sons: ['Laura', 'Diego']
}

console.log(person.name); // Juan
console.log(person.age); // 26
console.log(person.sons[0]); // Laura
console.log(person.sons[1]); // Diego

Para el caso que el objeto tenga muchas propiedades lo anterior es sencillo para objetos sencillo, pero para objetos mas complejos debemos recorrer el objeto.

  for(const key in person){
    console.log(key);
  }
  for(const values in person){
    console.log(person[key]);
  }

No se puede recorrer con un for of porque nos dice que el objeto no es iterable pero con un for in si.

*/

/* Creating a constant variable called person and assigning it an object. */
const person = {
  name: 'Juan',
  age: 26,
  sons: ['Laura', 'Diego', 'Pedro', 'Rosa', 'Tomas']
}

console.log(person); // { name: 'Juan', age: 26, sons: [ 'Laura', 'Diego' ] }
console.log(person.name); // Juan
console.log(person['name']); // Juan

for (const key in person) {
  console.log(key);
}
/*
name
age
sons
*/

for (const key in person) {
  console.log(person[key]);
}
/*
Juan
26
[ 'Laura', 'Diego', 'Pedro', 'Rosa', 'Tomas' ]
*/

/*
  for (const values of person) {
    console.log(values);
  }

  TypeError: person is not iterable
*/

// Vamos a iterar para solo extraer los hijos: for of
for (const son of person.sons) {
  console.log(son);
}
/*
Laura
Diego
Pedro
Rosa
Tomas
*/

// Vamos a imprimir todo el objeto en forma de frase:
console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman ${person.sons.join(', ')}.`);

// Hola Juan. Tienes 26 años y tus hijos se llaman Laura, Diego, Pedro, Rosa, Tomas.