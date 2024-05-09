const regresaTrue= () => {
    return true
}
const regresaFalse= () => {
    return false
}

console.warn('Not o la negación')
console.log(true)
console.log(false)
console.log(!false)

console.log(!regresaFalse())

console.warn('And')
console.log(true && true)

console.log('=======')
console.log(regresaFalse() && regresaTrue())

console.log('===&&====')
regresaFalse() && regresaTrue()

console.log('===OR====')
console.log(true || false)
console.log(false || false)


