const obtenerDatosDeCiudad = (nombre, numero,pais) => {
    return `"La ciudad de ${nombre} tiene una poblacion de ${numero}   habitantes y esta ubicada en ${pais}"`

}

console.log(obtenerDatosDeCiudad(`santa fe`,`48946464`,`argentina`))