// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let splitedSentence = sentence.split(' ');
  return splitedSentence;
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  let result = `${names[names.length - 1]}, ${names[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = wins * 3 + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(nums) {
  // seu código aqui
  let max = nums.reduce(function (a, b) { return Math.max(a, b); });
  let result = nums.filter(function (x) { return x === max; }).length;
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let diff1 = mouse - cat1;
  let diff2 = mouse - cat2;
  if (Math.abs(diff1) === Math.abs(diff2)) {
    return ('os gatos trombam e o rato foge');
  }
  if (Math.abs(diff1) > Math.abs(diff2)) {
    return ('cat2');
  }
  return ('cat1');
}

// Desafio 8
function fizzBuzz(numArray) {
  // seu código aqui
  let r = [];
  numArray.map((num) => (
    num % 3 === 0 ? num % 5 === 0 ? r.push('fizzBuzz') : r.push('fizz') : num % 5 === 0 ? r.push('buzz') : r.push('bug!')));

  return r;
}

// Desafio 9
console.log(encode('Hello World!'));
function encode(frase) {
  // seu código aqui
  let array = [];
  for (let c of frase) { array.push(c); }
  return array.reduce((result, letra) => (letra === 'a' ? result += '1' : letra === 'e' ? result += '2' : letra === 'i' ? result += '3' : letra === 'o' ? result += '4' : letra === 'u' ? result += '5' : result += letra));
}

function decode(frase) {
  // seu código aqui
  let array = [];
  for (let c of frase) { array.push(c); }
  return array.reduce((result, letra) => 
  (letra === '1' ? result += 'a' : letra === '2' ? result += 'e' : letra === '3' ? result += 'i' : letra === '4' ? result += 'o' : letra === '5' ? result += 'u' : result += letra));
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
