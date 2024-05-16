class Persona{

static _conteo =0
static get conteo() {
    return Persona._conteo +'Instancia'
}
static mensaje(){
    console.log(this.nombre)
    console.log('Soy un metodo estatico')
}


nombre=''
codigo=''
frase=''
comida=''

    constructor(nombre,codigo,frase) {
        this.nombre=nombre
        this.codigo=codigo
        this.frase=frase
        // console.log('Hola')
       Persona._conteo++
    }

    set setComidaFavorita(comida){
        this.comida=  comida.toUpperCase()
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this,this.comida}`
    }

quienSoy(){
    console.log(`Soy: ${this.nombre} y mi codigo es ${this.codigo}`)
}

miFrase(){
    this.quienSoy()
    console.log(`mi frase es ${this.frase}`)
}
}

const spiderman= new Persona ('Yovan','Alirio','Aca')
const iroman= new Persona ('Yovan2','Alirio2','Aca2')

// console.log (spiderman,iroman)
// console.log (spiderman.quienSoy(),iroman.quienSoy())
// console.log(spiderman.miFrase())

 spiderman.setComidaFavorita='Lentejas'
// console.log(spiderman.comida)

console.log(spiderman.getComidaFavorita)
console.log(Persona._conteo)
console.log(Persona.conteo)
Persona.mensaje()

Persona.propiedadExterna ='Hola Mundo'

console.log(Persona.propiedadExterna)

console.log(Persona)
