/*
Eventos II.

Vamos a hablar del evento.
El 99% que trabajemos con eventos vamos a trabajar con el objeto evento.

Este objeto consiste en darnos informacion sobre el evento que se esta ejecutando.

Vamos a hacer un evento sobre el formulario y el input.

El objeto evento vive siempre cuando exista un evento. -> e

Cuando vemos todo lo que nos muestra el evento (e) hay muchos metodos y funciones.

Uno muy usado es la funcion .target, esto hace refeencia al punto donde se origina el evento.
Esta funcion es la que mas informacion tiene.
Podemos obtener cualquier informacion referente al evento.

Ahora vamos a ver como prevenir el envio del formulario, usaremos el metodo preventDefault(), lo que hace es decirle a (e) que no ejecute su funcionamiento normal del formulario que es ser enviado.

OJO preventDefault() lo que hace es cambiar el comportamiento por defecto a cualquier elemento HTML. Lo vemos con en el enlace.

Pero su uso mas generalizado es en un formulario.

Ahora una cosa que debemos saber que los eventos los podemos escuchar o los podemos forzar.
Podemos forzar disparar eventos.

Para el caso del formulario:
form.submit();
form.resect()


*/

const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');
const enlace = document.getElementById('enlace');

// Enviamos el evento como parametro al hacer el evento keyup
input.addEventListener('keyup', (e) => {
  // Vemos que tecla se ha pulsado, muy util con video juegos
  // console.log(e.key);
  // console.log(e);
  // asi accedemos a la informacion de cada evento
  // console.log(e.explicitOriginalTarget.attributes[1].nodeValue);
})

// Vamos a ver el boton
button.addEventListener('click', (e) => {
  // Vemos el evento e.target:
  console.log(e.target);
  console.log(e.target.type);

})

// Prevenir el envio del formulario:
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Formulario enviado.');
})

enlace.addEventListener('click', (e) => {
  e.preventDefault();
  // Aqui tambien forzamos el evento del boton
  button.click();
})

// Vemos como agregamos un setTimeout y forzamos el envio del formulario
button.addEventListener('click', () => {
  input.value = 'Has hecho click';
  setTimeout(() => {
    form.submit();
  }, 2000)
})