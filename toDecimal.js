function binarioParaDecimal(value) {
    let sum = 0
    let toConvert = value.split('').reverse().join('')
    for (let i = 0; i < toConvert.length; i++) {
        if (toConvert[i] == 1) sum += 2 ** i
    } return sum
}

console.log(binarioParaDecimal('101101001'))