// Desafio 1
function compareTrue(bool1, bool2) {
  if(bool1 === true && bool2 === true){
    return true;
  }else{
    return false;
  }
}
// Desafio 2
function calcArea(base, heigth) {
  return (base*heigth)/2;
}
// Desafio 3
function splitSentence(str) {
  var split = [];
  var aux = '';
  for(let i = 0; i<str.length; i+=1){
    if(str[i] === ' '){
      split.push(aux);
      aux = '';
    }
    else if (i == str.length-1){
      aux += str[i];
      split.push(aux);
      aux = '';
    }
    else{
      aux += str[i];
    }
  }
  return split;
}
// Desafio 4
function concatName(names) {
  let concat = names[names.length-1] + ', ' + names[0];
  return concat;
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = 3*wins + ties;
  return points;
}
// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let maior = numbers[0];

  for(i=0; i<numbers.length; i+=1){
    if(numbers[i] > maior){
      maior = numbers[i];
    }
  }
  for(i=0; i<numbers.length; i+=1){
    if(numbers[i] === maior){
      count += 1;
    }
  }
  return count;
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
