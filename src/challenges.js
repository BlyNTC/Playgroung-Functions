// Desafio 1
function compareTrue(a, b) {
  let res;
  if (a & b === a && b === a) {
    res = true;
    return res
  } else {
    res = false;
    return res
  }
}
// Desafio 2
function calcArea(base, height) {
  let calculo = base * height / 2;
  return calculo;
}

// Desafio 3
function splitSentence(text) {
  let separa = text.split(' ');
  return separa;
}

// Desafio 4
function concatName(array) {
  let conacat = [];
  let first = array[0];
  let last = array.slice(-1);
  conacat = last + ', ' + first
  return conacat
}

// Desafio 5
function footballPoints(wins, ties) {
  let conta = wins * 3 + ties
  return conta
}
// Desafio 6
function highestCount(array) {
  let maior = -10;
  let repete = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i]
      repete = 0;
    }
  } for (let index in array) {
    if (array[index] === maior) {
      repete += 1
    }
  }
  return repete
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let res = '';
  let gato1 = Math.abs(cat1 - mouse);
  let gato2 = Math.abs(cat2 - mouse);

  if (gato1 < gato2) {
    res = 'cat1';
  } else if (gato1 > gato2) {
    res = 'cat2'
  } else {
    res = "os gatos trombam e o rato foge"
  }
  return res;
}

// Desafio 8
function fizzBuzz(array) {
  let res = [];
    for (let i =0; i < array.length; i += 1) {
      if (array[i] % 3 === 0 && array[i] % 5 === 0 ) {
        res.push('fizzBuzz')
      } else if (array[i] % 5 === 0) {
        res.push('buzz') 
      } else if (array[i] % 3 === 0 ) {
        res.push('fizz')
      } else {
        res.push('bug!')
      }
    }
return res
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
