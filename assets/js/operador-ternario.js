const dia =0 //0: Domingo
const horaActual =10 //Hora actual

let horaApertura
let mensaje

/* if (dia === 0 || dia ===6) {
    //es fin de semana Sabado o Domingo
    horaApertura=9 }
else {    horaApertura=11 } */

horaApertura=([0,6].includes(dia)) ? 9 : 11

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`

/* if (horaActual >= horaApertura) {
    mensaje ='Esta abierto'
} else {mensaje =`Esta cerrado, hoy abrimos a las ${horaApertura}`}
 */
console.log(mensaje)