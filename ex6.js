function inverso(value) {
    if (typeof value === 'boolean') {
        console.log(!value)
    } else if (typeof value === 'number') {
        console.log(-value)
    } else {
        console.log("booleano ou número esperados, mas o parâmetro é do " +
            `${typeof value}`)
    }
}
