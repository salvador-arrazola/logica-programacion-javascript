// Inicializamos el numero secreto con un valor especifico.
let numeroSecreto = 6;
// Solicitamos un numero al usuario.
let numeroUsuario = prompt('Por favor, dame un numero entre el 1 y 10:');

// Usamos la consola para ver el numero secreto y el numero del usuario.
console.log('Numero Secreto: '+ numeroSecreto);
console.log('Numero Usuario: '+ numeroUsuario);

// Checamos si el numero del usuario es igual al numero secreto.
if (numeroUsuario == numeroSecreto) {
    alert('¡Felicidades!\nAdivinaste el Numero Secreto.');
}
