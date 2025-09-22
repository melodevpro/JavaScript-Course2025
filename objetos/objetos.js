// Objetos en JavaScript

const persona ={
    nombre: "Sandra",
    apellido: "Duarte",
    edad: 57,
    esAutorizado: true
};
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.esAutorizado);

const nombreCompleto = persona.nombre + '' + persona.apellido;
persona.edad = 40;
console.log(persona.edad);
console.log(nombreCompleto);

//Objetos anidados:
const persona2 = {
    nombre: "Melo",
    apellido: "Duarte",
    edad: 36,
    esAutorizado: true,
    direccion: {
        calle: "Calle 1",
        avenida: "Avenidad 2",
        codigoPostal: '230002', 
    }
};
console.log(persona2.direccion.calle);
console.log(persona2.direccion.avenida);
console.log(persona2.direccion.codigoPostal);


