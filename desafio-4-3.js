// 8. Crea una variable "numero" y solicita un valor con prompt.
//    Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = prompt('Escribe un numero:');

if (numero > 0) {
    console.log(`El numero es positivo: ${numero}.`);
} else if (numero < 0) {
    console.log(`El numero es negativo: ${numero}.`);
} else {
    console.log(`El numero es cero: ${numero}.`);
}
