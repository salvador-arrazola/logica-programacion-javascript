let minimo = 0;
let maximo = 0;
let numeroSecreto = 0;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 0;

alert('¡Bienvenido al juego de Adivina el Numero Secreto!');

// TODO: Validar que los valores proporcionados por el usuario sean numeros.
minimo = parseInt(prompt('Por favor, dame el valor minimo:'));
maximo = parseInt(prompt('Por favor, dame el valor maximo:'));
maximoIntentos = parseInt(prompt('Ahora dime cuantos intentos quieres para adivinar el Numero Secreto:'));

console.log('minimo', minimo);
console.log('maximo', maximo);
console.log('maximoIntentos', maximoIntentos);

numeroSecreto = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

console.log('numeroSecreto', numeroSecreto);

while (numeroUsuario != numeroSecreto) {

    // TODO: Validar que el valor proporcionado por el usuario sean un numero.
    numeroUsuario = prompt(`Por favor, dame un numero entre ${minimo} y ${maximo}:`);
    console.log('numeroUsuario', numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        
        alert(`¡Felicidades!\nAdivinaste el Numero Secreto en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}: ${numeroSecreto}.`);

    } else {

        if (intentos >= maximoIntentos) {
            alert(`¡Lo siento!\nHas superado el numero máximo de intentos: ${maximoIntentos}.\nEl Numero Secreto era: ${numeroSecreto}.`);
            break;
        }

        let intentosRestantes = maximoIntentos - intentos;
        let mensajeIntentosRestantes = `Te ${intentosRestantes == 1 ? 'queda' : 'quedan'} ${intentosRestantes} ${intentosRestantes == 1 ? 'intento' : 'intentos'}.`
        
        if (numeroSecreto > numeroUsuario) {
            alert(`¡Lo siento!\nEl Numero Secreto es mayor a ${numeroUsuario}.\n${mensajeIntentosRestantes}`);
        } else {
            alert(`¡Lo siento!\nEl Numero Secreto es menor a ${numeroUsuario}.\n${mensajeIntentosRestantes}`);
        }
        // TODO: Calcular mensajePista en base a intentosRestantes y numeroSecreto > numeroUsuario mediante operadores ternarios.
        // TODO: Reemplazar el if con un alert que use el mensajePista calculado.

        intentos++;
    }
}
