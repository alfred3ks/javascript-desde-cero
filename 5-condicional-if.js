/*
JavaScript desde cero.
Video - 5: Condicional if.

Flujo de un programa:
El flujo de un programa siempre será de arriba hacia abajo.
Un ejemplo:
let num = 2;
console.log(num);
num= 5;
console.log(num);
let saludo = 'Hola Mundo';
console.log(saludo);

Estas instrucciones se ejecutan de arriba para abajo y una detras de otra.
Existen estructuras que control de flujo que nos permiten modificar este comportamiento.

Para estos casos en concreto tenemos los condiconales:

Estructuras de control de flujo:
Condicionales:
- Simples,
- Compuestos,
- Multiples.

Bucles:
- Determinados,
- Indeterminados.

La sintaxis es la siguiente:

Simples:
    if(condicion){
      code...
      code...
    }

Si tenemos una sola linea de codigo poemos omitir los parentesis:
    if(condicion) code...

Compuesta:
    if(condicion){
      code...
    } else {
      code...
    }

    if(condicion) code...
    else code...

A codear...
*/
// Simples:
let num1 = 5;
if (num1 > 0) {
  console.log(`${num1} es mayor que cero.`);
}

// Compuesta:
let num2 = -0;
if (num2 > 0) {
  console.log(`${num2} es mayor que cero.`);
} else {
  console.log(`${num2} es menor que cero.`);
}

// Condicionales multiples:
let num3 = -0;
if (num3 > 0) {
  console.log(`${num3} es mayor que cero.`);
} else if (num3 < 0) {
  console.log(`${num3} es menor que cero.`);
} else {
  console.log(`${num3} es igual cero.`);
}

// Podemos comprobar multiples cosas en la condicion: Operadores logicos:
// && -> AND, se deben cumplir todas las condiciones:
let num4 = 1;
let num5 = 5;
if (num4 > 0 && num5 > 0) console.log(`A: ${num4} y ${num5} son mayores que cero`);

// Podemos anidar condiconales:
if (num4 > 0) {
  if (num5 > 0) {
    console.log(`B:${num4} y ${num5} son mayores que cero`);
  } else if (num5 < 0) {
    console.log(`C:${num4} es mayor que cero y ${num5} es menor que cero.`);
  } else {
    console.log(`D:${num4} es mayor que cero y ${num5} es igual a cero.`);
  }
} else if (num4 < 0) {
  if (num5 > 0) {
    console.log(`B:${num4} no es mayor que cero y ${num5} es mayor que cero`);
  } else if (num5 < 0) {
    console.log(`C:${num4} y ${num5} son menores que cero.`);
  } else {
    console.log(`D:${num4} es menor que cero y ${num5} es igual a cero.`);
  }
}

// || -> OR Solo se debe cumplir una condicion para entrar.
if (num4 > 0 || num5 > 0) console.log(`G:${num4} o ${num5} son mayores que cero`);

// Otro ejemplo:
let nombre = "Alfred";
let edad = 19;
let isDev = false;

if (edad >= 18 && isDev) {
  console.log(`Hola ${nombre}, bienvenido al portal de Desarrollo en JavaScript`);
} else if (edad >= 18 && !isDev) {
  console.log(`Hola ${nombre}, bienvenido... Cuando seas dev podras ver cosas maravillosas... `);
} else {
  console.log(`${nombre} Eres menor, aun no puedes acceder...`);
}

// Otro ejemplo:
let palabra = "Hol";
let numeroLetras = 4;

if (palabra.length > numeroLetras) {
  console.log(`El >String -> ${palabra}: tiene mas de ${numeroLetras} letras.`);
} else if (palabra.length >= numeroLetras) {
  console.log(`El String -> ${palabra}: tiene ${numeroLetras} letras.`);
} else if (palabra.length < numeroLetras) {
  console.log(`El String -> ${palabra}: tiene menos de ${numeroLetras} letras.`);
}