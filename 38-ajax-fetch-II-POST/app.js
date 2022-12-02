/*

Vamos a ver como hacer peticiones POST con fetch().
Las peticiones POST sirven para enviar datos, bien sea insertar datos en un BD , etc.
Para hacer peticiones POST fetch() admite un segundo parametro, un objeto con varios parametros:

Sintaxis basica:
fetch(url, {
  method: 'POST',
  body: Los datos que enviamos. Si es un objeto hay que convertirlo en JSON.stringify(data),
  header:{
    cabeceras de informacion sobre lo que estamos enviando:
    https://developer.mozilla.org/es/docs/Web/HTTP/Headers
  }
})

// Vemos la documentacion d ela API:Para POST:
https://jsonplaceholder.typicode.com/guide/
*/

// Obtenemos los elementos de DOM:
const btn = document.getElementById('button');
const list = document.getElementById('list');

// Comprobamos si el navegador soporta fetch():
if (window.fetch != undefined) {
  console.log('FETCH OK.');
} else {
  console.log('FETCH NOT WORKS.');
}

let url = 'https://jsonplaceholder.typicode.com/posts';

// Colocamos un evento al boton:
btn.addEventListener('click', () => {

  // Datos que vamos a enviar:
  const newPost = {
    title: 'A new Post',
    body: 'Este es el cuerpo de la peticion POST',
    userId: 1
  }

  // Hacemos nuestra peticion POST con fetch:
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json'
    } // vemos los datos que enviamos con las respuesta del servidor:
  }).then((resp) => {
    resp.json()
      .then((data) => {
        console.log(data);
      })
  })
})