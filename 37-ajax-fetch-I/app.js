/*
AJAX -fetch API:

Reemplazo moderno para el objeto XMLHttpRequest().

Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas.
Tambien provee un metodo global fetch() que proporciona una forma facil y logica de obtener recursos de forma asincrona por la red.
Esta basado en promesas, por lo tanto tiene un response y reject internos:
  - response tiene varios metodos:
  arrayBuffer(): Archivos binarios en bruto(mp3, pdf, jpg, etc), se utiliza cuando se necesita manipular el contenido del archivo.
  blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente.
  clone(): crea un clone de un objeto de respuesta, identico en todos los sentidos, pero almacenado en una varaible diferente.
  formData(): Se utiliza para leer los objetos formData.
  json(): Convierte los archivos json en un objeto de JavaScript.
  text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8.
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

// Conectamos a la API:
const url = 'https://jsonplaceholder.typicode.com/users';

// Agregamos un evento al boton:
btn.addEventListener('click', () => {
  // FETCH por defecto trabaja con el metodo GET:
  fetch(url)
    // Con el metodo then() obtenemos una respuesta que pasamos a JSON:
    .then((resp) => {
      resp.json()
        // Con este metodo then() obtenemos la data de ese JSON
        .then((data) => {
          console.log(data);

          // Creamos un fragmento: Para meter la informacion al DOM:
          const fragment = document.createDocumentFragment();
          // Vamos a iterar: y los mostramos la informacion en el HTML:
          for (const userInfo of data) {
            const listItem = document.createElement('LI');
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
            fragment.appendChild(listItem);
          }
          // Metemos todo de golpe: Para evitar perdida de rendimeinto del DOM:
          list.appendChild(fragment);
        })
    })
})
