// Desafio 1
function compareTrue(num1, num2) {

  if (num1 && num2)
    return true;
  else 
    return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 2;
  return base * height / 2;
  
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
  
}

// Desafio 4
function concatName(string) {
  return string[string.length -1] + ", " + string[0];
  
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos

}

// Desafio 6
function highestCount(array) {
  let lista = Math.max.apply(null, array);
    let cont = 0
    for (let index = 0; index < array.length; index += 1)
        if (array[index] === lista)
            cont += 1
            return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dCat1 = Math.abs(cat1 - mouse);
  let dCat2 = Math.abs(cat2 -mouse);

  if (dCat1 < dCat2) {
    return 'cat1';
  }else  if (dCat2 < dCat1) {
    return 'cat2';
  }else {
    return'os gatos trombam e o rato foge';
  }
}


// Desafio 8
function fizzBuzz(number) {
  for (let index = 0; index < number.length; index += 1){
  if (number [index] % 3 === 0 && number[index] % 5 === 0)
    number[index] = 'fizzBuzz';
  else if (number [index] % 3 === 0) 
    number[index] = 'fizz';
  else if (number [index] % 5 === 0)
    number[index] = 'buzz';
  else 
    number [index] = 'bug!';
  }
  return number
}

// Desafio 9
function encode() {
  
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
