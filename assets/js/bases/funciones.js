

function saludar(nombre){
    console.log(arguments)
    console.log('Hola '+nombre)
    return [1,2]
    console.log('Jamas me ejecuto, ya retorne')
}

const saludar2 = function (nombre){
    console.log('Hola Mundo '+ nombre)
}

const saludar3 = (nombre) => {
    console.log('Hola fecha '+ nombre)
}

const retornoSaludar = saludar('Yovan',44, true)
saludar2('Yovan')
saludar3('Yovan')

console.log(retornoSaludar[0],retornoSaludar[1])

function sumar(a,b){
    return a+b
}
const sumar2 = (a,b)=> {
    return a+b
}
const sumar3 = (a,b)=> a+b

console.log(sumar(5,6))
console.log(sumar2(7,6))
console.log(sumar3(7,8))

function getAleatorio() {
    return Math.random()
}
const getAleatorio2 = () => Math.random()

console.log(getAleatorio())
console.log(getAleatorio2())
