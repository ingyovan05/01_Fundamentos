class Singleton {
    static instancia
    nombre =''
    constructor(nombre=''){

        if( !!Singleton.instancia){
            return  Singleton.instancia
        }   
        Singleton.instancia=this                
        this.nombre=nombre       

        return this

    }
}

const instancia1 = new Singleton('Iroman')
const instancia2 = new Singleton('Iroman2')
const instancia3 = new Singleton('Iroman3')

console.log(instancia1.nombre)
console.log(instancia2.nombre)
console.log(instancia3.nombre)