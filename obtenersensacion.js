const obtenerSensacion = (temperatura) => {
    if (temperatura < 0) {
        return `!Esta helando!`
    }
    else if (temperatura >= 0 && temperatura < 15) {
        return `!Hace frio!`
    }
    else if (temperatura >= 15 && temperatura < 25) {
        return `esta lindo`
    }
    else if (temperatura >= 25 && temperatura < 30) {
        return `Hace calor`
    }
    else if (temperatura>= 30) {
        return `!Hace mucho calor!`
    }
}

console.log(obtenerSensacion(33))
console.log(obtenerSensacion(15))
console.log(obtenerSensacion(2))
console.log(obtenerSensacion(-3))
console.log(obtenerSensacion(27))