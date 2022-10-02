/*
JavaScript desde cero.
Video 3: Los String:

Vamos a ver como trabajar con cadenas de texto, lo que se llaman los String, existen muchos metodos para trabajar con cadenas.

Metodos y propiedades de los string:

- Metodo:
Es todo aquello que la cadena puede hacer, Ejemplo: convertir a mayusculas.

-Propiedades:
Son las caracteristicas que la cadena tiene por ser una cadena, por ejemplo: su longitud.

Osea que para trabajar con las cadenas tendremos algunos metodos y otras propiedades.

Los metodos y las propiedades se usan usando la nomenclatura del punto.

  cadena.metodo()

  cadena.propiedad

Aqui vamos a nombrar algunos, empezamos por las propiedades, que son 3 pero solo veremos 1 porque el otros 2 son mas abstractos.

Propiedades:
.length -> devuelve la longitud de la cadena.
Los espacios cuentan, ojo con eso.

Metodos:
Todos los metodos devuelven una nueva cadena, la cadena original no sera modificada.

.toUpperCase() -> devuelve una cadena en mayusculas.

.toLowerCase() -> devuelve una cadena en minisculas, muy util al validar formularios.

.indexOf(string) -> devuelve la posicion en la que se encuentra el string que le pasamos por parametro, si no lo encuentra devuelve -1. Y si lo encuentra nos devuelve la posicion de la primera letra del string que le pasamos.

.replace(valor a buscar, valor nuevo) -> reemplaza el fragmento de la cadena que le digamos y pone el valor nuevo. Recibe dos parametros, el primero el valor en buscar y el segundo el valor a reemplazar.

.substring(inicio, [final]) -> extrae los caracteres de una cadena desde el inicio hasta el final, (el final no se incluye), osea recibe por parametros el indice inicial y el final, (2,5) -> 0 1 2 3 4 5 se incluye desde el 2 hasta el 4. Para el caso que no incluyamos un final este estraera todo hasta el final. Osea el segundo parametro es opcional.

.slice(inicio, [final]) -> Igual que substring pero admite valores negativos, si ponemos valores negativos empezara desde atras.

.trim() -> Elimina los espacios al inicio o al final de una cadena. Tambien muy usado en los formularios.

Estos 4 metodos han venido con la especificacion de ES6:
.startsWith(valor[,inicio]) -> sirve para saber si la cadena empieza con ese valor, devuelve true o false. el segundo parametro es opcional y se le dice donde comienza la cadena.

.endWith(valor [,logitud]) -> Sirve para saber si la cadena acaba con ese valor. El segundo parametro es opcional y es la longitud osea que considere los primero numeros del valor que le pasamos.

.includes(valor [,inicio]) -> Igual que indexOf pero devuelve true o false

.repeat(valor) -> repite el string el numero de veces que le indiquemos.

Los templates string: `` comillas invertidas, para concatenar contenido pero inyectando las variables.

*/

// Hora del código:
let cadena = "Hola Mundo";

// Propiedades:
console.log(cadena.length); // 10

// Metodos:
// toUpperCase():
console.log('---');
console.log(cadena.toUpperCase()); // HOLA MUNDO
console.log(cadena); // Hola Mundo
let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus); // HOLA MUNDO

// toLowerCase();
console.log('---');
console.log(cadena.toLowerCase()); // hola mundo
console.log(cadena); // Hola Mundo
let cadenaMin = cadena.toLowerCase();
console.log(cadenaMin); // hola mundo

// indexOf(), solo devuelve cuando encuentra la primera coincidencia:
console.log('---');
console.log(cadena.indexOf('c')); // -1
console.log(cadena.indexOf('H')); // 0
console.log(cadena.indexOf('o')); // 1
console.log(cadena.indexOf('l')); // 2
console.log(cadena.indexOf('a')); // 3

// replace()
console.log('---');
console.log(cadena.replace('Hola', 'HOLA')); // HOLA Mundo
console.log(cadena.replace('Mundo', 'Devs')); // Hola Devs

// substring() H:0, o:1, l;2, a:3 espacio:4, M:5
console.log('---');
console.log(cadena.substring(2, 5)); // vemos como devuelve -> la
console.log(cadena.substring(2)); // vemos como devuelve -> la Mundo

// slice()
console.log('---');
console.log(cadena.slice(2)); // vemos como devuelve -> la Mundo
console.log(cadena.slice(-3)); // vemos como devuelve -> ndo cuenta de atras
console.log(cadena.slice(-15)); // vemos como devuelve -> Hola Mundo cuenta de atras
console.log(cadena.slice(0, -6)); // vemos como devuelve -> Hola cuenta de atras osea va desde el -6 hasta 0, empieza a contar desde 0 y los ultimos 6 no los mira.

// trim()
console.log('---');
let msj = "    Yo tengo espacios al incio y al final    ";
console.log(msj.length);
let msjNew = msj.trim();
console.log(msjNew.length);

// startsWith()
console.log('---');
let content = "Nada esta muerto hasta que lo ponen bajo tierra";
console.log(content.startsWith('r', 13)); // true
console.log(content.startsWith('N')); // true
console.log(content.startsWith('m', 10)); // true
console.log(content.startsWith('p', 10)); // false

// endsWith()
console.log('---');
console.log(content.endsWith('a')); // true
console.log(content.endsWith('a', 9)); // true
console.log(content.endsWith('e', 7)); // false
console.log(content.endsWith('m', 10)); // false
console.log(content.endsWith('h', 19)); // false
console.log(content.endsWith('tierra')); // true

// includes()
console.log('---');
let mensaje = "Laika la perrita espacial";
console.log(mensaje.includes('k')); // true
console.log(mensaje.includes('r', 14)); // false

// repeat()
console.log('---');
console.log(mensaje.repeat(2));
console.log('z'.repeat(15));

// Template String
console.log('---');
let nombre = 'Laika';
let apellido = 'Sánchez';
let edad = 1;

console.log("Hola me llamo " + nombre + " y tengo " + edad + " año de edad.");
console.log(`Hola me llamo ${nombre} y tengo ${edad} año de edad.`);
console.log(`Hola me llamo ${nombre} y el año que viene tendre ${edad + 1} años de edad.`);
