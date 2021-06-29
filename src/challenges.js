// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a == true && b == true){
    result = true;
  }
  else{
    result = false;
  }
return result;
}
// Desafio 2
function calcArea(height, base) {
  // seu código aqui
  let area = (height * base) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let separada = frase.split(' ');
  return separada;
}


// Desafio 4
function concatName([array]) {
  // seu código aqui
  let primeiro = array[0];
  let ultimo = array[array.length - 1];
  let result = ultimo + primeiro;
  return result;
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function highestCount() {
  // seu código aqui

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ( Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))){
    return 'cat1';
  }
  else if ( Math.abs((cat2 - mouse)) < Math.abs((cat1 - mouse))){
    return 'cat2';
  }
  else{
    return 'os gatos trombam e o rato foge';
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
