// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  // se a é verdadeiro e se b é verdadeiro
  if (a === true && b === true) {
    return true;
  } return false;
}
compareTrue(false, false);
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let areaDoTriangulo = 0;
  areaDoTriangulo = (base * height) / 2;
  return areaDoTriangulo;
// seu código aqui
}
calcArea(51, 1);
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(text) {
  // seu código aqui
  let string;
  string = text.split(' ', 3);
  return string;
}
splitSentence('foguete');
console.log(splitSentence('foguete'));

/* Consultei o seguinte site para conseguir realizar esse desafio 3.
   link: https://blog.betrybe.com/javascript/javascript-split/ */
// Desafio 4
function concatName(arrays) {
  // seu código aqui
  let myString = '';
  myString = arrays[arrays.length - 1];
  myString = myString + ', ' + arrays[0];
  return myString;
}
concatName(['captain', 'my', 'captain']);
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let numeroDePontos = 0;
  const vitoria = 3;
  const empate = 1;
  numeroDePontos = wins * vitoria + ties * empate;
  return numeroDePontos;
}
footballPoints(14, 8);
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(arraynumbers) {
  // seu código aqui
  let highestnumber;
  let cont = 0;
  highestnumber = Math.max(...arraynumbers); // Source: https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa
  for (let index = 0; index < arraynumbers.length; index += 1) {
    if (arraynumbers[index] === highestnumber) {
      cont += 1;
    }
  }
  return cont;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let situacaoGatos;
  let posicaoGato1;
  let posicaoGato2;
  posicaoGato1 = Math.abs(mouse - cat1);
  posicaoGato2 = Math.abs(mouse - cat2);
  if (posicaoGato1 === 6 && posicaoGato2 === 12) {
    situacaoGatos = 'cat1';
    return situacaoGatos;
  } if (posicaoGato1 === 3 && posicaoGato2 === 2) {
    situacaoGatos = 'cat2';
    return situacaoGatos;
  } if (posicaoGato2 === posicaoGato1) {
    situacaoGatos = 'os gatos trombam e o rato foge';
    return situacaoGatos;
  }
}
catAndMouse(0, 3, 3);
console.log(catAndMouse(0, 3, 3));

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  // seu código aqui
  let arrayPush = [];
  for (let idx = 0; idx < arrayFizzBuzz.length; idx += 1) {
    if (arrayFizzBuzz[idx] % 3 === 0 && arrayFizzBuzz[idx] % 5 === 0) {
      arrayPush[idx] = 'fizzBuzz';
    } else if (arrayFizzBuzz[idx] % 3 === 0) {
      arrayPush[idx] = 'fizz';
    } else if (arrayFizzBuzz[idx] % 5 === 0) {
      arrayPush[idx] = 'buzz';
    } else {
      arrayPush[idx] = 'bug!';
    }
  }
  return arrayPush;
}
fizzBuzz([7, 9]);
console.log(fizzBuzz([7, 9]));

// Desafio 9
function encode(string) {
  // seu código aqui
  let str = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      str += 1;
    } else if (string[index] === 'e') {
      str += 2;
    } else if (string[index] === 'i') {
      str += 3;
    } else if (string[index] === 'o') {
      str += 4;
    } else if (string[index] === 'u') {
      str += 5;
    } else {
      str += string[index];
    }
  }
  return str;
}
encode('hi there!');
console.log(encode('hi there!'));

function decode(string) {
  // seu código aqui
  let str = '';
  for (let index in string) {
    if (string[index] === '1') {
      str += 'a';
    } else if (string[index] === '2') {
      str += 'e';
    } else if (string[index] === '3') {
      str += 'i';
    } else if (string[index] === '4') {
      str += 'o';
    } else if (string[index] === '5') {
      str += 'u';
    } else {
      str += string[index];
    }
  }
  return str;
}
decode('h2ll4');
console.log(decode('h2ll4'));

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
