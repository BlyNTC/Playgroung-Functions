// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  };

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
  let output = name[name.length - 1] + ', ' + name[0];

  return output;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let output = 0;
  let higher = numbers[0];

  for (let value of numbers) { // determines higher value
    if (value > higher) {
      higher = value;
    }
  };

  for (let value of numbers) {
    if (value === higher) {
      output += 1;
    }
  };

  return output;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let output;
  let distance1 = Math.abs(mouse - cat1),
    distance2 = Math.abs(mouse - cat2);

  if (distance1 === distance2) {
    return "os gatos trombam e o rato foge";
  } else if (distance1 < distance2) {
    return 'cat1';
  } else {
    return 'cat2';
  };
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
