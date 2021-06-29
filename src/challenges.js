// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let frase = array[array.length -1] + ", " + array[0];
  return frase;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maior;
  let repete = 0;
  for (let index in array) {
    if (index == 0) {
      maior = array[index]
    }
    else if (maior < array[index]) {
      maior = array[index]
    } 
  }
  for (let index of array) {
    if (maior === index) {
      repete += 1;
    }
  }
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let d1 = Math.abs(cat1 - mouse);
  let d2 = Math.abs(cat2 - mouse);
  if (d1 < d2) {
    return "cat1";
  } else if (d2 < d1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let lista = [];
  for (let index of array) {
    if (index % 3 === 0 && index % 5 === 0) {
      lista.push('fizzBuzz');
    } else if (index % 3 === 0) {
      lista.push('fizz');
    } else if (index % 5 === 0) {
      lista.push('buzz');
    } else {
      lista.push('bug!');
    }
  }
  return lista;
}

// Desafio 9
function encode(oi) {
  let array = oi.split("");
  for (let index in array){
    if (array[index] === 'a') {
      array[index] = 1;
    } else if (array[index] === 'e') {
      array[index] = 2;
    } else if (array[index] === 'i') {
      array[index] = 3;
    } else if (array[index] === 'o') {
      array[index] = 4;
    } else if (array[index] === 'u') {
      array[index] = 5;
    }
  }
  let junto = array.join('');
  return junto;
}

function decode(oi) {
  let array = oi.split("");
  for (let index in array){
    if (array[index] === '1') {
      array[index] = 'a';
    } else if (array[index] === '2') {
      array[index] = 'e';
    } else if (array[index] === '3') {
      array[index] = 'i';
    } else if (array[index] === '4') {
      array[index] = 'o';
    } else if (array[index] === '5') {
      array[index] = 'u';
    }
  }
  let junto = array.join('');
  return junto;
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
