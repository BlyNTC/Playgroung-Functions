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
function fizzBuzz(array) {
  let newArray = [];
  for(let number in array)
  {
    if(array[number]%3 === 0)
    {
      if(array[number]%5 === 0)
        newArray.push('fizzBuzz');
      else
      newArray.push('fizz');
    }else if(array[number]%5 === 0)
      newArray.push('buzz');
    else
      newArray.push('bug!'); 
  }

  return newArray;
}

// Desafio 9
function encode(frase) {
  let newString = '';
  for(let key in frase)
  {
    switch(frase[key])
    {
      case 'a':
        newString = newString + '1';
        break;
      case 'e':
        newString = newString + '2';
        break;
      case 'i':
        newString = newString + '3';
        break;
      case 'o':
        newString = newString + '4';
        break;
      case 'u':
        newString = newString + '5';
        break;
      default:
        newString = newString + frase[key];
    }
  }
  return newString;
}
function decode(frase) {
  let newString = '';
  for(let key in frase)
  {
    switch(frase[key])
    {
      case '1':
        newString = newString + 'a';
        break;
      case '2':
        newString = newString + 'e';
        break;
      case '3':
        newString = newString + 'i';
        break;
      case '4':
        newString = newString + 'o';
        break;
      case '5':
        newString = newString + 'u';
        break;
      default:
        newString = newString + frase[key];
    }
  }
  return newString;
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