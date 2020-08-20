const avanzarSemaforo = (colorActual) => {
    if (colorActual == `verde`) {
        return `amarillo`
    }
    else if (colorActual == `amarillo`) {
        return `rojo`
    }
    else {
        return `verde`
    }
    
}

console.log(avanzarSemaforo(`verde`))
console.log(avanzarSemaforo(`amarillo`))
console.log(avanzarSemaforo(`rojo`))