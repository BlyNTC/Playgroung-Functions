// Desafio 1
function compareTrue(valor1, valor2) {
  if (Boolean(valor1) === true && Boolean(valor2) === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(area, height) {
  let output = area * height / 2;
  return output;
}
// Desafio 3
function splitSentence(string) {
  let outputArray = [];
  let palavra;
  let indexDoEspacoDeRetomada = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      for (let index2 = indexDoEspacoDeRetomada; index2 < index; index2 += 1) {
        palavra = palavra + string[index2];
      }
      outputArray.push(palavra);
      indexDoEspacoDeRetomada = index + 1
    } else if (index === string.length - 1) {
      for (let index2 = indexDoEspacoDeRetomada; index2 <= string.length - 1; index2 += 1) {
        palavra = palavra + string[index2];
      }
      outputArray.push(palavra);
    }
    palavra = '';
  }
  return outputArray;
}
console.log(splitSentence('vamo que vamo'))
// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0]
}
// Desafio 5
function footballPoints(win, ties) {
  let pontosVitorias = win * 3;
  let pontosEmpates = ties * 1;
  return (pontosVitorias + pontosEmpates);
}
// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let output = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > array[index + 1]) {
      if (maiorNumero < array[index])
        maiorNumero = array[index]
    } else if (array[array.length - 1] > maiorNumero) {
      maiorNumero = array[array.length - 1]
    }
  }
  for (let index in array) {
    if (maiorNumero === array[index]) {
      output += 1
    }
  }
  return (output);
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1;
  let distanciaCat2;
  if (mouse === 0) {
    distanciaCat1 = cat1 - mouse;
    distanciaCat2 = cat2 - mouse;
  } else {
    distanciaCat1 = mouse - cat1;
    distanciaCat2 = mouse - cat2;
  }
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else {
    return ("os gatos trombam e o rato foge")
  }
}
// Desafio 8
function fizzBuzz(array) {
  let arrayOutPut = []
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayOutPut.push("fizzBuzz");
    } else if (array[index] % 3 === 0) {
      arrayOutPut.push("fizz");
    } else if (array[index] % 5 === 0) {
      arrayOutPut.push("buzz")
    } else {
      arrayOutPut.push("bug!")
    }
  }
  return arrayOutPut
}
// Desafio 9
function encode(string) {
  let outputString = '';
  for (let i of string) {
    if (i === 'a') {
      outputString += '1';
    } else if (i === 'e') {
      outputString += '2';
    } else if (i === 'i') {
      outputString += '3';
    } else if (i === 'o') {
      outputString += '4';
    } else if (i === 'u') {
      outputString += '5';
    } else {
      outputString += i;
    }
  }
  return outputString;
}

function decode(string) {
  let outputString = '';
  for (let i of string) {
    if (i === '1') {
      outputString += 'a';
    } else if (i === '2') {
      outputString += 'e';
    } else if (i === '3') {
      outputString += 'i';
    } else if (i === '4') {
      outputString += 'o';
    } else if (i === '5') {
      outputString += 'u';
    } else {
      outputString += i;
    }
  }
  return outputString
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
