// 1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log('Ingresando al sistema...');

// 2. Crea una variable llamada "nombre" y asígnale tu nombre.
//    Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
// 3. Crea una variable llamada "nombre" y asígnale tu nombre.
//    Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let nombre = 'Salvador Arrazola';
console.log(`Bienvenido - ${nombre} -.`);
alert(`Hola "${nombre}".`);

// 4. Utiliza prompt y haz la siguiente pregunta:
//    ¿Cuál es el lenguaje de programación que más te gusta?.
//    Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguajeProgramacion = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(`Lenguaje de programación: ${lenguajeProgramacion}`);

// 5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
//    Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
//    Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
// 6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
//    Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
//    Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
// let valor1 = 50;
let valor1 = Math.floor(Math.random() * 101); // Valor aleatorio entre 0 y 100.
// let valor2 = 35;
let valor2 = Math.floor(Math.random() * 101); // Valor aleatorio entre 0 y 100.
let resultado = 0;

resultado = valor1 + valor2;
console.log(`La suma de ${valor1} + ${valor2} es igual a ${resultado}.`);

resultado = valor1 - valor2;
console.log(`La resta de ${valor1} - ${valor2} es igual a ${resultado}.`);
