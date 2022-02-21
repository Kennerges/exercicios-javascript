function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
        if (numero >= minimo && numero <= maximo) {
            console.log(true)
        } else {
            console.log(false)
        }
    } else {
        if (numero > minimo && numero < maximo) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}
