// Desafio 1
function compareTrue(carbon, oxygen) {
  // seu código aqui
  let carbonmonoxyde;
  if (carbon == true && oxygen == true){
    return carbonmonoxyde = true;
  }
  else
  return carbonmonoxyde = false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triArea;
  triArea = base * height / 2;
  return triArea;
}
 
// Desafio 3
function splitSentence(word) {
  // seu código aqui
  let splitword = [];
  let cacheword = '';
  
  for(let key of word){
    if (key != ' '){
      cacheword += key;
    }
    else{
      splitword.push(cacheword);
      cacheword = '';
    }
  }
  splitword.push(cacheword);
  return splitword;
}

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
