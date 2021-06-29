// Desafio 1
function compareTrue(primeiro, segundo) {
  // seu código aqui
  let result;

  if (primeiro && segundo) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  let result = (base * heigth)/2;

  return result;
}

// Desafio 3
function splitSentence(words) {
  // seu código aqui
  let arrayOfStrings = words.split(' ');

  return arrayOfStrings;
}

// Desafio 4
function concatName(name) {
  // seu código aqui
  let result = (`${name[name.length-1]}, ${name[0]}`);

  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = ((wins*3)+ties);

  return result;
}

// Desafio 6
function highestCount(highest) {
  // seu código aqui
  let highestNumber = -Infinity, counter = 0;

  for (let high of highest) {
    if (high > highestNumber) {
      highestNumber = high;
    }
  }

  for (let high of highest) {
    if (high === highestNumber) {
      counter += 1;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1, distanceCat2, result;

  if (mouse < cat1) {
    distanceCat1 = mouse - cat1;
  } else {
    distanceCat1 = cat1 - mouse;
  } 

  if (mouse < cat2) {
    distanceCat2 = mouse - cat2;
  } else {
    distanceCat2 = cat2 - mouse;
  } 

  if (distanceCat1 > distanceCat2) {
    result = "cat1";
  } else if (distanceCat1 == distanceCat2) {
    result = "os gatos trombam e o rato foge";
  } else {
    result = "cat2"
  }

  return result;
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let result = [];

  for (let number of numbers) {
    if ((number%3 === 0) && !(number%5 === 0)) {
      result.push('fizz');
    } else if ((number%5 === 0) && !(number%3 === 0)) {
      result.push('buzz');
    } else if ((number%3 === 0) && (number%5 === 0)) {
      result.push('fizzBuzz');
    } else if (!(number%3 === 0) && !(number%5 === 0)) {
      result.push('bug!')
    }
  }

  return result;
}

// Desafio 9
function encode(word) {
  // seu código aqui
  
}
function decode(word) {
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
