// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true){
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(" ");
}

// Desafio 4
function concatName(arr) {
  let concat = arr[arr.length - 1] + ", " + arr[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(nums) {
  let i2 = 0;
  let soma = 0;
  for (let index = 0; index < nums.length; index += 1) {
    if (nums[i2] < nums[index]) {
        i2 = index;
    }
} 
for (let index2 = 0; index2 < nums.length; index2 += 1) {
    if (nums[index2] === nums[i2]) {
    soma = soma + 1;
    }
  } return soma;
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
