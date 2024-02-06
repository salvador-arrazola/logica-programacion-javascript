
// 2. Verifica si un número ingresado por el usuario es positivo o negativo.
//    Muestra una alerta informativa.

// Solicitamos un numero al usuario.
let numeroUsuario = prompt('Hola, por favor dame un número positivo o negativo:');

// Desplegamos en consola el numero que proporcionó el usuario.
console.log('numeroUsuario', numeroUsuario);

// Checamos el valor del numero.
if (numeroUsuario > 0) {
    // Si el numero es mayor que 0.
    alert(`El número ${numeroUsuario}, es POSITIVO.`);
} else if (numeroUsuario < 0) {
    // Si no, si el numero es menor que 0.
    alert(`El número ${numeroUsuario}, es NEGATIVO.`);
} else {
    // Si no, suponemos que el usuario proporciono el numero 0.
    alert(`El número ${numeroUsuario}, no es POSITIVO ni NEGATIVO.`)
}

// TODO: Agrega una validación para "el valor introducido no es un numero".
