// 3. Crea un programa de cuenta progresiva.
//    Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

// Inicializamos el contador y el numero del usuario.
let contador = 0;
let numeroUsuario = 0;

// Solicitamos un numero al usuario.
numeroUsuario = prompt('Por favor, dame un numero:');

// Mientras que el contador sea menor o igual que el numero del usuario.
while (contador <= numeroUsuario) {
    // Desplegamos en consola el valor del contador.
    console.log(`El contador es igual a ${contador++}.`);
}
