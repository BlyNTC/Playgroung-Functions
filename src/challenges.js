// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2? true : false;
};

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
};

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
};

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
};

// Desafio 6
function highestCount(array) {
  let highest;
  let result = 0;
  for(let num of array){
    if(!highest) highest = num;
    else if (highest < num) highest = num;
  };
  for(let num of array){
    if(num === highest) result += 1;
  };
  return result;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(mouse - cat1)> Math.abs(mouse - cat2)) return "cat2";
  else if(Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) return "os gatos trombam e o rato foge";
  else return "cat1";
};

// Desafio 8
function fizzBuzz() {
  // seu código aqui
};

// Desafio 9
function encode() {
  // seu código aqui
};
function decode() {
  // seu código aqui
};

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
