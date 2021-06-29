// BLOCO 04 - DIA - 5 - JavaScript - Playground Functions
// 29/06/21

// Desafio 1
function compareTrue(var1, var2) {
  if (var1 && var2) {
    return true;    
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return base*height/2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let word = '';
  for (let char of string) {
    if (char != ' ') {
      word += char;
    } else if (word != '') {
      array.push(word);
      word = '';
    }
  }
  if (word != '') {
    array.push(word);
  }
  return array;
}

// Desafio 4
function concatName(array) {
  let string = '';
  if (array.length >= 2 ) {
    let firstName = array.shift();
    let lastName = array.pop();
    string = lastName + ', ' + firstName;
  }  
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties;
}

// Desafio 6
function highestCount(array) {
  let biggerValue = Number.NEGATIVE_INFINITY;
  for (let number of array) {
    if (number > biggerValue) {
      biggerValue = number;      
    }
  }
  let count = 0;
  for (let number of array) {
    if (number === biggerValue) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  } else if ( distCat1 < distCat2 ) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let number of array) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
      result.push('fizzBuzz');
    } else if (number % 3 === 0) {
      result.push('fizz');
    } else if (number % 5 === 0 ) {
      result.push('buzz');
    } else {
      result.push('bug!')
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  //string = string.toLowerCase();
  let result = '';
  for (char of string) {
    switch (char) {
      case 'a':
        result += '1';
        break;
      case 'e':
        result += '2';
        break;
      case 'i':
        result += '3';
        break;
      case 'o':
        result += '4';
        break;
      case 'u':
        result += '5';
        break;
      default:
        result += char;        
    }
  }
  return result;
}

function decode(string) {
  //string = string.toLowerCase();
  let result = '';
  for (char of string) {
    switch (char) {
      case '1':
        result += 'a';
        break;
      case '2':
        result += 'e';
        break;
      case '3':
        result += 'i';
        break;
      case '4':
        result += 'o';
        break;
      case '5':
        result += 'u';
        break;
      default:
        result += char;        
    }
  }
  return result;
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

