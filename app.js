// Inicializamos el numero secreto con un valor aleatorio entre 1 y 10.
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
// Inicializamos el numero del usuario.
let numeroUsuario = 0;
// Inicializamos el numero de intentos del usuario.
let numeroIntentos = 1;
// Inicializamos el numero maximo de intentos.
let numeroMaximoIntentos = 3;

// Desplegamos un mensaje de bienvenida.
alert('¡Bienvenido al juego de Adivina el Numero Secreto!');

// Mientras que el usuario no adivine el numero secreto.
while (numeroUsuario != numeroSecreto) {

    // Solicitamos un numero al usuario.
    numeroUsuario = prompt('Por favor, dame un número entre el 1 y 10:');

    // Usamos la consola para ver el numero secreto y el numero del usuario.
    console.log('numeroSecreto: '+ numeroSecreto);
    console.log('numeroUsuario: '+ numeroUsuario);

    // Checamos si el numero del usuario es igual al numero secreto.
    if (numeroUsuario == numeroSecreto) {
        // Si los numeros son iguales, felicitamos al usuario.
        // Usamos un operador ternario "?" para desplegar la palabra "intento" o "intentos"
        // en base al valor de numeroIntentos.
        alert(`¡Felicidades!\nAdivinaste el Numero Secreto en ${numeroIntentos} ${numeroIntentos == 1 ? 'intento' : 'intentos'}: ${numeroSecreto}.`);
    } else {
        // Si no, checamos el numero de intentos.
        if (numeroIntentos >= numeroMaximoIntentos) {
            // Si el usuario llego al numero maximo de intentos.
            alert(`¡Lo siento!\nHas superado el numero máximo de intentos: ${numeroMaximoIntentos}.\nEl Numero Secreto era: ${numeroSecreto}.`);
            // Rompemos el ciclo while para terminar el programa.
            break;
        }

        // Calculamos el numero de intentos restantes.
        let intentosRestantes = numeroMaximoIntentos - numeroIntentos;

        // Si el usuario no ha llegado al numero maximo de intentos,
        // checamos la relacion entre el numero secreto y el numero del usuario.
        if (numeroSecreto > numeroUsuario) {
            // Si el numero secreto es mayor al numero del usuario.
            alert(`¡Lo siento!\nEl Numero Secreto es mayor a ${numeroUsuario}.\nTe quedan ${intentosRestantes} intentos.`);
        } else {
            // Si no, si el numero secreto es menor al numero del usuario.
            alert(`¡Lo siento!\nEl Numero Secreto es menor a ${numeroUsuario}.\nTe quedan ${intentosRestantes} intentos.`);
        }
    }

    // Incrementamos el contador de intentos.
    numeroIntentos++;
}
