// Desafio 1
function compareTrue(a, t) {
  if (a === true && t === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(" "); // conhecimento por documentação
}

// Desafio 4
function concatName(arrayDeStrings) {
  return arrayDeStrings[arrayDeStrings.length - 1] + ', ' + arrayDeStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maxNumber = arrayNumbers[0];
  let count = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > maxNumber) {
      maxNumber = arrayNumbers[index];
    }

  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === maxNumber) {
      count += 1;
    }

  }
  return count;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ((cat1 - mouse) === (mouse - cat2)) {

    return ('os gatos trombam e o rato foge');
  } else if ((cat1 - mouse) < (cat2 - mouse)) {

    return ('cat1');
  } else {

    return ('cat2');
  }

}


// Desafio 8
function fizzBuzz(arrayNumbers) {
  let array = [];

  for (index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      array[index] = "fizzBuzz";
    }
    else if (arrayNumbers[index] % 5 === 0) {
      array[index] = "buzz";
    }
    else if (arrayNumbers[index] % 3 === 0) {
      array[index] = "fizz";
    }
    else {
      array[index] = "bug!";
    }
  } return array;

}

// Desafio 9
function encode(string) {
  let array = '';
  for (let index of string) {
    switch (index) {
    case 'a':
      array += 1;
      break;
    case 'e':
      array += 2;
      break;
    case 'i':
      array += 3;
      break;
    case 'o':
      array += 4;
      break;
    case 'u':
      array += 5;
      break;
    default:
      array += index;
    }
  }
  return (array);
}
function decode(string) {
  let array = '';
  for (let index of string) {
    switch (index) {
    case '1':
      array += 'a';
      break;
    case '2':
      array += 'e';
      break;
    case '3':
      array += 'i';
      break;
    case '4':
      array += 'o';
      break;
    case '5':
      array += 'u';
      break;
    default:
      array += index;
    }
  }
  return (array);
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