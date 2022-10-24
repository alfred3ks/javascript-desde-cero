/*

Eventos I - Raton y teclado:

Un evento es cualquier cosa que sucede en nuestro documento.
- El contenido se ha leido,
- El contenido se ha cargado,
- El usuario mueva el raton,
- El usuario pulsa una tecla,
- La ventana se ha cerrado,
- Un largo etc.

https://developer.mozilla.org/es/docs/Web/Events Referencia de eventos JS

Eventos de raton: Vemos estos pero hay mas:
  - click: Cuanado pulsamos el boton izquierdo del raton.
  - dblclick: Cuando pulsamos dos veces seguidas el boton izquierdo del raton.
  - mouseenter: Cunado entramos en la zona que tiene el evento.
  - mouseleave: Cuando salimos de la zona que tiene el evento,
  - mousedown: Cuando pulsamos el boton izquierdo del raton.
  - mouseup: Cuando soltamos el boton izquierdo del raton.
  - mousemove: Cuando movemos el raton.

Eventos de teclado: Vemos estos pero hay mas:
  - keydown: Cuando pulsamos una tecla.
  - keyup: Cuando soltamos una tecla.
  - keypress: Cuando pulsamos una tecla y no la soltamos.

*/

const btn = document.getElementById('btn');
const box = document.getElementById('box');
const input = document.getElementById('input');

// Vamos a ver los eventos tanto del raton como del teclado:
// Evento click:
btn.addEventListener('click', () => {
  // console.log('CLICK');
})

// Doble click:
btn.addEventListener('dblclick', () => {
  console.log('DOBLE CLICK');
})

// mouseenter/mouseleave: Entrar y salir.
box.addEventListener('mouseenter', () => {
  // box.classList.add('secondary');
  box.classList.replace('secondary', 'primary');

})

box.addEventListener('mouseleave', () => {
  // box.classList.remove('secondary');
  // box.classList.add('primary');
  box.classList.replace('primary', 'secondary');
})

// mousedown/mouseup: Muy usado con la API de drack and drop de arrastrar elementos.
box.addEventListener('mousedown', () => {
  console.log('Has pulsado en la caja');
})
box.addEventListener('mouseup', () => {
  console.log('Has soltado el boton izquierdo en la caja');
})

// mousemove: Cuando se mueve el raton:
box.addEventListener('mousemove', () => {
  console.log('Raton moviendose por la caja');
})

//keydown:
input.addEventListener('keydown', (e) => {
  console.log('Tecla');
  console.log(e);
  console.log(e.target.value);
})

//keydown/keypress:
input.addEventListener('keyup', () => {
  console.log('tecla soltada');
})
input.addEventListener('keypress', () => {
  console.log('tecla pulsada y soltada');
})
