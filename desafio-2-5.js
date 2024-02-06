// 5. Pide al usuario que ingrese su nombre mediante un prompt.
//    Luego, muestra una alerta de bienvenida usando ese nombre.

// Solicitamos su nombre al usuario.
let nombreUsuario = prompt('Hola, por favor escribe tu nombre:');

// Mostramos en consola el nombre del usuario.
console.log('nombreUsuario', nombreUsuario);

// Checamos el nombre del usuario.
if (nombreUsuario) {
    // Si el usuario proporciono un nombre, le damos la bienvenida.
    alert(`¡Bienvenido al sistema ${nombreUsuario}!`);
} else {
    // Si no, si el usuario no proporciono un nombre, le mostramos un mensaje de error.
    alert(`¡Lo siento!\nEs necesario ingresar tu nombre para acceder al sistema.`);
}
