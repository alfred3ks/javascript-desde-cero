/*
JavaScript desde cero.
Video - 12: Bucle for().

- Este es un bucle determinado ya que hay que especificar cuantas vueltas dara durante su ejecucion.
- Su sintaxis se compone de 3 partes:
1- Iniciación de variable, que sera la que se usara como contador.
2- Hay que especificar el numero de vueltas que va a dar.
3- Incremento o decremento.

Sintaxis: se suele usar la letra i por convencion, viene de incremento, se tenemos bucles anidados seguiremos con la letra k.

  for(let i = 0; i<= 10; i++){
    code...
  }

- Durante su ejecución la variable i aumenta su valor en cada vuelta.

for(let i = 0, i<=10; i++){
  console.log(i);
}

1era vuelta: i=0, ¿i<=3?, 0-i++;
2da vuelta: i=1, ¿i<=3?, 1-i++;
3era vuelta: i=2, ¿i<=3?, 2-i++;
4ta vuelta: i=3, ¿i<=3?, 3-i++;
5ta vuelta: i=4, ¿i<=3?, fin del bucle;

*/
// Ciclo normal
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Ciclo a la inversa
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// Leemos un array:
let numbers = [100, 200, 300, 400, 500, 600];
for (let i = 0; i < numbers.length; i++) {
  // Imprime los indices
  console.log(i);
  // Imprime los valores
  console.log(numbers[i]);
}

// Ojo cuando vamos a leer un array length-1 al usar <=
for (let i = 0; i <= numbers.length - 1; i++) {
  console.log(`El valor de i vale ${i} y el valor de su posicion es ${numbers[i]}`);

}
