// Desafio 1
function compareTrue(verdade1, verdade2) {
  // seu código aqui
  if (verdade1 && verdade2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base*height)/2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ');
}

// Desafio 4
function concatName(arrStr) {
  // seu código aqui
  return arrStr[arrStr.length - 1] + ', ' + arrStr[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = wins*3;
  let tiesPoints = ties*1;
  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(arrNumbers) {
  // seu código aqui
  let maiorNum = arrNumbers[0];
  let contador = 0;
  for (n1 in arrNumbers) {
    if (arrNumbers[n1] > maiorNum) {
      maiorNum = arrNumbers[n1];
    }
  }
  for (n2 in arrNumbers) {
    if (arrNumbers[n2] === maiorNum) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let mouseCat1 = Math.abs(cat1 - mouse);
  let mouseCat2 = Math.abs(cat2 - mouse);

  if (mouseCat1 < mouseCat2) {
    return 'cat1';
  } else if (mouseCat1 === mouseCat2) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrFizzBuzz) {
  // seu código aqui
  for (let n = 0; n < arrFizzBuzz.length; n += 1) {
    if (arrFizzBuzz[n] % 3 === 0 && arrFizzBuzz[n] % 5 === 0) {
      arrFizzBuzz[n] = 'fizzBuzz';
    } else if (arrFizzBuzz[n] % 3 === 0 && arrFizzBuzz[n] % 5 != 0) {
      arrFizzBuzz[n] = 'fizz';
    } else if (arrFizzBuzz[n] % 3 != 0 && arrFizzBuzz[n] % 5 === 0) {
      arrFizzBuzz[n] = 'buzz';
    } else {
      arrFizzBuzz[n] = 'bug!';
    }
  }
  return arrFizzBuzz;
}

// Desafio 9
function encode(strEncode) {
  // seu código aqui
  let encoded = '';
  encoded = strEncode.replace(/a/g, '1');
  encoded = encoded.replace(/e/g, '2');
  encoded = encoded.replace(/i/g, '3');
  encoded = encoded.replace(/o/g, '4');
  encoded = encoded.replace(/u/g, '5');
  return encoded;
}

encode('Projeto Playground Functions');

function decode(strDecode) {
  // seu código aqui
  let decoded = '';
  decoded = strDecode.replace(/1/g, 'a');
  decoded = decoded.replace(/2/g, 'e');
  decoded = decoded.replace(/3/g, 'i');
  decoded = decoded.replace(/4/g, 'o');
  decoded = decoded.replace(/5/g, 'u');
  return decoded;
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
