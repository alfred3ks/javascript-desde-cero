/*
Ajax I - Objeto XMLHttpRequest
Protocolo HTTP:
https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto

Codigos de estado de respuesta:
https://developer.mozilla.org/es/docs/Web/HTTP/Status

Vamos a trabajar con esta API que nos va a suministrar el contenido:
JSONPlaceholder:

En esta API podemos hacer peticiones normales o peticiones AJAX.

https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/users

Tenemos un array con una coleccion de objetos separadas por comas, esos objetos son de tipo JSON. Vamos este es el aspecto normal de una API que devuelve JSON:

Lo vemos en el archivo: placeholder.json

El objeto que vamos a utilizar es:
  XMLHttpRequest(),

Metodos que vamos a utilizar:
  .open()
  recibe 2 parametros, uno el metodo de peticion que puede ser GET, POST, PUT, DELETE, y el otro la url a donde vamos a hacer la peticion. Esa  url puede ser donde este guardado nuestro archivo, bien sea en PHP u otro lenguaje.
*/

// Vamos a hacer la primera peticion AJAX, primer metodo:
// Obtenemos el boton:
const btn = document.getElementById('button');
const list = document.getElementById('list');

// Añadimos evento de escucha al boton:
btn.addEventListener('click', () => {

  const url = 'https://jsonplaceholder.typicode.com/users';

  let xhr;
  // asi comprobamos la compatibilidad de navegadores:
  if (window.XMLHttpRequest) {
    // Creamos el objeto que guarda la respuesta:
    xhr = new XMLHttpRequest();

    // Metodos:.open() Abrimos la peticion:
    xhr.open('GET', url);
    // Le decimos que hacer con los datos, escuchamos un evento para saber cuando llega la informacion, ya que es asincrona:
    xhr.addEventListener('load', (data) => {
      const response = data.target.response;
      console.log(typeof response); // string
      const responseJson = JSON.parse(response);
      console.log(typeof responseJson); // [] Object, Bien!!!!
      console.log(responseJson); // Obtenemos la informacion en [] de objetos:

      // Vamos a iterar: y los mostramos la informacion en el HTML:
      for (const userInfo of responseJson) {
        const listItem = document.createElement('LI');
        listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
        list.appendChild(listItem);
      }
    })
    xhr.send();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
})