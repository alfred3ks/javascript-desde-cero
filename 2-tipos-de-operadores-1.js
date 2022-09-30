/*

Tipos de operadores de JS:
Javascript tiene varios tipos de operadores:
- Operadores de asignación
- Operadores de comparación
- Operadores aritméticos
- Operadores bit a bit
- Operadores lógicos
- Operadores de cadena de caracteres
- Operadores condicionales
- Operadores unarios
- Operadores relacionales
- A continuación vamos a ver unas tablas donde entraremos en detalle con estos operadores y realizaremos algunos ejercicios prácticos con los más comunes.

Operadores de Asignación:
- Asignacion: x = y,
- Asignacion de adicion: x += y -> x = x + y,
- Asignacion de sustraccion: x -= y -> x = x - y,
- Asignacion de multiplicacion: x *= y -> x = x * y,
- Asignacion de division: x /= y -> x = x / y,
- Asignacion de resto: x %= y -> x = x % y,
- Asignacion de exponenciacion: x **= y -> x = x ** y,
- Asignacion de desplazamiento a la izquierda: x <<= y -> x = x << y,
- Asignacion de desplazamiento a la derecha: x >>= y -> x = x >> y,
- Asignacion de desplazamiento a la derecha sin signo: x >>>= y -> x = x >>> y,
- Asignacion AND binaria: x &= y -> x = x & y,
- Asignacion XOR binaria: x ^= y -> x = x ^ y,
- Asignacion OR binaria: x |= y -> x = x | y

Operadores de comparación:
- Igualdad: (==) -> devuelve true si ambos operandos son iguales de valor.
- Desigualdad o diferente: (!=) -> Devuelve true si ambos operandos no son iguales.
- Estrictamente iguales: (===) -> Devuelve true si ambos operandos son iguales en valor y tipo.
- Estrictamente desiguales: (!==) -> Devuelve true si ambos operandos son diferentes en valor y tipo.
- Mayor que: (>) -> Devuelve true si el operando de la izquierda es mayor que le de la derecha.
- Mayor o igual que: (>=) -> Devuelve true si el operando de la izquierda es mayor o igual que el de la derecha.
- Menor que: (<) -> Devuelve true si el operando de la izquierda es menor que el de la derecha.
- Mayor o igual que: (<=) -> Devuelve true si el operando de la izquierda es menor o igual que el de la derecha.

Operadores aritmeticos:
- Resto o módulo: (%) -> operador binario correspondiente al módulo de una operacion.
- Incremento: (++) -> Operador unario. Incrementa en una unidad al operando.
Si se usa delante del operador: ++a: devuelve el valor del operando despues de añadirle 1.
Si se usa detras del operando: a++: devuelve el valor del operando antes de añadirle 1.
- Decremento: (--) -> Operador unario. Rest en una unidad al operando.
Si se usa delante del operador: --a: devuelve el valor del operando despues de restarle 1.
Si se usa detras del operando: a--: devuelve el valor del operando antes de restarle 1.
- Negacion unaria: (-) -> operacion unaria. Intenta convertir a numero al operado y devuleve su forma negativa.
- Unario positivo: (+) -> Operacion unaria. Intenta convertir a numero al operando.
- Exponenciacion: (**) -> Calcula la potencia de la base al valor del exponente. a ** b

Operadores lógicos:
- AND, lo que es lo mismo y: (&&) -> expre1 && expre2, devuelve true si ambas son true sino devuelve false.
- OR, lo que eslo mismo o: (||) -> expre1 || expre2, devuelve true si algunos de los operandos son true. Si ambos false devuelve false.
NOT, negacion: (!) -> devuelve false si el operando es true, y viceversa.

Operadores de cadena de caracteres:
Son operadores que se pueden utilizar con strings. Cadenas.
Se pueden usar:
Operadores de comparación (==, ===, !=,...)
Operador de concatenación (+)

let myString = "Hello" + "";
mystring += "World";

console.log(myString); -> "Hello World"

Operador unario:
- Un operador unario es aquel que sólo necesita un operando:
Existen los siguientes operadores unarios:
- delete
Permite eliminar un objeto, una propiedad de un objeto o un elemento de array
- typeof
Devuelve una cadena de caracteres que contiene el tipo del elemento que evalúe
- void
Especifica una expresión que se evaluará y no devolverá nada

delete:
- Permite eliminar una propiedad de un objeto, un valor de un array o un objeto
- Si finaliza con éxito establece el valor eliminado a undefined,
- El operador devuelve true si el objeto ha sido eliminado con éxito o false en caso de que no haya podido ser eliminado.

  delete myObjecto;
  delete myObject.property;
  delete myArray[index];

typeof:
Devuelve el tipo de la variable o constante a evaluar en forma de string

  let myString = "string";
  let myNumber = 1;
  let today = new Date();
  typeof myString; // "string"
  typeof myNumber; // "number"
  typeof today; // "object"
  typeof myUndefined; // "undefined"
  typeof true; // "boolean"
  typeof null; // "object"

void:
- Especifica una expresión que será evaluada y no devolverá nada
- Su uso principalmente se extiende a web

  void expresion
  void (expresion)

Operadores relacionales:
- Un operador relacional compara sus operandos y retorna un valor booleano. Existen dos:
in:
- Devuelve true si una propiedad se encuentra en el objeto

let myCar = {model: "Fiat Punto", year: 1999};
"model" in myCar; // true
let myString = new String("red");
"length" in myString; // true
"PI" in Math; // true
let colors = ["blue", "yellow", "red", "black","white"]:
0 in colors; // true

instanceof:
- Devuelve true si un objeto es de un tipo específico

let myArray = ["Keepcoding", 4, 6, 7, "Javascript"]
myArray instanceof Array // true
myArray instanceof String // false

*/

// Vamos alla: Operaciones matematicas. Los básicos:
let a = 5;
let b = 2;

console.log(a + b); // 7
console.log(a - b); // 3
console.log(a * b); // 10
console.log(a / b); // 2.5
console.log(a % b); // 1

let usuario = "Marcos";
console.log("Hola " + usuario); // Hola Marcos

// Operadores incremento/decremento:
let numero = 5;
console.log(numero); // 5
console.log(numero++); // 5
console.log(numero); // 6
console.log(++numero); // 7

console.log(numero); // 7
console.log(numero--); // 7
console.log(numero); // 6
console.log(--numero); // 5

// Operadores asignación:
let cantidad = 22;
console.log(cantidad += 3); // cantidad = cantidad + 3 = 25
console.log(cantidad -= 6); // cantidad = cantidad - 6 = 19
console.log(cantidad *= 4); // cantidad = cantidad * 4 = 76
console.log(cantidad %= 5); // cantidad = cantidad / 7 = 1
console.log(cantidad /= 7); // cantidad = cantidad / 7 = 0.14285...
