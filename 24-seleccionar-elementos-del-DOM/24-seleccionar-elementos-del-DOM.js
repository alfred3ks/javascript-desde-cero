/*
Vamos a acceder a los nodos del DOM: Tenemos 3 métodos:

document.getElementById('id);
Accedemos a un elemento a traves de su id.

Estos dos se pueden hacer desde el documento o el elemento:
document | element .querySelector('selectorCSS');
Accedemos al primer elemento que coincida con el selector CSS

document | element .querySelectorAll('.selectorCSS');
Accede a toos los elementos que coincidan con el selector CSS, devuelve un NodeList.
*/
// Accedemos al nodo con un id
console.log('--- accedemos al nodo por medio del ID');
const title = document.getElementById('title');
console.log(title);

// Vamos a leer y editar su contenido, muy usado:
console.log(title.textContent);
title.textContent = "Accediendo a nodos.";
console.log(title.textContent);

// Accedemos al primer nodo con esa clase:
console.log('--- accedemos al nodo por medio de la clase');
const paragraph = document.querySelector('.paragraph');
console.log(paragraph);

// Asi accedemos al span a traves de la clase:
const span = document.querySelector('.paragraph').querySelector('span');
console.log(span.textContent);

// Accedemos a todos los selectores de clase, nos devuelve un NodeList.
let paragraphs = document.querySelectorAll('.paragraph');
console.log(paragraphs);

paragraphs[1].style.color = 'red';

// No podemos iterar un node list lo debemos transformar a un array:
// paragraphs.map((p) => p.style.color = "green");

let paragraphsArray = [...paragraphs];
console.log(paragraphsArray);

// Ya lo podemos iterar:
paragraphsArray.map((p) => p.style.color = "green");

// NOTA: No es lo mas ideal cambiar los estilos con JS.
// Tambien podemos usar array.from() para pasar el nodeList a un array:
let paragraphsFrom = Array.from(paragraphs);
console.log(paragraphsFrom);