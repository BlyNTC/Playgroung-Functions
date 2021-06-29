// Desafio 1
function compareTrue(requisito1, requisito2) {
  let trueFalse = requisito1&&requisito2
  return (trueFalse)
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area
  // seu código aqui
}

// Desafio 3
function splitSentence(frase) {
  let splitado = frase.split(' ')
  return (splitado)
  //link refercia:
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
}

// Desafio 4
function concatName(listNames) {
  return (listNames[listNames.length -1]+', '+listNames[0])

  // seu código aqui
}

// Desafio 5
function footballPoints(win, ties) {
  return ((win * 3)+ties)
  // seu código aqui
}

// Desafio 6
function highestCount(numeros) {
  let numeroMaior = Math.max(...numeros);
  let count = 0;
  for (let i of numeros) {
    if(numeroMaior === i){
      count += 1
    }
    }return (count)
  }
  // seu código aqui


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat11 = cat1-mouse
  let cat22 = cat2-mouse
  if(Math.abs(cat11) < Math.abs(cat22)){
    return ('cat1')
  }
  if(Math.abs(cat11) > Math.abs(cat22)){
    return ('cat2')
  }
  else {
    return ("os gatos trombam e o rato foge")
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let numero = []
    for (const i of numeros) {
      if (i % 3 == 0 && i % 5 == 0) {
        numero.push("fizzBuzz")
      }
     else if (i % 3 == 0) {
        numero.push('fizz')
      }
      else if (i % 5 == 0) {
        numero.push('buzz')
      }
      else {numero.push('bug!')}
    }
    return(numero)
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
