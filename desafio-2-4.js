// 4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
//    utilizando un template string para incluir el valor del saldo.

// Asignamos un saldo especifico.
// let saldoCuenta = 2500;

// Asignamos un saldo aleatorio entre 0 y 10,000.
let saldoCuenta = Math.random()*10001;

// Desplegamos en consola el saldo de la cuenta.
console.log('saldoCuenta', saldoCuenta);

// Mostramos el saldo de la cuenta en una alerta.
// alert(`El saldo de tu cuenta es $${saldoCuenta}.`);

// Mostramos el saldo de la cuenta (con 2 decimales) en una alerta.
alert(`El saldo de tu cuenta es $${saldoCuenta.toFixed(2)}.`);
