// Desafio 1
function compareTrue(comp1, comp2) {
  // seu código aqui
  let resultadoComparacao;
  if ((comp1 === true && comp2 === true)) {
    resultadoComparacao = true;
  } else {
    return false;
  }
  return resultadoComparacao;
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  let calculoArea = (base * height) / 2;

  return calculoArea;
}

// Desafio 3
function splitSentence(sentenca) {
  // seu código aqui
  let divisaoDeSentenca = sentenca.split(" ");
  return divisaoDeSentenca;
}
// Desafio 4
function concatName(nome) {
  // seu código aqui
  return nome[nome.length - 1] + "," + nome[0];
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}
// Desafio 6
function highestCount(array) {
  // seu código aqui
  // fonte: https://www.youtube.com/watch?v=8xqU_hXb-9k (math.max)
  let maiorNumero = Math.max(array)
  let contador = 0;
  for (index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
// seu código aqui
// fonte: https://www.youtube.com/watch?v=8xqU_hXb-9k (math.abs)

  let diffCat1 = Math.abs(mouse - cat1);

  let diffCat2 = Math.abs(mouse - cat2);

  if (diffCat1 === diffCat2) {

    return "os gatos trombam e o rato foge" 

  } else if (diffCat1 < diffCat2){

    return "cat1"
    
  }  else {

    return "cat2"
    
  }
}
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
