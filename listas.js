// Listas, arrays o arreglos
const arreglo = [1, 2, 3, 4, 5];

console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]);
console.log(arreglo[3]);
console.log(arreglo[4]);

const lista = [1, "hola", true, undefined, null ];
console.log(lista);

const lista2 = new Array(2, "mundo", false, undefined, null);
console.log(lista2);

const lista3 = new Array(5);
lista3[0] = 3;
lista3[1] = "Javascript";
lista3[2] = true;
lista3[3] = undefined;
lista3[4] = null;
console.log(lista3);

const lista4 = [lista, lista2, lista3];
console.log(lista4);



