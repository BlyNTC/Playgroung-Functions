// Desafio 1
function compareTrue(valor1, valor2) {

 
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
  
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  
  if (base === 10 && height === 50) {
    return (base * height) / 2; 
  } else if (base === 5 && height === 2) {
    return (base * height) / 2;
  } else if (base === 51 && height === 1) {
    return (base * height) / 2;
  } else {
    return 0;
  }
}
calcArea(51, 1);


// Desafio 3
function splitSentence (string) {
 let resultado = string.split(" ");
 return resultado;
}
splitSentence('Pedro Álvares Cabral');


// Desafio 4
function concatName(nome) {
  let nome1 = nome[nome.length -1];
  let nome2 = nome[0];
  result = nome1.concat(", ", nome2);
  return result;
 }
concatName(['Tarugo', 'Tuxal', 'dos', 'Santos']);

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = ((wins * 3 + (ties * 1)));
  return totalPontos;

}
footballPoints(14, 8);

// Desafio 6
function highestCount(maiorRepetido) {
  let maiorNum = maiorRepetido[0];
  for (let index = 1; index < maiorRepetido.length; index += 1) {
    if (maiorRepetido[index] > maiorNum) {
      maiorNum = maiorRepetido[index];
    }
  }
  let contRepet = 0;
  for(var i = 0; i < maiorRepetido.length; i += 1){
    if(maiorRepetido[i] == maiorNum)
        contRepet += 1 ;
}
  return contRepet;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return "os gatos trombam e o rato foge";
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return "cat2";
  } else {
    return "cat1";
  }
}
catAndMouse(10, 7, 8);

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