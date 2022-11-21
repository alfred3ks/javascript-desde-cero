/*
Ahora podemos ver el en ejemplo del gallery.html como podemos ver la delegacion de eventos. Vamos a ver en cual boton hacemos click. Pondremos la escucha al padre de cada boton y localizar en cual d elos hijos se hace click.

Como vemos aqui el evento se propaga del padre a los hijos, es lo mismo como poner un evento a cada boton.

Esto tambien se puede aplicar en un formulario, el cual posee muchos campos. Añadir un evento a cada campo es mucho gasto de recursos, de esta forma nos ahorramos recursos y mucho codigo.
*/

const gallery = document.getElementById('gallery');

gallery.addEventListener('click', (e) => {
  console.log(e.target.textContent);
  e.target.classList.add('color');
})