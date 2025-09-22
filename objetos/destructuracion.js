// Destructuracion de arreglos:

const numeros = [1, 2, 3, 4, 5];

const [num1, num2, , num4] = numeros;
console.log(num1); //Salida: 1
console.log(num2); //Salida: 2
console.log(num4); //Salida: 4

// Destructuracion de objetos:
 const usuario = { nombre: "Luwing", edad: 30, pais: "Colombia", esAdmin: true};

 const { nombre, edad, pais, esAdmin} = usuario;
 console.log(nombre); //Salida: Luwing
 console.log(edad); //Salida: 30
 console.log(pais); //Salida: Colombia
 console.log(esAdmin); //Salida: true

 