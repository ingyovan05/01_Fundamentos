let a = 5

if (a > 10) {
    console.log('A es mayor a 10')
} else
{
    console.log('A es menor a 10')
}
//console.log('Fin del programa')
const hoy = new Date()
let dia = hoy.getDay()
console.log({dia})
//console.log(hoy)
/* if (dia === 4){
    console.log('Jueves')
}else
{
    console.log('No es Jueves')
}
 */
 
const diasLetras = {0: 'Domingo', 1: 'Lunes', 2: 'Martes',3:'Miercoles',4:'Jueves',5:'Viernes',6:'Sabado'}

const diasLetras2 = ['Domingo', 'Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado']

console.log(diasLetras[dia])
console.log(diasLetras2[dia])

