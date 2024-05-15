class Persona{

nombre;
codigo;
frase;

    constructor(nombre,codigo,frase) {
        this.nombre=nombre
        this.codigo=codigo
        this.frase=frase
        console.log('Hola')
    }
}

const spiderman= new Persona ('Yovan','Alitio','Aca')
const iroman= new Persona ('Yovan2','Alitio2','Aca2')

console.log (spiderman,iroman)