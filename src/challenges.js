// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ');
  // Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
}

// Desafio 4
function concatName(nameConcat) {
  // seu código aqui
  return nameConcat[nameConcat.length - 1] + ', ' + nameConcat[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(highestNumber) {
  // seu código aqui
  let highestNumber2 = highestNumber;
  for (let i = 0; highestNumber.length; i++) {
    for (let index = i + 1; highestNumber2.length; index++)
      if (highestNumber[i] === highestNumber2[index]) {
        highestNumber++;
        return;
      }
  }
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (cat1 - mouse < cat2 - mouse) {
    return cat1;
  } else if (cat2 - mouse < cat1 - mouse) {
    return cat2;
  } else if (cat1 - mouse === cat2 - mouse) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'sem resultado';
  }
}

// Desafio 8
function fizzBuzz(buzzFizz) {
  // seu código aqui
  for (index = 0; index < buzzFizz; index++) {
    if (buzzFizz % 3 === 0) {
      return 'fizz';
    } else if (buzzFizz % 5 === 0) {
      return 'buzz';
    } else if (buzzFizz % 3 === 0 && buzzFizz % 5 === 0) {
      return 'fizzBuzz';
    } else {
      return 'bug';
    }
  }
}

// Desafio 9
function encode(codificar) {
  // seu código aqui
  for (index = 0; index < codificar.length; index++) {
  let codificado = codificar.replace(/a/i, '1', /e/i, '2', /i/i, '3', /o/i, '4', /u/i, '5')
  return codificado;
  }
}
function decode(decodificar) {
  // seu código aqui


  // Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
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
