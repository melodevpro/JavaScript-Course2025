//Objetos 

const movil = {
    altura: 10,
    anchura: 5,
    marca: "Samsung",
    color: "Negro",
    isWhite: false,
    contactos: ["Pedro", "Maria", "Luis"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: "32gb"
    }
}
console.log(movil);
console.log(movil.contactos[0]);
console.log(movil.tarjeta.almacenamiento);

movil.anyo = 2022;
console.log(movil.anyo);

movil.marca = "Iphone";
console.log(movil.marca);

movil.isWhite = true;
console.log(movil.isWhite);

movil.tarjeta.almacenamiento = "64gb";
console.log(movil.tarjeta.almacenamiento);

