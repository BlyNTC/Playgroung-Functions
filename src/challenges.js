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
function highestCount(arrayValores) {

}
  // descobrir qual é o maior número no array 
  // retornar o numero de vezes que ele se repete


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
let resultado = [ ];
for (let index = 0; index < arrays.lenght; index +=1) {
  if (arrays[index] % 3 == 0 && arrays[index] % 5 != 0) {
    resultado.push('fizz');
  } else if (arrays[index] % 5 == 0 && arrays[index] % 3 != 0) {
    resultado.push('buzz');
  } else if (arrays[index] % 3 == 0 && arrays[index] % 5 == 0) {
    resultado.push('fizzBuzz');
  } else {
    resultado.push('bug!');
  }
}
return resultado;
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
