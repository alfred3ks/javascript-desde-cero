/*
Callbacks:
Hacemos una pequeña pausa sobre AJAX para hablar de los callback:
Para entender  promesas debemos saber primero que es un callback y sabiendo todo esto ya podremos usar el objeto fetch() que devuelve promesas o callback.

Esto es algo que se han dejado de usar a cambio de las promesas.

- Un callback es una funcion que se ejecuta a traves de una funcion.
- Los callbacks NO son asincronos. Se ejecutan por orden.

*/

const getUser = (id, callback) => {
  const user = {
    name: 'Luis',
    id: id
  }

  if (id == 2) {
    callback('User not exist');
  } else {
    callback(null, user);
  }
}

// Llamamos la funcion pasandole por callback:
getUser(1, (err, user) => {
  if (err) {
    return console.log(err);
  }
  console.log(`User name is: ${user.name}`);

});