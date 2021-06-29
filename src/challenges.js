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
