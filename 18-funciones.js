
/*
JavaScript desde cero.
Video - 18: Las funciones en JavaScript.

- Las funciones son fragmentos de codigo que escribimos para ejecutar una tarea y no volver a escribir el mismo codigo mas d euna vez.
- Nos ayudan a modularizar el cdigo.
- Las funciones deben realizar una sola tarea, una sola bien hecha.

La sintaxis:

Funcion como declaracion
  function nombreFuncion() {
    code...
  }

  Funciones flechas ES6: funcion como expresion.
  const nombreFuncion = ()=>{
    code...
  }

- Las funciones pueden recibir parametros. Los parametros son valores que usara la funcion para ejecutarse.

  function nombreFuncion(parametro1, parametro2) {
    code...
  }

  const nombreFuncion = (parametro1, parametro2)=>{
    code...
  }

- Las funciones pueden devolver valores. Dependera lo que necesitemos. Si necesitamos devolver valores usaremos la palabra reservada return.

  function nombreFuncion(parametro1, parametro2) {
    return parametro1 + parametro2;
  }

  const nombreFuncion = (parametro1, parametro2)=> parametro1 + parametro2;

Las funciones flechas si el return es de una sola linea se puede obviar las llaves y la instruccion return.

*/

// Funcion como expresion:
function saludar() {
  console.log('Hola');
}
saludar();

/**
 *
 * @param {*} user
 * @returns
 */
const saludarUser = (user) => console.log(`Hola ${user}`);
saludarUser('Albert');
saludarUser('Marcos');
saludarUser('Laika');

/**
 *
 * Esta funcion realiza la resta de dos números
 * @param {Number}  número Debemos introducir un numero
 * @param {Number}  número Debemos introducir un numero
 * @returns {Number}  numero Retorna un numero
 */
const resta = (num1, num2) => {
  if (num1 > num2) {
    return num1 - num2;
  }
}

const suma = (num1, num2) => {
  if (num1 == 2) {
    return num1 + num2;
  }
  // Solo se ejecutara este si el primer return no se ejecuta.
  return num1;
}

console.log(resta(3, 5));
console.log(resta(9, 6));

console.log(suma(2, 6));
console.log(suma(6, 14));