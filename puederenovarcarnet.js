const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
    if (pasoTests===true && tieneMultasImpagas===false && pagoImpuestos) {
        return `true`
    }
    
    else {
        return `false`
    }
    
}

console.log(puedeRenovarCarnet(true, true, true))    
console.log(puedeRenovarCarnet(true, true, false))  
console.log(puedeRenovarCarnet(true, false, true))   
console.log(puedeRenovarCarnet(true, false, false))  
console.log(puedeRenovarCarnet(false, true, true))   
console.log(puedeRenovarCarnet(false, true, false))  
console.log(puedeRenovarCarnet(false, false, true))  
console.log(puedeRenovarCarnet(false, false, false)) 