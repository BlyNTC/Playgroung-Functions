// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area;

  area = (base * height) / 2;
  return area;
}


// Desafio 3
function splitSentence(frase) {
  let palavra;
  palavra = frase.split(" ");

  return palavra;
}

// Desafio 4
function concatName(info) {
  let primeiroElemento = info.shift();
  let ultimoElemento = info.pop();

  return ultimoElemento + ', ' + primeiroElemento;
}

// Desafio 5
function footballPoints(vitorias, empates) {
  let ponto = 0;
  let vitor = 0;
  let empate = 0;

  for (let i = 0; i < vitorias; i += 1) {
    vitor += 3;
  }

  for (let i = 0; i < empates; i += 1) {
    empate += 1;
  }
  ponto = vitor + empate;

  return ponto;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let contador = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (maior < array[i]) {
      maior = array[i];
    }
  }

  for (let i = 0; i < array.length; i += 1) {
    if (maior === array[i]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 === mouse - cat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (mouse - cat1 > mouse - cat2) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];

  for (let key in array) {
  
    if ( array[key] % 3 === 0 && array[key] % 5 != 0 ) {
      resultado.push('fizz');
    } else if ( array[key] % 5 === 0 && array[key] % 3 === 0 ) {
      resultado.push('fizzBuzz');
    } else if ( array[key] % 5 === 0 ) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}






// Desafio 9
function encode(str) {
  let string = str;
  for(let i = 0; i < string.length; i +=1){
    string = string.replace('a','1')
    string = string.replace('e','2')
    string = string.replace('i','3')
    string = string.replace('o','4')
    string = string.replace('u','5')
  }
return string;
}

function decode(str) {
  let string = str;
  for(let i = 0; i < string.length; i +=1){
    string = string.replace('1','a')
    string = string.replace('2','e')
    string = string.replace('3','i')
    string = string.replace('4','o')
    string = string.replace('5','u')
  }
return string;
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
