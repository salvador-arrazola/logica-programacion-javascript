// 4. Crea un programa de cuenta regresiva.
//    Pide un número y cuenta desde ese numero hasta 0 utilizando un bucle 'while' en la consola del navegador.

// Inicializamos el contador y el numero del usuario.
let contador = 0;
let numeroUsuario = 0;

// Solicitamos un numero al usuario.
numeroUsuario = prompt('Por favor dame un numero:');
// Asignamos el numero del usuario al contador.
contador = numeroUsuario;

// Mientras que el contador sea mayor o igual que el numero del usuario.
while (contador >= 0) {
    // Desplegamos en consola el valor del contador.
    console.log(`El contador es igual a ${contador--}.`);
}
