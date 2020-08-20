const chequearNumero = (numero) => {
    if (numero >= 0) {
        return true
    }
    else {
        return false
    }

}

console.log(chequearNumero(5))
console.log(chequearNumero(-5))
console.log(chequearNumero(0))
console.log(chequearNumero(-0))