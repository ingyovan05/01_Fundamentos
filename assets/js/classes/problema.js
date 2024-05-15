
const fher = {
    nombre: 'fernando',
    edad: 30,
    imprimir() { console.log (this.nombre,this.edad)}
}

const pedro = {
    nombre: 'pedro',
    edad: 15
}

fher.imprimir()

function Persona(nombre, edad) {
console.log('Se ejecuto esta linea')
this.nombre=nombre
this.edad=edad
this.imprimir = function(){
    console.log (this.nombre,this.edad)
}
}

const Melissa = new Persona('Melissa', 28)
const maria = new Persona('Maria', 18)
console.log(maria)

maria.imprimir()
Melissa.imprimir()