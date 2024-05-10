const elMayor = (a,b) => (a>b) ? a :b
const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares'

console.log(elMayor(15,20))
console.log(tieneMembresia(true))

const amigo = false;
const amigoArr = [
    'Peter',
    'Tony',
    'Dr. Strnage',
    amigo ? 'Thor' : 'Loki',
    (()=>'Nick Fury')(),
    elMayor(10,15)
]

console.log(amigoArr)