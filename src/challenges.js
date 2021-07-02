// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
  console.log(compareTrue(a, b))
}


// Desafio 2
function calcArea(base, height) {
  return base * height / 2
}

// Desafio 3
function splitSentence(string) {
  let split = string.split(' ');
  return split;
}

// Desafio 4
function concatName(juncao) {
  let elementoA = juncao[0];
  let elementoB = juncao[juncao.length - 1];
  let concat = elementoB + ', ' + elementoA;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}


// Desafio 6 - utiliza Function.prototype.apply() para encontrar o elemento de maior valor dentro do array. #fonte: https://developer.mozilla.org/
function highestCount(numeros) {
  let maior = Math.max.apply(null, numeros);
  let repete = 0;
  for (let i in numeros) {
    if (numeros[i] === maior) {
      repete += 1;
    }
  }
  return repete;
}

// Desafio 7 - A função Math.abs(x) retorna um valor positivo
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse)
  let distancia2 = Math.abs(cat2 - mouse)
  if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge'
  } else if (distancia1 < distancia2) {
    return 'cat1'
  } else {
    return 'cat2'
  }
}

// Desafio 8 // O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
function fizzBuzz(array) {
  let total = [];
  for (let index of array) {
    if (index % 3 === 0 && index % 5 === 0) {
      total.push('fizzBuzz');
    } else if (index % 5 === 0) {
      total.push('buzz');
    } else if (index % 3 === 0) {
      total.push('fizz');
    } else {
      total.push('bug!');
    }
  }
  return total;
}


// Desafio 9
function encode(string) {
  let nova = '';
  for (let index of string) {
    switch (index) {
      case 'a':
        nova += 1;
        break;
      case 'e':
        nova += 2;
        break;
      case 'i':
        nova += 3;
        break;
      case 'o':
        nova += 4;
        break;
      case 'u':
        nova += 5;
        break;
      default:
        nova += index
        break;
    }
  }
  return nova;
}

function decode(string) {
  let nova = '';
  for (let index of string) {
    switch (index) {
      case '1':
        nova += 'a';
        break;
      case '2':
        nova += 'e';
        break;
      case '3':
        nova += 'i';
        break;
      case '4':
        nova += 'o';
        break;
      case '5':
        nova += 'u';
        break;
      default:
        nova += index
        break;
    }
  }
  return nova;
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
