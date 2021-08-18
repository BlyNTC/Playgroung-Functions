// Desafio 1
function compareTrue(n1, n2) {
  if (n1 && n2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height;
  let area2 = area / 2;
  return area2;
}

// Desafio 3
function splitSentence(string) {
  let stringarray = string.split(' ');
  return stringarray;
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winpoints = wins * 3;
  let tiepoints = ties;
  return winpoints + tiepoints;
}

// Desafio 6
function highestCount(array) {
  let max = Math.max(...array);
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === max) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1d = cat1 - mouse;
  let cat2d = cat2 - mouse;
  let result = '';
  if (cat1d < 0) {
    cat1d *= -1;
  }
  if (cat2d < 0) {
    cat2d *= -1;
  }
  if (cat1d > cat2d) {
    result = 'cat2';
  } else if (cat1d < cat2d) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  const check = array.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) { return 'fizzBuzz'; }
    if (number % 3 === 0) { return 'fizz'; }
    if (number % 5 === 0) { return 'buzz'; }
    return 'bug!';
  });
  return check;
}

// Desafio 9
function encode(string) {
  const newstr = [...string].map((letter) => letter.replace('a', '1').replace('e', '2')
    .replace('i', '3')
    .replace('o', '4')
    .replace('u', '5'));
  return newstr.join('');
}

function decode(string) {
  const newstr = [...string].map((letter) => letter.replace('1', 'a').replace('2', 'e')
    .replace('3', 'i')
    .replace('4', 'o')
    .replace('5', 'u'));
  return newstr.join('');
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
