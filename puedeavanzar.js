const puedeAvanzar = (colorDeSemaforo) => {
    if (colorDeSemaforo == `verde`) {
            return true
        }
        else if (colorDeSemaforo == `amarillo` || colorDeSemaforo == `rojo`) {
            return false
        }
        else {
            return `Error: color de semáforo inválido`
        }   
}

console.log(puedeAvanzar('verde'))     
console.log(puedeAvanzar('amarillo')) 
console.log(puedeAvanzar('rojo')) 
console.log(puedeAvanzar('lila'))