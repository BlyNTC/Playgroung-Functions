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
function highestCount(valores) {

  let maiorValor = valores[0];
  let numeroRepeticoes = 0;

  for ( indexMaiorValor = 0; indexMaiorValor < valores.length; indexMaiorValor += 1 ) {

    if ( valores[indexMaiorValor] > maiorValor ) { 

      maiorValor = valores[indexMaiorValor];

    } 

  }

  for ( indexRepeticao = 0; indexRepeticao < valores.length; indexRepeticao += 1 ) {

    if ( maiorValor === valores[indexRepeticao]) { 

      numeroRepeticoes += 1

    }

  }

  return numeroRepeticoes;
  // seu código aqui
}

highestCount([11, 9, 11, 11, 9, 11, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  cat1AndMouseDistance = Math.abs(cat1 - mouse);
  cat2AndMouseDistance = Math.abs(cat2 - mouse);



  if (cat1AndMouseDistance === cat2AndMouseDistance) {

return "os gatos trombam e o rato foge";

} else if ( cat2AndMouseDistance < cat1AndMouseDistance ) {
  
  return "cat2"


} else if (cat1AndMouseDistance < cat2AndMouseDistance) {

    return "cat1"
}

}

catAndMouse(10, 8, 8)

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
