// 1. Pregunta al usuario qué día de la semana es.
//    Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!".
//    De lo contrario, muestra "¡Buena semana!".

// Solicitamos el dia de la semana al usuario.
let diaSemana = prompt('Hola, por favor dime que día de la semana es:');

// Desplegamos en consola el dia que proporcionó el usuario.
console.log('diaSemana', diaSemana);

// // Hacemos la comparación mediante ==.
// if (diaSemana == 'sabado' || diaSemana == 'domingo') {
//     // Si el dia proporcionado por el usuario es sabado o domingo (exactamente).
//     alert(`Hoy es ${diaSemana}, buen fin de semana !!!`);
// } else {
//     // Si no, si el dia proporcionado no es sabado ni domingo (exactamente).
//     alert(`Hoy es ${diaSemana}, buena semana !!!`);
// }

// Hacemos la comparación mediante String.prototype.localeCompare()
// para ignorar mayúsculas, minúsculas y acentos.
if (diaSemana.localeCompare('sabado', 'es', { sensitivity: 'base' }) == 0 ||
    diaSemana.localeCompare('domingo', 'es', { sensitivity: 'base' }) == 0) {
    // Si localeCompare retorna 0,
    // el dia proporcionado equivale a sabado o domingo.
    alert(`Hoy es ${diaSemana}, buen fin de semana !!!`);
} else {
    // Si no, si localeCompare no retorna (retorna -1 o 1),
    // el dia proporcionado no equivale a sabado ni domingo.
    alert(`Hoy es ${diaSemana}, buena semana !!!`);
}

// TODO: Coloca los dias del fin de semana en un arreglo y haz el match.
// TODO: Coloca los dias de la semana en un arreglo y agrega otra condicion para hacer el match.
// TODO: Agrega una validacion para "dia invalido".
// TODO: Agrega una validacion para "dia no proporcionado".