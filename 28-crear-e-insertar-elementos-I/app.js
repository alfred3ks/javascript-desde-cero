/*
Crear e insertar elementos al DOM I.
Para crear elementos en el DOM usaremos el metodo:
document.createElement(element);

Para escribir un text en un elemento:
element.textContent = texto;

Escribir HTML en un elemento:
element.innerHTML = codigo HTML;

Añadir elementos al DOM: HAY MAS
parent.appendChild(element);

Fragmentos de codigo:
document.createDocumentFragment();

*/

// Declaramos un arrays de dias de la semana:
const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

// Obtenemos los nodos que tenemos en el DOM:
const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('daysSelect');

// Asi creamos un elemento:
const itemList = document.createElement('li');

// Asi metemos contenido a un elemento:
itemList.textContent = 'Comprar Pan';

//Añadimos elementos al DOM:
daysList.appendChild(itemList);

// Agregamos contenido al titulo:
title.textContent = 'DOM - Crear e insertar elementos I.';

// Si quisieramos agregar un texto que lleve otras etiquetas HTMl debemos usar innerHTML ya que textContent no interpreta HTML:
title.innerHTML = 'DOM - Crear e <span>insertar elementos I</span> .';

// Vamos a escribir el array de dias en nuestro DOM:
// Operacion no ideal porque gastamos mas recursos del DOM:
for (const day of days) {
  daysList.innerHTML += `<li>${day}</li>`;
}

// Lo ideal es usar fragment:
/* Creating a fragment of the DOM and then appending it to the DOM. */
const fragment = document.createDocumentFragment();
for (const day of days) {
  const itemList = document.createElement('li');
  itemList.textContent = day;
  fragment.appendChild(itemList);
}

// Aqui con una solo inyeccion metemos el array al DOM y no como la version anterior que lo hce por cada iteracion del ciclo.
daysList.appendChild(fragment);

// Vamos a rellenar el select:
/* Creating a fragment of the DOM and then appending it to the DOM. */
const fragmentSelect = document.createDocumentFragment();
for (const day of days) {
  const selectItem = document.createElement('option');
  selectItem.setAttribute('value', day.toLowerCase());
  selectItem.textContent = day;
  fragmentSelect.appendChild(selectItem);
}
// Metemos toda la lista en una operacion:
selectDays.appendChild(fragmentSelect);
