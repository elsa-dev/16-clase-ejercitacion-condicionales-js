const obtenerNota = (numero) => {
    if (numero < 6) {
        return `Desaprobado`
    }
    else if (numero >= 6 && numero < 7) {
        return `regular`
    }
    else if (numero >= 7 && numero < 8) {
        return `Bueno`
    }
    else if (numero >= 8 && numero < 10) {
        return `Muy bueno`
    }
    else if (numero = 10) {
        return `Excelente`
    }
    else if (numero < 0 || numero > 10) {
        return `puntaje invalido`
    }
}

console.log(obtenerNota(7))   
console.log(obtenerNota(9.6))  
console.log(obtenerNota(12))