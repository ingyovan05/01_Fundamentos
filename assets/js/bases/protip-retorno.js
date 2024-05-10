/* function crearPersona (nombre, apellido){
    return {
        nombre,
        apellido
    }
}
 */
const crearPersona =(nombre, apellido) => ({nombre,apellido})
const persona =crearPersona('Yovan' , 'Solano')
console.log (persona)

function imprimeArgumentos () {
    console.log(arguments)
}
imprimeArgumentos('Yovan' , 'Solano' , false)

const imprimeArgumentos2 = (nombre,...args) => {    
    console.log(args)
}
imprimeArgumentos2('Yovan' , 'Solano' , false)

const imprimeArgumentos3 = (nombre,...args) => {    
    return args
}
/* const [ apellido, casado]  = imprimeArgumentos3('Yovan' , 'Solano' , false)
console.log(apellid1, casado) */

const {apellido}= crearPersona('Yovan' , 'Solano')
console.log({apellido})

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo:false, 
    trajes: ['Mark I', 'Mark II', 'Hulkbuster']
   }

/*    const imprimePropiedades = (personaje) => {
    console.log(personaje.nombre)
    console.log(personaje.codeName)
    console.log(personaje.vivo)
    console.log(personaje.edad)
    console.log(personaje.trajes)
   } */

   const imprimePropiedades = ({nombre, codeName,vivo,edad=15,trajes}) => {
    edad =edad || 0
    console.log({nombre})
    console.log({codeName})
    console.log({vivo})
    console.log({edad})
    console.log({trajes})
   }

   imprimePropiedades(tony)