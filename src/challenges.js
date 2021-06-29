// Desafio 1
function compareTrue(firstValue, secondValue) {
  return (firstValue && secondValue);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  return (frase.split(' '));
}

// Desafio 4
function concatName(lista) {
  let answer = (`${lista[lista.length - 1]}, ${lista[0]}`);
  return answer;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(myArray) {
  let maxNumber = Math.max.apply(null, myArray);
  let maxNumberCount = 0;
  for (let index = 0; index < myArray.length; index += 1) {
    if (myArray[index] === maxNumber) {
      maxNumberCount += 1;
    }
  }
  return maxNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let answer;
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    answer = 'os gatos trombam e o rato foge';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    answer = 'cat2';
  } else {
    answer = 'cat1';
  }
  return answer;
}

// Desafio 8
function fizzBuzz(numeros) {
  for (let index = 0; index < numeros.length; index += 1) {
    if (((numeros[index] % 3) === 0) && ((numeros[index] % 5) === 0)) {
      numeros[index] = 'fizzBuzz';
    } else if ((numeros[index] % 3) === 0) {
      numeros[index] = 'fizz';
    } else if ((numeros[index] % 5) === 0) {
      numeros[index] = 'buzz';
    } else {
      numeros[index] = 'bug!';
    }
  }
  return numeros;
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
