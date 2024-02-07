
// 11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
// 12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
// 13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let numeroAleatorio = Math.random();
console.log(`Numero aleatorio: ${numeroAleatorio}.`);

// numeroAleatorio = Math.floor(Math.random() * 10) + 1;
numeroAleatorio = ~~(Math.random() * 10) + 1; // Usando el shorthand ~~ para Math.floor.
console.log(`Numero aleatorio entre 1 y 10: ${numeroAleatorio}.`);

// numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
numeroAleatorio = ~~(Math.random() * 1000) + 1; // Usando el shorthand ~~ para Math.floor.
console.log(`Numero aleatorio entre 1 y 1000: ${numeroAleatorio}.`);
