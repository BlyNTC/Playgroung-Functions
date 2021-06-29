// Desafio 1
function compareTrue(value1, value2) {
  if(value1 && value2)
    return true;
  else
    return false;
}

// Desafio 2
function calcArea(base, height) {
  return(base*height/2);  
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(stringArray) {
  return stringArray[stringArray.length -1].concat(', ' + stringArray[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3 + ties*1);
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];

  for(let index = 0; index < array.length; index += 1)
  {
    if (array[index] > maior)
      maior = array[index];
  }
  let contador = 0;
  for(let index in array)
  {
    if(array[index] === maior)
      contador += 1;
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(cat2 - mouse) === Math.abs(cat1 - mouse))
    return "os gatos trombam e o rato foge";
  else if(Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse))
    return "cat1";
  else
    return "cat2";
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

console.log(catAndMouse(0, -6, 6));