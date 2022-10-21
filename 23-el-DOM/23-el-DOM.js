/*

--- El DOM!!!!! ---
Document Object Model.

Se considera el DOM a toda la estructura HTMl del documento.
Es una API(Aplication Programing Interface). Se utiliza a traves de JS.

Es el arbol de documentos de nodos.

Nodos:
- Cada parte del arbol del documento es un nodo.
Hay bastantes tipos de nodos, los mas utilizados:
- Element node - 1 (Cualquier etiqueta HTML),
- Text node - 3 (El contenido de la etiqueta),
- Comment node - 8 (Cualquier comentario en HTML).

*/

console.log('--- El DOM ---');
const title = document.getElementById('title');

console.log(title.nodeType); // 1 Ese es el numero que vemos arriba.
console.log(title.nodeName); // H1

console.log(title.childNodes[0].nodeType); //3
console.log(title.className); //3
