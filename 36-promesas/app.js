/*
Promesas:
Partimos de los datos del ejercicio anterior:
Una promesa basicamente es un objeto que dentro lleva dos callbacks.
Encadenamos .then() y el .catch() para capturar los errore:
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

// Vamos a crear l funcion para obtener usuarios con promesas.
const getUser = (id) => {
  const user = users.find((user) => {
    return user.id == id;
  })
  // Creamos una promesa: Construimos un objeto:
  const promise = new Promise((resolve, reject) => {
    if (!user) {
      reject(`Doesn't exist an user with id ${id}`);
    } else {
      resolve(user);
    }
  });
  return promise;
}

// Tenemos la funcion de obtener email con promesas:
const getEmail = (user) => {
  const email = emails.find((email) => {
    return email.id == user.id;
  })

  const promise = new Promise((resolve, reject) => {
    if (!email) {
      reject(`${user.name} hasn't email`);
    } else {
      resolve({
        id: user.id,
        name: user.name,
        email: email.email
      });
    }
  });
  return promise;
}

// Vemos lo que devuelve la promesa:
getUser(3)
  // Resolvemos la promesa, necesitamos el metodo .then():
  .then((user) => {
    getEmail(user)
      // Resolvemos la promesa, necesitamos el metodo .then():
      .then((res) => {
        console.log(res);
      })
      // Capturamos los errores, necesario este metodo .catch():
      .catch((err) => {
        console.log(err);
      })
  })
  // Capturamos los errores, necesario este metodo .catch():
  .catch((err) => {
    console.log(err);
  })

// Segunda opcion encadenado promesas:
getUser(2)
  // Resolvemos la promesa, necesitamos el metodo .then():
  .then(user => {
    return getEmail(user)
  })
  // Resolvemos la promesa, necesitamos el metodo .then():
  .then(res => {
    console.log(res);
  })
  // Capturamos los errores, necesario este metodo .catch():
  .catch((err) => {
    console.log(err);
  })

// Esta es la manera mas corta: Un solo catch manera los errores:
getUser(23)
  .then(user => getEmail(user))
  .then(res => console.log(res))
  .catch(err => console.log(err))
