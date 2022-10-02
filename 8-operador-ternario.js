/*
JavaScript desde cero.
Video - 8: Operador ternario.

- Se utiliza cuando una condicion va ser true o false, igual que un if().
- Su ejecución puede tener una o varias sentencias, en este caso iran separadas por comas y entre parentesis.

La sinaxis:

Sencilla
  (condición) ? true : false

Varias sentencias:
  (condición) ?
  (primera sentencia,
  segunda sentencia)
  :
  (primera sentencia,
  segunda sentencia)

*/

// Veremos si un número es par o impar:
let num = 209874;
num % 2 == 0 ? console.log(`${num} es Par`) : console.log(`${num} es Impar`);


// Caso de varais sentencias:
num % 2 == 0 ?
  (
    console.log(`El numero es Par`),
    console.log(`Y su valor es ${num}`)
  )
  :
  console.log(`${num} es Impar`);