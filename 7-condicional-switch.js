/*
JavaScript desde cero.
Video - 7: Condicional switch.

Se utiliza para elegir un camino de varios preestablecidos: Tenemos 2 tipos principales:

Sintaxis simple:

switch (condicion) {
  case n1:
    // codigo...
    break;
  case n2:
    // codigo...
    break;
  case n3:
    // codigo...
    break;
  default:
    // codigo...
    break;
}

Sintaxis multiple:

switch(condicion){
  case n1:
  case n2:
  case n3:
    // codigo...
    break;
  case n4:
  case n5:
    // codigo...
    break;
  default:
    // codigo...
}

A codear...
*/

let num = 5;

switch (num) {
  case 1:
    console.log(`Num tiene el valor de 1`);
    break;
  case 2:
    console.log(`Num tiene el valor de 2`);
    break;
  case 3:
    console.log(`Num tiene el valor de 3`);
    break;
  case 4:
    console.log(`Num tiene el valor de 4`);
    break;
  case 5:
    console.log(`Num tiene el valor de 5`);
    break;
  default:
    console.log(`Num no tiene ningun valor`);
}

// Sintaxis multiple:
let dato = 25;
switch (dato) {
  case 1:
  case 3:
  case 5:
  case 25:
    console.log(`${dato} es impar.`);
    break;
  case 2:
  case 4:
    console.log(`${dato} es par.`);
}
