// Fechas
// LIbrerias de apoyo Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milissegundos = new Date(10);
console.log(fecha_milissegundos);

const fecha_cadena = new Date("2022-01-01");
console.log(fecha_cadena);

const fecha_valores = new Date(2025, 10, 20);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();

console.log(`Hoy es ${dia}/${mes}/${anyo}`);