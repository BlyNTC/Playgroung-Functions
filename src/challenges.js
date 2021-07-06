// Desafio 1
function compareTrue(value1, value2) {
  // seu codigo aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phraseSplit) {
  // função split pesquisada em: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
  return phraseSplit.split(' ');
}

// Desafio 4
function concatName(nameConcat) {
  // obrigada ESLint pela dica!!!!
  let resultado = (`${nameConcat[nameConcat.length - 1]}, ${nameConcat[0]}`);
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}


// Desafio 6
function highestCount(valores) {
  let contador = 0;
    for (let index = 0; index < valores.length; index += 1){
      if (valores[index] === Math.max(...valores)){
      contador += 1
    } 
    return contador;
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let Cat1Position = Math.abs(mouse - cat1);
  let Cat2Position = Math.abs(mouse - cat2);
  if (Cat1Position < Cat2Position) {
    return 'cat1';
  } else if (Cat1Position > Cat2Position) {
      return 'cat2';
    }
      return 'os gatos trombam e o rato foge';
}


// Desafio 8
function fizzBuzz(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 15 === 0) {
      result.push = 'fizzBuzz';
    } else if (numbers[index] % 3 === 0) {
      result.push = 'fizz';
    } else if (numbers[index] % 5 === 0) {
      result.push = 'buzz';
    } else {
      result.push = 'bug!';
    }
  }
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
