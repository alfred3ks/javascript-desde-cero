/*
JavaScript desde cero.
Video - 4: Objeto Math().

- Es un objeto que se utiliza para hacer operaciones matemticas mas complejas.
- Al ser un objeto tambien utiliza la nomenclatura del punto. Es un objeto predefinido del lenguaje.

El objeto Math() es un objeto estatico.
Tenemos que usar su nombre para utilizarlo. Osea no podemos crear una varaible math.

- Propiedades: ejemplos. constante E y constante Pi.
  - Math.E
  - Math.Pi

Metodos:
Tenemos la documentacion:
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

Math.abs(x)
Devuelve el valor absoluto de un número.

Math.acos(x)
Devuelve el arco coseno de un número.

Math.acosh(x)
Devuelve el arco coseno hiperbólico de un número.

Math.asin(x)
Devuelve el arco seno de un número.

Math.asinh(x)
Devuelve el arco seno hiperbólico de un número.

Math.atan(x)
Devuelve el arco tangente de un número.

Math.atanh(x)
Devuelve el arco tangente hiperbólico de un número.

Math.atan2(y, x)
Devuelve el arco tangente del cuociente de sus argumentos.

Math.cbrt(x)
Devuelve la raíz cúbica de un número.

Math.ceil(x)
Devuelve el entero más pequeño mayor o igual que un número.

Math.clz32(x) (en-US)
Devuelve el número de ceros iniciales de un entero de 32 bits.

Math.cos(x)
Devuelve el coseno de un número.

Math.cosh(x) (en-US)
Devuelve el coseno hiperbólico de un número.

Math.exp(x)
Devuelve Ex, donde x es el argumento, y E es la constante de Euler (2.718...), la base de los logaritmos naturales.

Math.expm1(x)
Devuelve ex - 1.

Math.floor(x)
Devuelve el mayor entero menor que o igual a un número.

Math.fround(x) (en-US)
Devuelve la representación flotante de precisión simple más cercana de un número.

Math.hypot([x[, y[, …]]])
Devuelve la raíz cuadrada de la suma de los cuadrados de sus argumentos.

Math.imul(x, y) (en-US)
Devuelve el resultado de una multiplicación de enteros de 32 bits.

Math.log(x)
Devuelve el logaritmo natural (log, también ln) de un número.

Math.log1p(x) (en-US)
Devuelve el logaritmo natural de x + 1 (loge, también ln) de un número.

Math.log10(x)
Devuelve el logaritmo en base 10 de x.

Math.log2(x)
Devuelve el logaritmo en base 2 de x.

Math.max([x[, y[, …]]])
Devuelve el mayor de cero o más números.

Math.min([x[, y[, …]]])
Devuelve el más pequeño de cero o más números.

Math.pow(x, y)
Las devoluciones de base a la potencia de exponente, que es, baseexponent.

Math.random()
Devuelve un número pseudo-aleatorio entre 0 y 1.

Math.round(x)
Devuelve el valor de un número redondeado al número entero más cercano.

Math.sign(x)
Devuelve el signo de la x, que indica si x es positivo, negativo o cero.

Math.sin(x)
Devuelve el seno de un número.

Math.sinh(x) (en-US)
Devuelve el seno hiperbólico de un número.

Math.sqrt(x)
Devuelve la raíz cuadrada positiva de un número.

Math.tan(x)
Devuelve la tangente de un número.

Math.tanh(x)
Devuelve la tangente hiperbólica de un número.

Math.toSource() Non-standard
Devuelve la cadena "Math".

Math.trunc(x)
Devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios.

Vamos a codear!!!

*/
// Vemos las propiedades:
console.log(Math.E);
console.log(Math.PI);

// Vemos los metodos:
let entero = -5;
let decimal = 1.4

// Math.abs(x): Devuelve el valor absoluto de x
console.log(Math.abs(entero)); // 5

// Math.ceil(x): Devuelve el entero mas grande mayor o igual que un numero
console.log(Math.ceil(decimal)); // 2

// Math.floor(x): Devuelve el entero mas pequeño menor o igual que un numero.
console.log(Math.floor(decimal)); // 1

// Math.pow(x, y): Devuelve la potencia de x elevada a y.
console.log(Math.pow(entero, 5)); // -3125

// Math.random(x): Genera un numero pseudoaleatorio entre 0 y 1.
// Math.round(x): Devuelve el valor de un numero redondeado al entero mas cercano.
let aleatorio = Math.random();
console.log(aleatorio);

// Generamos un numero aleatorio de 0 - 100:
console.log(Math.round(Math.random(aleatorio) * 100));

// Generamos un numero entre un minimo y un maximo:
let max = 1;
let min = 3;
console.log(Math.round(Math.random(aleatorio) * (max - min) + min)) * 100;

// Math.sign(x): Devuelve el signo de la x, que indica si x es positivo o negativo o cero, -> devuelve estos tres posibles valores. -1,1,0
let valor = -6;
console.log(Math.sign(valor));

// Math.sqrt(x): Devuelve la raíz cuadrada positiva de un número.
let n = 5;
console.log(Math.sqrt(n));