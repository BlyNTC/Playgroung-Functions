// Desafio 1
function compareTrue(num1, num2) {

  if (num1 && num2)
    return true;
  else 
    return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 2;
  return base * height / 2;
  
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
  
}

// Desafio 4
function concatName(string) {
  return string[string.length -1] + ", " + string[0];
  
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos

}

// Desafio 6
function highestCount() {
  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dCat1 = Math.abs(cat1 - mouse);
  let dCat2 = Math.abs(cat2 -mouse);

  if (dCat1 < dCat2) {
    return 'cat1';
  }else  if (dCat2 < dCat1) {
    return 'cat2';
  }else {
    return'os gatos trombam e o rato foge';
  }
}


// Desafio 8
function fizzBuzz() {
  
}

// Desafio 9
function encode() {
  
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
