// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 === true && valor2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height)/2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(string) {
  let ultimo = string[string.length-1];
  let primeiro = string[0];
  let ultimoPrimeiro = ultimo +', ' + primeiro;
  return ultimoPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = wins * 3 + ties * 1;
  return totalPontos;
}

// Desafio 6
function highestCount(valores) {
  let maiorValor = -Infinity;
  let repeticao = 0;
  for (index = 0; index < valores.length; index +=1){
    if (valores[index] > maiorValor){
      maiorValor = valores[index];
    }
  }
  for (i = 0; i < valores.length; i += 1){
    if(valores[i] === maiorValor){
      repeticao += 1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let alcancouRato = "";
  let distanciaMouseCat1 = 0;
  let distanciaMouseCat2 = 0;
  if (mouse >= cat1){
    distanciaMouseCat1 = mouse - cat1;
  } else {
    distanciaMouseCat1 = cat1 - mouse;
  }
  if (mouse >= cat2){
    distanciaMouseCat2 = mouse - cat2;
  } else {
    distanciaMouseCat2 = cat2 - mouse;
  }
  if (distanciaMouseCat1 < distanciaMouseCat2){
    alcancouRato = "cat1";
  } else {
    alcancouRato = "cat2";
  }
  if (distanciaMouseCat1 === distanciaMouseCat2){
    alcancouRato = "os gatos trombam e o rato foge";
  }
  return alcancouRato;
}

// Desafio 8
function fizzBuzz(numeros) {
  let composicao = [];

  for (index = 0; index < numeros.length; index += 1){
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0){
      composicao.push('fizzBuzz');
    } else if (numeros[index] % 3 === 0){
        composicao.push('fizz');
    } else if (numeros[index] % 5 === 0){
        composicao.push('buzz');
    } else {
      composicao.push('bug!');
    }
  }
  return composicao;
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
