// Desafio 1
function compareTrue(a,b) { //a=false b=true
  if (a === true && b === true) { 
    return true;
  }
  return false;
  }

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2
}
calcArea(10, 50)
calcArea(5,2)
calcArea(51,1)


// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  console.log(frase.split(' '));
return frase.split(' ');
}
splitSentence('go Trybe')
splitSentence('vamo que vamo')
splitSentence('foguete')

// Desafio 4
function concatName(palavras) {
  // seu código aqui
  let ultimaPalavra = palavras[palavras.length - 1];
  let primeiraPalavra = palavras[0];
  console.log(ultimaPalavra + ', ' + primeiraPalavra);
  return ultimaPalavra + ', ' + primeiraPalavra;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])
concatName(['foguete', 'não', 'tem', 'ré'])
concatName(['captain', 'my', 'captain'])

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let valor1 = 3;
  let valor2 = 1;
   let resultadoWins = valor1 * wins;
   let resultadoTies = valor2 * ties;
  let resultadoFinal = resultadoWins + resultadoTies;
    console.log(resultadoFinal);
    return resultadoFinal;
}
footballPoints(14,8)
footballPoints(1,2)
footballPoints(0,0)


// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  for (let indice = 0; indice < numeros.length; indice += 1) {
  if ( numeros[indice] > numeros[indice + 1]) { // 1 > 6
    let numeroMaior = numeros[indice];
  } else {
    numeroMaior = numeros[indice + 1];
  }
}
console.log(numeroMaior);
return numeroMaior;
}
highestCount([9, 1, 2, 3, 9, 5, 7])
highestCount([0, 4, 4, 4, 9, 2, 1])
highestCount([0, 0, 0])

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
