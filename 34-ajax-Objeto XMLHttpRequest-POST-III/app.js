/*
Vamos a ver lo ultimo del objeto XMLHttpRequest(): Como usarlo para hacer envio de datos a traves de POST:

Vemos en el navegador en la pestaña red como se envian los datos ennel cuerpo de la peticion.

MMMM no es muy claro esto...

*/

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendData(form);
})

const sendData = (data) => {
  // Comprobacion de compatibilidad de navegador:
  let xhr;
  if (window.XMLHttpRequest) {
    // Creamos el objeto que guarda la respuesta:
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  console.log(data);

  xhr.open('POST', './php/data.php');
  // Vamos a ver el objeto FormData() que recibe los datos del formaulario;
  const formData = new FormData(data);

  xhr.send(formData);

}
