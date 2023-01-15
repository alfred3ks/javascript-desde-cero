/*
DOM Traversing - Recorrer el DOM:

Vamos a ver como recorrer el DOM. Este termino es DOM traversing, es atravesar el DOM. Lo que hacemos es situernos en un nodo y saber movernos hacia arriba o hacia abajo en funcion del nodo referencia.

Usaremos el nodo con id parent con el nos moveremos hacia arriba y hacia abajo.

Padre - parent (Nodo del que desciende)
  - parentNode - Devuelve el nodo padre (que puede no ser un elemento)
  - parentElement - Devuelve el nodo elemento padre.

NOTA:
Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode y parentElement devolverá siempre null.

Hijos - child (Nodo que desciende de un padre)
  - childNodes - Devuelve todos los nodos hijos
  - children - Devuelve todos los nodos elementos hijos
  - firstChild - Devueleve el primer nodo hijo
  - firstElementChild - Devueleve el primer nodo elemento hijo
  - lastChild - Devueleve el último nodo hijo
  - lastElementChild - Devueleve el último nodo elemento hijo
  - hasChildNodes() - Devueleve true si el nodo tiene hijos y false si no tiene

Hermanos - siblings (Nodo al mismo nivel)
  - nextSibling - Devuelve el siguiente nodo hermano
  - nextElementSibling - Devuelve el siguiente nodo elemento hermano
  - previousSibling - Devuelve el anterior nodo hermano
  - previousElementSibling - Devuelve el anterior nodo elemento hermano

Cercano: Experimental y que no tiene soporte aun:
  - closest(selector) - Selecciona el nodo más cercano que cumpla      con el selector, aún es experimental.
*/

const parent = document.getElementById('parent');

// Vamos a ver los padres:
// Estos dos funcionan practicamente igual, osea devuelven lo mismo:
console.log(parent.parentNode); // -> este es el padre: <nav></nav>
console.log(parent.parentElement); // -> este es el padre: <nav></nav>

// Vamos a ver como llegar a los hijos: Nodos que descienden de un padre:Como vemos nos retorna un NodeList de todos sus hijos.
console.log(parent.childNodes); // NodeList(9) [text, li, text, li, text, li, text, ul, text]

// Ahora vamos a ver como devolver todos los nodos elementos: Vemos que retorn un HTML Collection, esto es mas habitual que el anterior:
console.log(parent.children); // HTMLCollection(4) [li, li, li, ul]

// Ahora vemos como obtener el primer hijo:
console.log(parent.firstChild); // #text Es el salto de linea, OJO que tambien se puede obtener comentarios, saltos de linea, para evistar eso usamos el de acontinuacion:

// Vemos como obtener el primer hijo pero sin los saltos de linea: Este es el mas usado:
console.log(parent.firstElementChild); // <li></li>

// Obtenemos el ultimo:
console.log(parent.lastChild); // #text Igual obtenemos un salto de linea, el mas usado el siguiente:

console.log(parent.lastElementChild);

// Vamos a ver hasChildNodes() que retorna true si el nodo tiene hijos y false si no tiene: Esto es un metodo:
console.log(parent.hasChildNodes()); // true
console.log(parent.firstChild.hasChildNodes()); // false

// Ahora vamos a ver los hermanos:
console.log(parent.nextSibling); // #text Obtenemos de nuevo un salto de linea:
console.log(parent.nextElementSibling); // null ya que el ul no tiene hermano
console.log(parent.parentElement.nextElementSibling); // su siguiente hermano es el script.

// Ahora vemos el hermano anterior:
console.log(parent.previousSibling); // #text Obtenemos de nuevo un salto de linea:
console.log(parent.parentElement.previousElementSibling);  // <h1>DOM - Recorrerlo - (DOM Traversing)</h1>