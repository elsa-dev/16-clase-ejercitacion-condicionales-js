const esConsonante = (letra) => {
    if (letra !== `a` && letra !== `e` && letra !== `i` &&letra!== `o` && letra !== `u`  ) {
        return `true`
    }
    
    else {
        return `false`
    }
    
}

console.log(esConsonante(`a`))
console.log(esConsonante(`n`))
console.log(esConsonante(`e`))