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
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(a) {
  return a.split(' ');
}

// Desafio 4
function concatName(palavras) {
  let ultimoItem = palavras[palavras.length-1];
  let primeiroItem = palavras[0];
  let resultado = ultimoItem + ', ' + primeiroItem;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos; 
}

// Desafio 6

function highestCount(parametro) {

 let contagem = 0;
 let highest = parametro[0];
 for (let index = 0; index < parametro.length; index += 1) {
   if (parametro[index] > highest) {
     highest = parametro[index];
    }
  }
  for (let index = 0; index < parametro.length; index += 1) {
    if (parametro[index] === highest) {
      contagem += 1;
    }
  }
    return contagem;
  }


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)){
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrays) {
  let string = [];
  for (let number of arrays) {
    if (number % 3 === 0 && number % 5 === 0) {
      string.push('fizzBuzz');
    } else if (number % 3 === 0) {
      string.push('fizz');
    } else if (number % 5 === 0) {
      string.push('buzz');
    } else {
      string.push('bug!');
    }
  }
  return string;
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
