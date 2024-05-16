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
    
 
  
class Heroe extends Persona{    
    clan

constructor(nombre,codigo,frase,clan) {
    super(nombre,codigo,frase)
    this.clan=clan
}




}


const spiderman= new Heroe ('Yovan','Alirio','Frase','Los vengadores')

console.log(spiderman.quienSoy())

console.log(spiderman)