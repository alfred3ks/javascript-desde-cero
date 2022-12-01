/*
Callbacks:
Hacemos una pequeña pausa sobre AJAX para hablar de los callback:
Para entender  promesas debemos saber primero que es un callback y sabiendo todo esto ya podremos usar el objeto fetch() que devuelve promesas o callback.

Esto es algo que se han dejado de usar a cambio de las promesas.

- Un callback es una funcion que se ejecuta a traves de una funcion.
- Los callbacks NO son asincronos. Se ejecutan por orden.
Bueno siendo siceros este no es el mejor ejemplo para ver lo delos callback hell

*/
// Simulamos una BD:
const users = [
  {
    id: 1,
    name: 'Alfredo'
  },
  {
    id: 2,
    name: 'Susana'
  },
  {
    id: 3,
    name: 'Christian'
  }
];

const emails = [
  {
    id: 1,
    email: 'alfredo@gmail.com'
  },
  {
    id: 2,
    email: 'susana@gmail.com'
  }
];

// Haremos una peticion donde pediremos los usuarios con sus email, vemos que el usuario id=3 no tiene email:

const getUser = (id, callback) => {
  const user = users.find((user) => {
    return user.id == id;
  })

  if (!user) {
    callback(`Not exist a user with id ${id}`);
  } else {
    callback(null, user);
  }

}

// Funcion que recupera el email del usuario:
const getEmail = (user, callback) => {
  const email = emails.find((email) => {
    return email.id == user.id;
  })
  if (!email) {
    callback(`${user.name} hasn't email`);
  } else {
    callback(null, {
      id: user.id,
      name: user.name,
      email: email.email
    });
  }
}

// Llamamos la funcion pasando el callback:
getUser(3, (err, user) => {
  if (err) {
    return console.log(err);
  } else {
    getEmail(user, (err, resp) => {
      if (err) {
        return console.log(err);
      } else {
        console.log(resp);
      }
    })
  }
});
