// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(array) {
  let size = array.length;
  let concatenation = array[size - 1] + ', '  + array[0];
  return concatenation;
}

// Desafio 5
function footballPoints(wins, ties) {
  let sum = (wins * 3) + ties;
  return sum;
}

// Desafio 6
function highestCount(array) {
  let higher = array[0];
  let qt = 0;
  for (let num of array) {
    if (higher < num) {
      higher = num;
    }
  }
  for (let elem of array) {
    if (elem === higher) {
      qt += 1;
    }
  }
  return qt;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let answer = "";
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse); 
  if (distance1 > distance2) {
    answer = "cat2";
  }
  else if (distance1 < distance2) {
    answer = "cat1";
  }
  else {
    answer = "os gatos trombam e o rato foge";
  }
  return answer;
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
