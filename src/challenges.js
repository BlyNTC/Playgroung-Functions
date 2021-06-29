// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
  // seu código aqui
}

// Desafio 3
function splitSentence(stringSplitting) {
  return stringSplitting.split(' ');
  // seu código aqui
}

// Desafio 4
function concatName(stringConcatenation) {
  return `${stringConcatenation[stringConcatenation.length - 1]}, ${stringConcatenation[0]}`;
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
  // seu código aqui
}

// Desafio 6
function highestCount(arrayNumber) {
  let higherNumber = null;
  let counting = null;
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (higherNumber < arrayNumber[index] || higherNumber === null) {
      counting = 1;
      higherNumber = arrayNumber[index];
    } 
    else if (higherNumber === arrayNumber[index]) {
      counting += 1;
    } 
  }
  return counting; // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const d1 = Math.abs(mouse - cat1)
  const d2 = Math.abs(mouse - cat2)
  if (d1 > d2) {
    return "cat2";
  } else if (d1 < d2) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayNumberFB) {
  let arrayFB = []
  for (let index = 0; index < arrayNumberFB.length; index += 1) {
    if (arrayNumberFB[index] % 3 === 0) {
      if (arrayNumberFB[index] % 5 === 0) {
        arrayFB.push('fizzBuzz')
      } else {
        arrayFB.push('fizz')
      }
    } else if (arrayNumberFB[index] % 5 === 0) {
      arrayFB.push('buzz')
    } else {
      arrayFB.push('bug!')
    }
  }
  // seu código aqui
  return arrayFB;
  // seu código aqui
}

// Desafio 9
function encode(eCode) {
  let nECode = ""
  for (let index = 0; index < eCode.length; index += 1) {
    if ('a' === eCode[index]) {
      nECode += '1'
    } else if ('e' === eCode[index]) {
      nECode += '2'
    } else if ('o' === eCode[index]) {
      nECode += '4'
    } else if ('i' === eCode[index]) {
      nECode += '3'
    } else if ('u' === eCode[index]) {
      nECode += '5'
    } else nECode += eCode[index];
  }
  return nECode;
}

function decode(dCode) {
  let nDCode = ""
  for (let index = 0; index < dCode.length; index += 1) {
    if ('1' === dCode[index]) {
      nDCode += 'a'
    } else if ('2' === dCode[index]) {
      nDCode += 'e'
    } else if ('3' === dCode[index]) {
      nDCode += 'i'
    } else if ('4' === dCode[index]) {
      nDCode += 'o'
    } else if ('5' === dCode[index]) {
      nDCode += 'u'
    } else nDCode += dCode[index];


  }

  return nDCode;

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
