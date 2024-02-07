// Inicializamos el numero secreto con un valor especifico.
let numeroSecreto = 6;
// Inicializamos el numero del usuario.
let numeroUsuario = 0;
// Inicializamos el numero de intentos del usuario.
let numeroIntentos = 1;
// Inicializamos la palabra para "intento" o "intentos".
let palabraIntentos = 'intento';

// Desplegamos un mensaje de bienvenida.
alert('¡Bienvenido al juego de Adivina el Numero Secreto!');

// Mientras que el usuario no adivine el numero secreto.
while (numeroUsuario != numeroSecreto) {

    // Solicitamos un numero al usuario.
    numeroUsuario = prompt('Por favor, dame un número entre el 1 y 10:');

    // Usamos la consola para ver el numero secreto y el numero del usuario.
    console.log('Numero Secreto: '+ numeroSecreto);
    console.log('Numero Usuario: '+ numeroUsuario);

    // Checamos si el numero del usuario es igual al numero secreto.
    if (numeroUsuario == numeroSecreto) {
        // Si los numeros son iguales, felicitamos al usuario.
        alert(`¡Felicidades!\nAdivinaste el Numero Secreto en ${numeroIntentos} ${palabraIntentos}: ${numeroSecreto}.`);
        // Rompemos el ciclo para terminar el programa.
        break;
    } else {
        // Si no, checamos la relacion entre ambos numeros.
        if (numeroSecreto > numeroUsuario) {
            // Si el numero secreto es mayor al numero del usuario.
            alert(`¡Lo siento!\nEl Numero Secreto es mayor a ${numeroUsuario}.`);
        } else {
            // Si no, si el numero secreto es menor al numero del usuario.
            alert(`¡Lo siento!\nEl Numero Secreto es menor a ${numeroUsuario}.`);
        }
    }

    // Incrementamos el contador de intentos.
    numeroIntentos++;
    // Dado que el usuario ya completo el primer intento,
    // cambiamos la palabra "intento" por "intentos".
    palabraIntentos = 'intentos';

}
