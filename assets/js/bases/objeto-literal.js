let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo:false,
    edad: 40,
    coords: {
        lat: 34.034,
        long: -118.70
    },
    trajes: ['Mark I', 'Mark II', 'Hulkbuster'],
    direccion : {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima pelicula': 'Infinity War'
}

console.log(personaje)
console.log('Nombre' , personaje.nombre)
console.log('Edad' , personaje['edad'])
console.log('Coors', personaje.coords)
console.log('Coors', personaje.coords.lat)
console.log('Cantidad Trajes', personaje.trajes.length)
console.log('Coors', personaje.trajes[personaje.trajes.length-1])
const x ='vivo'
console.log('Vivo', personaje[x])
console.log ('Ultima Peli: ' , personaje["ultima pelicula"])

delete personaje.edad
console.log(personaje)

personaje.casado =true
Object.freeze(personaje)
Object.freeze(personaje.direccion)
personaje.dinero =1000000
const entriesPares = Object.entries(personaje)
console.log(entriesPares)
const propiedades = Object.getOwnPropertyNames(personaje)
console.log(propiedades)

const valores = Object.values(personaje)
console.log(valores)