// Desafio 1
function compareTrue(bool1, bool2) {
  let output;
  if (bool1 === true && bool2 === true) {
    output = true;
  } else {
    output = false;
  }
  return output;
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(name) {
  let concatName = name[name.length - 1] + ', ' + name[0];
  return concatName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let output;
  let distance1 = Math.abs(mouse - cat1),
    distance2 = Math.abs(mouse - cat2);

  if (distance1 === distance2) {
    output = "os gatos trombam e o rato foge";
  } else {
    if (distance1 < distance2) {
      output = 'cat1';
    } else {
      output = 'cat2';
    }
  }
  return output;
}

// Desafio 8
function fizzBuzz(numbers) {
  let output = [];
  for (let number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) {
      output.push("fizzBuzz");
    } else if (number % 3 === 0) {
      output.push("fizz");
    } else if (number % 5 === 0) {
      output.push("buzz");
    } else {
      output.push("bug!");
    };
  };
  return output;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
