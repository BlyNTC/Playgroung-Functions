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
function encode(string) {
  let vMinuscula = "";
  switch (vMinuscula) {
    case 'a':
      vMinuscula += 1;
      break;
    case 'e':
      vMinuscula += 2;
      break;
    case 'i':
      vMinuscula += 3;
      break;
    case 'o':
      vMinuscula += 4;
      break;
    case 'u':
      vMinuscula += 5;
      break;
  }
  return vMinuscula;
}

function decode(string) {
  let number = "";
  switch (number) {
    case 1:
      number = 'a';
      break;
    case 2:
      number = 'e';
      break
    case 3:
      number = 'i';
      break;
    case 4:
      number = 'o';
      break;
    case 5:
      number = 'u';
      break
  }
  return number;
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
