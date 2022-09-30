/*

Video 1:
Sintaxis - variables, constantes, sus ambitos, tipos de datos:

Sintaxis:
- Es case sensitive:
Numero no es igual que numero, como vemos significan los mismo pero uno en mayuscula y el otro en minuscula. Osea distingue mayusculas de minusculas, el programa las considera dos variables distintas.

- Es de tipado debil y dinamico:
Las variables son del tipo de dato que almacenan. Y estas puedn variar, una variable puede ser de un tipo en una parte de programa y cambiar a otro tipo en otra parte.

let numero = 12;
numero = "Doce";

No especificamos el tipo como en otros lenguajes de programacion y vemos que es dinamico porque puede cambiar su valor.

- Las sentencias finalizan con punto y coma, aunque no es obligatorio pero es recomendable.

Variables y Contantes:
Variables:
Una variable es un espacio que reservamos en memoria para almacenar un dato que podria cambiar durante la ejecucion de nuestro programa.

La palabra reservada para declarar variables es "let", ya no es recomendable declarar variables con "var".

let nombre = "Alfred";
let edad = 22;
let isDev = true;

Las variables se pueden declarar, inicializar y modificar:

Declaramos: vacia sin valor, pero reserva ya el espacio.
let ciudad;

Inicializamos: Damos un valor.
ciudad = "Barcelona";

Modificamos: Cambiamos su valor.
ciudad = "Madrid";

Tambien podemos declara e inicial a mismo tiempo:

let ciudad = "Paris";

Constantes: Llegan con ESMAScript 6
Una constante es un espacio que reservamos en memoria para almacenar un dato que NO cambiara durante la ejecucion de nuesto programa.

La palabra reservada para declarar constantes es "const".

const dni = 123;

Las constantes solo admiten la declaracion e inicializacion en la misma sentencia. Son una constante.

const PI = 3.1417;

El scope o ambito es la zona donde existe nuestra variable o constante.

Tipos de datos en JavaScript:
Primitivos: son los que el lenguaje ya creados por defecto.

- numeros, number -> let numero = 22;
Para Javascript solo exite el numero, no reales ni de coma flotante.
- cadenas, String -> let saludo = "Hola";
Podemos usar comillas simples o dobles.
- Boleanos, Boolean -> let isDev = true; solo admiten 2 valores, true o false.
- Undefined,
- Null,
- Symbol, llego en ECMAScript 6.

Ahora vamos a ver el codigo:

*/
// Variables: numeros:
let numero = 22;
numero = 23;
console.log(numero);

// Variables: String:
let palabra = "Hola Mundo!!!";
console.log(palabra);

// Variables: Boolean:
let respuesta = true;
console.log(respuesta);
respuesta = false;
console.log(respuesta);

// Constantes: Por convencion las declaramos en mayusculas, pero no es obligario:
const PI = 3.14;
console.log(PI);