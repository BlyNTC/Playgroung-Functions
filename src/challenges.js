// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true){
    return true;
  } else {
    return false;
  }
}

compareTrue(true, true);
compareTrue(true, false);
compareTrue(false, true);
compareTrue(false, false);

// Desafio 2
function calcArea(base, height) {
  return base * height / 2
}

calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);




// Desafio 3

function splitSentence(string) {
  let arrayDeStrings = [];
  arrayDeStrings = string.split(" ");
  return arrayDeStrings;
}

console.log(splitSentence("go Trybe"));
console.log(splitSentence("vamo que vamo"));
console.log(splitSentence("foguete"));


// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

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
