// Ejemplos de uso de objetos Date:

//Obtener ;a fecha y hora actual:
const fechaHoraActual = new Date();
console.log(fechaHoraActual);

//Obtener informacion sobre la fecha:
const ahora = new Date();
const anno = ahora.getFullYear();
const mes = ahora.getMonth();
const dia = ahora.getDate();
const hora = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();

console.log(ahora);
console.log(anno);
console.log(mes);
console.log(dia);
console.log(hora);
console.log(minutos);
console.log(segundos);
console.log(`Hoy es ${anno}-${mes + 1}-${dia} ${hora}: ${minutos}: ${segundos}`);

// Formatear la fecha:
const fechaFormateada = ahora.toLocaleDateString();
console.log(fechaFormateada);

// Formatear la hora:
const horaFormateada = ahora.toLocaleTimeString();
console.log(horaFormateada);

// Formatear la fecha y la hora:
const fechaHoraFormateada = ahora.toLocaleString();
console.log(fechaHoraFormateada);

// Formatear la fecha y la hora:
const fechaHoraFormateada2 = ahora.toLocaleString('en-US');
console.log(fechaHoraFormateada2);

// Formatear la fecha y la hora:
const fechaHoraFormateada3 = ahora.toLocaleString('es-ES');
console.log(fechaHoraFormateada3);

// Como crear un objeto con una fecha y hora personalizada:
const fechaPersonalizada = new Date (2025,  10, 20, 12, 30, 40, 0);
console.log(fechaPersonalizada);