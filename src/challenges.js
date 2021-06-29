// Desafio 1
function compareTrue(numA, numB) {
  if (numA > 5 && numB > 7) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringSplit) {
  return stringSplit.split(' ');
}

// Desafio 4
function concatName(arrayNomes) {
  return arrayNomes[arrayNomes.length - 1] + ', ' + arrayNomes[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(arrayMaior) {
  let quantos = 0;
  let somanum = -1;
  for (i = 0; i < arrayMaior.length; i++) {
    if (arrayMaior[i] > somanum) {
      somanum = arrayMaior[i]
    }
  }
  for (i2 = 0; i2 < arrayMaior.length; i2++) {
    if (somanum == arrayMaior[i2]) {
      quantos++
    }
  }
  return quantos
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return cat1
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return cat2
  } else if (Math.abs(cat2 - mouse) == Math.abs(cat1 - mouse)) {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arrayFizz) {
  let arrayBuzz = [];
  for (i3 = 0; i3 < arrayFizz.length; i3++) {
    if (arrayFizz[i3] % 3 == 0 && arrayFizz[i3] % 5 == 0) {
      arrayBuzz.push('fizzBuzz');
    } else if (arrayFizz[i3] % 5 == 0) {
      arrayBuzz.push('Buzz');
    } else if (arrayFizz[i3] % 3 == 0) {
      arrayBuzz.push('fizz');
    } else {
      arrayBuzz.push('bug!')
    }
  }
  return arrayBuzz
}

// Desafio 9
function encode(stringEncode) {
  let encodeString = '';
  for (i4 = 0; i4 < stringEncode.length; i4++) {
    if (stringEncode[i4] === 'a') {
      encodeString += 1;
    } else if (stringEncode[i4] === 'e') {
      encodeString += 2;
    } else if (stringEncode[i4] === 'i') {
      encodeString += 3;
    } else if (stringEncode[i4] === 'o') {
      encodeString += 4;
    } else if (stringEncode[i4] === 'u') {
      encodeString += 5;
    } else {
      encodeString += stringEncode[i4];
    }
  }
}

function decode(stringEncode) {
  let decodeString = '';
  for (i5 = 0; i5 < stringEncode.length; i5++) {
    if (stringEncode[i5] === '1') {
      decodeString += 'a';
    } else if (stringEncode[i5] === '2') {
      decodeString += 'e';
    } else if (stringEncode[i5] === '3') {
      decodeString += 'i';
    } else if (stringEncode[i5] === '4') {
      decodeString += 'o';
    } else if (stringEncode[i5] === '5') {
      decodeString += 'u';
    } else {
      decodeString += stringEncode[i5];
    }
  }
  return decodeString
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
