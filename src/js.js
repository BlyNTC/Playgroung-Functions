let proplayer = {
    name: 'joão',
    lastname: 'Ferreira',
    age: 23,
    homem: true,
}


for (key in proplayer) {
    console.log(proplayer.name)
}


let number = ['1', '2', '5']
console.log(parseInt(number[1]))
















function hydrate(hidratar) {
    let numberResult = hidratar.replace(/[^0-9]/g, "")
    numberResult = numberResult.split("");
    let resultado;

    for (let i = 0; i < numberResult.length; i += 1) {
        if (numberResult.length === 1) {
            resultado = parseInt(numberResult) + " copo de água"
        } else if (numberResult.length > 1) {
            resultado = parseInt(numberResult[0]) + parseInt(numberResult[1]) + parseInt(numberResult[2]) + " copos de água"
        }
    }
    return resultado;
}

console.log(hydrate("1 cerveja 2 vinhos e 3 barris"))









