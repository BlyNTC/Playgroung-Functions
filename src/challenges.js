//commit inicial

// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
 
  if ( valor1 === true && valor2 === true ) {

    return true;

  } else { 

    return false;
    
  
  }

}


// Desafio 2
function calcArea(base, height) {
 triangulo = (base * height) / 2

 return triangulo
}

calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);


// Desafio 3
function splitSentence(frase) {

  fraseDividida = frase.split(" ")

  return fraseDividida

  // seu código aqui
}

splitSentence('Go Trybe')

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  for (let key in nomes) {

    if ( nomes[0] === nomes[2])
    {
        return (nomes[0] + ', ' + nomes[2]);
    } else {

    return (nomes[3] + ', ' + nomes[0]);
    }
  }

}

concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins = wins * 3;
  ties = ties * 1;
  let resultado = wins + ties 

  return resultado;

}

footballPoints(1, 2)

// Desafio 6
function highestCount() {
  // seu código aqui
}

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
