// Desafio 1
function compareTrue(bool1, bool2) {
  comp = bool1 && bool2;
  return comp;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let split = frase.split(' ');
  return split;
}

// Desafio 4
function concatName(arr) {
  return  (arr[arr.length - 1]+ ", " + arr[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(arr) {
  let order = arr.sort((a, b) => a - b);
  let maj = 0;
  for(i = 0; i <= arr.length; i++) {
    if (arr[i] === order[arr.length - 1]) {
      maj++;
    }
  }
  return maj;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) - Math.abs(mouse - cat2) == 0) {
    return ("os gatos trombam e o rato foge");
  } else {
    return cat1 > cat2 ? "cat2" : "cat1";
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
