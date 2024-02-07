// 10. Crea una variable "nota" y asígnale un valor numérico.
// Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
// let nota = 7;
let nota = Math.floor(Math.random() * 11); // Valor aleatorio entre 0 y 10.

if (nota >= 7) {
    console.log(`Aprobado: tu nota fue de ${nota}.`);
} else {
    console.log(`Reprobado: tu nota fue de ${nota}.`);
}
