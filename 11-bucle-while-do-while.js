/*
JavaScript desde cero.
Video - 11: Bucles while() / Do-while().

_ Un bucle se utiliza cuando queremos que un trozo de codigo se repita.
- Existen bucles determinados y indeterminados.
- Los bucles determinados se usan cuando se especifica el numero de veces que se va a repetir.
ej: imprime un numero del 1 al 10.

bucle for:

for (let index = 0; index < array.length; index++) {
  const element = array[index];

}

- Los bucles indeterminados se usan cuando no sabemos el numero de veces que se van a repetir.
ej: repetir mensaje de introducir una contraseña.

bucle while: mientras.

  while (condition) {
    code...
  }

- Es un bucle indeterminado ya que no sabemos cuantas vueltas dara durante su ejecución.OJO a los bucles infinitos. Mientras la condicion sea true el bucle se ejecutara, solo cuando sea false parara.

bucle Do-while():

  do {
    code...
  } while (condition);

- Es tambien un bucle indeterminado ya que no sabemos cuantas vueltas dara su ejecución, pero este bucle siempre se ejecutara al menos la primera vez si la condicion es false.

*/

// Bucle while:
let pass = '';

while (pass != "hola") {
  pass = prompt("Introduzca su contraseña");
}

console.log('fin del bucle');

// Bucle do-while(): Se ejecutara siempre si es pass== 'hola', pero ves q entra la primera vez
do {
  pass = prompt("Introduzca su contraseña");
} while (pass == "hola");
