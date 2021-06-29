// Desafio 1
function compareTrue(par1, par2) {
  if (par1 === true && par2 === true) {
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = 0;
  result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(stringFrase) {
  let stringArray = stringFrase.split(" ");
  return stringArray;
}

// Desafio 4
function concatName(parArray) {
  let concatenamento = [parArray[parArray.length - 1], parArray[0]];
  return concatenamento.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = (wins * 3 + ties);
  return points;
}

// Desafio 6
function highestCount(numberArray) {
  let maior = -9999999999;
  for (let cont = 0; cont < numbersArray.length; cont += 1) {
    if (numbersArray[cont] > maior) {
      maior = numbersArray[cont];
    }
  }
  let contador = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === maior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let distCat1 = 0;
    let distCat2 = 0;
    distCat1 = Math.abs(mouse - cat1);
    distCat2 = Math.abs(mouse - cat2);

    if (distCat1 === distCat2) {
      return "os gatos trombam e o rato foge" ;
    }
    else if (distCat1 < distCat2) {
      return 'cat1'
    }
    else {
      return 'cat2'
    }

}

// Desafio 8
function fizzBuzz() {
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
