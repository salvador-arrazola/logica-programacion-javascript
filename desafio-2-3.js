// 3. Crea un sistema de puntuación para un juego.
//    Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!".
//    En caso contrario, muestra "Intenta nuevamente para ganar.".

// Solicitamos la puntuacion al usuario.
let puntuacionUsuario = prompt('Hola, por favor dame tu puntuación:');

// Desplegamos en consola la puntuacion proporcionada por el usuario.
console.log('puntuacionUsuario', puntuacionUsuario);

//  Checamos la puntuacion.
if (puntuacionUsuario >= 100) {
    // Si la puntuacion es mayor o igual a 100.
    alert(`¡Felicidades, has ganado!\nTu puntuación fue ${puntuacionUsuario}.`);
} else {
    // Si no, si la puntuacion es menor que 100.
    alert(`¡Lo siento, necesitas 100 puntos o más para ganar!\nTu puntuación fue ${puntuacionUsuario}.`);
}

// TODO: Agrega una validacion para "el valor introducido no es una puntuacion valida".
