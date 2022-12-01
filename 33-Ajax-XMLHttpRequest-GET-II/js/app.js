/*
AJAX - II
Vamos a trabajar con ajax para conectarnos a una base de datos y poder consumir esa informacion:

Abrimos MySQL e instalamos la base de datos: marvel.sql
Tenemos un archivo marvel.php que es q este el que haremos la peticion de tipo GET.

Para arrancar la aplicacion lo debemos hacer desde XAMPP OJO con eso.
http://localhost:88/javascript/ajax-js/33-ajax-XMLHttpRequest-GET-II/

Lo que haremos en hacer peticion a la BD y mostrar en el select los nombre y cada vez que seleccionemos un super heroe al hacer get data se mostrara su informacion en la tabla.

*/
// Obtenemos los id ddel HTML
const form = document.getElementById('form');
const select = document.getElementById('select');
const table = document.getElementById('table');

// Agregamos el evento al hacer submit del formulario:
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Vemos el indice del option:
  console.log(select.selectedIndex);

  // Asi obtenemos el value del option:
  console.log(select.children[select.selectedIndex].value);

  let id = select.children[select.selectedIndex].value;
  getDataDB(id);
})

// Funcion para pedir data a la BD:
const getDataDB = (id) => {
  // Comprobacion de compatibilidad de navegador:
  let xhr;
  if (window.XMLHttpRequest) {
    // Creamos el objeto que guarda la respuesta:
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  // La primera vez que carga la pagina:
  if (id == undefined) {
    // Hacemos la peticion al archivo php:
    xhr.open('GET', './php/marvel.php');

    // Con el evento load traemos la informacion de BD:
    xhr.addEventListener('load', (data) => {
      const dataJSON = JSON.parse(data.target.response);
      // Obtenemos los datos de la BD:
      console.log(dataJSON);
      // Creamos un fragmento para meter la informacion:
      const fragment = document.createDocumentFragment();
      // Iteramos para mostrar los datos:
      for (const heroes of dataJSON) {
        // Creamos nuestra elemento option:
        const option = document.createElement('OPTION');
        // Asignamos el atributo del ID de BD
        option.setAttribute('value', heroes.ID);
        // Metemos el contenido a nuestro option
        option.textContent = heroes.Name;

        // Ahora metemos todo en el fragmento:
        fragment.appendChild(option);
      }
      // Metemos en el select los nombres:
      select.appendChild(fragment);
    })

  } else {
    // Hacemos la peticion con el id que sacamos del select:
    xhr.open('GET', `./php/marvel.php?id=${id}`);

    xhr.addEventListener('load', (data) => {
      const dataJSON = JSON.parse(data.target.response);
      // Obtenemos los datos de la BD:
      console.log(dataJSON);
      // Creamos un fragmento para meter la informacion:
      const fragment = document.createDocumentFragment();
      // Iteramos para mostrar los datos:
      for (const heroe of dataJSON) {
        // Creamos los elementos:
        const row = document.createElement('TR');
        const dataName = document.createElement('TD');
        const dataAlignment = document.createElement('TD');
        const dataHometown = document.createElement('TD');
        const dataGender = document.createElement('TD');
        const dataFlighting = document.createElement('TD');

        // Rellenamos los elementos:
        dataName.textContent = heroe.Name;
        dataAlignment.textContent = heroe.Alignment;
        dataHometown.textContent = heroe.Hometown;
        dataGender.textContent = heroe.Gender;
        dataFlighting.textContent = heroe.Fighting_Skills;

        // Agregamos a las filas los datos:
        row.append(dataName);
        row.append(dataAlignment);
        row.append(dataHometown);
        row.append(dataGender);
        row.append(dataFlighting);

        // Ahora metemos todo en el fragmento:
        fragment.append(row);
      }

      // Limpiamos la tabla para que solo muestre un heroe por cada peticion:
      if (table.children[1]) {
        table.removeChild(table.children[1]);
      }
      // Metemos en el row los nombres: Si deseamos que se apilen uno debajo del otro eliminar el if de arriba:
      table.append(fragment);
    })
  }
  xhr.send();
}

// llamamos la funcion al cargar y id = undefined:
getDataDB();