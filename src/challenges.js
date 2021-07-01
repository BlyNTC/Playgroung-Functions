// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(name) {
  return `${name[name.length - 1]}, ${name[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let output = 0;
  let highest;
  for (let value of numbers) {
    if (value === highest) {
      output += 1;
    } else if (highest === undefined || value > highest) {
      highest = value;
      output = 1;
    }
  }
  return output;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distance1 < distance2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numbers) {
  let output = [];
  for (let number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) {
      output.push('fizzBuzz');
    } else if (number % 3 === 0) {
      output.push('fizz');
    } else if (number % 5 === 0) {
      output.push('buzz');
    } else {
      output.push('bug!');
    }
  }
  return output;
}

// Desafio 9
function encode(sentence) {
  return sentence.replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
}

function decode(sentence) {
  return sentence.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
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
