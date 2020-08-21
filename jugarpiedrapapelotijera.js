// const jugarPiedraPapelTijera = (a, b) => {
//     if (a == `tijera` && b == `piedra`) {
//         return `gano piedra!`
//     }
//     else if (a == `tijera` && b == `papel`) {
//         return `gano tijera!`
//     }
//     else if (a == `tijera` && b == `tijera`) {
//         return `empate! `
//     }
//     else if (a == `piedra` && b == `piedra`) {
//         return `empate! `
//     }
//     else if (a == `piedra` && b == `papel`) {
//         return `gano papel!`
//     }
//     else if (a == `piedra` && b == `tijera`) {
//         return `gano piedra!`
//     }
//     else if (a == `papel` && b == `piedra`) {
//         return `gano papel!`
//     }
//     else if (a == `papel` && b == `papel`) {
//         return `empate!`
//     }
//     else if (a === `papel` && b === `tijera`) {
//         return `gano tijera!`
//     }
// }

// console.log(jugarPiedraPapelTijera('tijera', 'piedra'))  
// console.log(jugarPiedraPapelTijera('piedra', 'tijera')) 
// console.log(jugarPiedraPapelTijera('papel', 'piedra'))  
// console.log(jugarPiedraPapelTijera('piedra', 'papel'))  
// console.log(jugarPiedraPapelTijera('papel', 'tijera'))  
// console.log(jugarPiedraPapelTijera('tijera', 'papel'))  
// console.log(jugarPiedraPapelTijera('piedra', 'piedra'))  
// console.log(jugarPiedraPapelTijera('papel', 'papel'))   
// console.log(jugarPiedraPapelTijera('tijera', 'tijera'))  


const jugarPiedraPapelTijera = (a, b) => {
    if (a == `tijera` && b == `piedra` || a == `piedra` && b == `tijera`) {
        return `gano piedra!`
    }
    else if (a == `tijera` && b == `papel` ||  a === `papel` && b === `tijera`) {
        return `gano tijera!`
    }
    else if (a == `tijera` && b == `tijera` || a == `papel` && b == `papel` || a == `piedra` && b == `piedra`) {
        return `empate! `
    }
    else if (a == `piedra` && b == `papel` || a == `papel` && b == `piedra`) {
        return `gano papel!`
    }     
}

console.log(jugarPiedraPapelTijera('tijera', 'piedra'))  
console.log(jugarPiedraPapelTijera('piedra', 'tijera')) 
console.log(jugarPiedraPapelTijera('papel', 'piedra'))  
console.log(jugarPiedraPapelTijera('piedra', 'papel'))  
console.log(jugarPiedraPapelTijera('papel', 'tijera'))  
console.log(jugarPiedraPapelTijera('tijera', 'papel'))  
console.log(jugarPiedraPapelTijera('piedra', 'piedra'))  
console.log(jugarPiedraPapelTijera('papel', 'papel'))   
console.log(jugarPiedraPapelTijera('tijera', 'tijera')) 