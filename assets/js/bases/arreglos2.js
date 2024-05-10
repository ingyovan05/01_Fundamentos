let juegos =['Zelda', 'Mario', 'Metrois','Chrono']

console.log('Largo' , juegos.length)

let primero = juegos[0]
let ultimo = juegos[juegos.length-1]

console.log (primero, ultimo)

juegos.forEach(
    (elemento,indice,arr) => {
        console.log(elemento,indice,arr)    }
)

console.log (juegos.length)
let nuevaLongitud = juegos.push('F-Zero') //Agregar al final
console.log (nuevaLongitud)
nuevaLongitud = juegos.unshift('Fire Emblem') //agregar al inicio
console.log (nuevaLongitud)
let juegoBorrado= juegos.pop() //Borrar el ultimo
console.log(juegoBorrado)
console.log (juegos.length)

let juegosBorrados = juegos.splice(3,2)
juegosBorrados.forEach(
    (elemento,indice,arr) => {
        console.log(elemento,indice,arr)    }
)
juegos.forEach(
    (elemento,indice,arr) => {
        console.log(elemento,indice,arr)    }
)
console.log({juegosBorrados ,juegos})

let metroidIndex =juegos.indexOf('Zelda')
console.log(metroidIndex)