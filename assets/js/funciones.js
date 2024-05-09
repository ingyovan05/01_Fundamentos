

function saludar(nombre){
    console.log(arguments)
    console.log('Hola '+nombre)
}

const saludar2 = function (nombre){
    console.log('Hola Mundo '+ nombre)
}

const saludar3 = (nombre) => {
    console.log('Hola fecha '+ nombre)
}


saludar('Yovan',44, true)
saludar2('Yovan')
saludar3('Yovan')
