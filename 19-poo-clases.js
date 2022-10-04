/*
JavaScript desde cero.
Video - 19: POO las clases en JavaScript.

- Es un paradigma de la programación que actualiza la forma de programar anterior.
- Paradigmas existen muchas, la estructurada, etc.
Algunos de los conceptos fundamentales son:
  - Clase,
  - Herencia,
  - Objeto,
  - Método,
  - Evento,
  - etc.

Hasta ahora si queriamos construir dos objetos de la clase persona lo haciamos asi:

  const persona = {
    nombre: "Juan",
    apellido: "Garcia",
    edad 32
  }
  const persona2 = {
    nombre: "Luisa",
    apellido: "Perez",
    edad 27
  }

Estos dos objetos tiene la misma estructura, cuando esto sucede en programacion y si el lenguaje es orientado a objetos se suele hacer es utilizar una clase, osea una plantilla o molde con la cual podremos generar objetos de ese tipo. En JS hasta ES6 no teniamos clases.

La manera de crear objetos era con los prototipos.

Con la llegada de ES6 se usa azucar sintactic, por detras s esiguen usando los prototipos pero podremos usar las sintaxis de las clases.

Cuando construimos un objeto se le denomina instanciar un objeto.
Las clase necesitan una funcion constructora. Se tienen que llamar constructor y se ejecuta cada vez que creamos un objeto.

Es una funcion que se ejecuta al crearse el objeto.

  class Persona {
    contructor (nombre, apellido, edad){
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad
    }

  }

- Por standares la clase se llama con mayusculas.
- La funcion constructora se llama constructor y le pasamos las propiedades de inicio del objeto.
- Para asignar esos valores a los objetos usamos la palabra reservada this.
nombre_del_objeto = nombre_del_parametro.

- Podemos asignar propiedades que no vengan por los parametros, pero siempre utilizado this para referenciarlos.

Los objetos pueden tener funciones asociadas, en este caso se les denomina MÉTODOS.

  class Persona {
    contructor (nombre, apellido, edad){
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad
    }

    saludar(){
      return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
    }

  }

- Para crear los objetos se hace con la palabra reservada new y el nombre de la clase que queramos utilizar.

  const juan = new Persona("Juan", "Garcia", 32);
  const luisa = new Persona("Luisa", "Perez", 27);

- Una vez que esta INSTANCIADO el objeto podremos acceder a sus propiedades y metodos utilizando la nomenclatura del punti o buscando su propiedad en el objeto.

  juan.nombre;
  juan.apellidos;
  juan.edad;
  juan.saludar();

  juan['nombre'];
  juan['apellido'];
  juan['edad'];
  juan['saludar']();

*/

// Tenemos un ejemplo:

class Persona {
  // Funcion constructor:
  constructor(nombre, apellido, edad) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    // Vemos una propiedad que no viene por parametro:
    this.datos = `Me llamo ${nombre}  ${apellido} y tengo ${edad} años.`;
  }
  // Metodos:
  saludar() {
    return `Hola me llamo ${this.nombre} y tengo ${this.edad} años.`;
  }
}

// Creamos objetos:
const juan = new Persona('Juan', 'Garcia', 25);
const carolina = new Persona('Carolina', 'Garcia', 29);

// Asi vemos las propiedades y metodos del objeto:
console.log(juan);
/*
Persona {
  nombre: 'Juan',
  apellido: 'Garcia',
  edad: 25,
  datos: 'Me llamo Juan  Garcia y tengo 25 años.'
}
*/
console.log(carolina);
/*
Persona {
  nombre: 'Carolina',
  apellido: 'Garcia',
  edad: 29,
  datos: 'Me llamo Carolina  Garcia y tengo 29 años.'
}
*/

console.log(juan.nombre);
console.log(juan.datos);
console.log(juan.saludar());
/*
Juan
Me llamo Juan  Garcia y tengo 25 años.
Hola me llamo Juan y tengo 25 años.
*/

console.log(carolina.nombre);
console.log(carolina.datos);
console.log(carolina.saludar());
/*
Carolina
Me llamo Carolina  Garcia y tengo 29 años.
Hola me llamo Carolina y tengo 29 años.
*/