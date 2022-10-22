/*
Modificar atributos y clases - DOM.

Vamos a ver como podemos modificiar los atributos, las clases y algunos valores de acceso directo.

Para trabajar con atributos en el DOM tenemos estos metodos:
Atributos:
  element.getAttribute('attribute')
  element.setAttribute('attribute', value)

Para trabajar con clases en el DOm tenemos estas clase:
Clase
  element.classList.add('class', 'class', ...)
  element.classList.remove('class', 'class', ...)
  element.classList.toggle('class'[,force])
  element.classList.contain('class')
  element.classList.replace('oldClass', 'newClass')

Atributos directos:
  id
  value

*/
const title = document.getElementById('title');
const name = document.getElementById('name');
const correo = document.getElementById('correo');

// --- Atributos: ---
// --- element.getAttribute('attribute'): obtenemos los atributos directos: ---
console.log(name.getAttribute('type')); // text

// --- element.setAttribute('attribute', value): Vamos a modificar su atributo, el valor: ---
name.setAttribute('type', 'number');
console.log(name.getAttribute('type')); // number

name.setAttribute('type', 'radio');
console.log(name.getAttribute('type')); // radio

// --- Clases: ---
// --- element.classList.add('class', 'class', ...) Podemos añadir clases ---
title.classList.add('main-title', 'other-title');
console.log(title);

// --- element.classList.remove('class', 'class', ...) Podemos eliminar clases ---
title.classList.remove('main-title', 'other-title');
console.log(title);

// --- element.classList.contain('class') devuelve true o false en funcion de si tiene la clase o no ---
if (title.classList.contains('title')) {
  console.log(title.classList.contains('title')); // true
  title.style.color = 'red';
}

// --- element.classList.replace('oldClass', 'newClass') sustituye una clase por otra ---
title.classList.replace('title', 'main-title');
console.log(title);

// Atributos directos: Se llaman asi porque se pueden acceder directo a ellos.
console.log(title.id);
console.log(title.innerHTML);
console.log(title.textContent);

console.log(name.value);
console.log(correo.value);
console.log(name.value.length);

// Queda pendiente para el siguiente apartado:
// --- element.classList.toggle('class'[,force]) Si tiene la clase se la quita y si no la tiene se la pone, se usa mucho en menu mobile ---
