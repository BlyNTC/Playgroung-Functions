// Desafio 1
function compareTrue(arg1, arg2) {
  if (arg1 && arg2) {
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
  let separator = " ";
  let arrayOfStrings = string.split(separator);

  return arrayOfStrings;

}

// Desafio 4
function concatName(array) {
  let nameConcat = `${array[array.length - 1]}, ${array[0]}`;
  return nameConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3 + ties);
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let highest = array[0]; 
  
  for (let i = 0; i < array.length; i+=1) {
    if (array[i] >= highest) {
      highest = array[i];
    };
  };
  for (let value of array) {
    if (value === highest) {
      count+=1;
    };
  };

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1Mouse = mouse - cat1;
  let distanceCat2Mouse = mouse - cat2;

  if (distanceCat1Mouse < 0) {
    distanceCat1Mouse = (-1)*distanceCat1Mouse;
  };
  if (distanceCat2Mouse < 0) {
    distanceCat2Mouse = (-1)*distanceCat2Mouse;
  };

  if (distanceCat1Mouse > distanceCat2Mouse) {
    return 'cat2';
  } else if (distanceCat2Mouse > distanceCat1Mouse) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  };
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFB = [];
  for (let value of array) {
    if (value % 3 == 0 && value % 5 == 0){
      arrayFB.push("fizzBuzz");
    } else if (value % 3 == 0) {
      arrayFB.push("fizz");
    } else if (value % 5 == 0){
      arrayFB.push("buzz");
    } else {
      arrayFB.push("bug!")
    };
  };

  return arrayFB;
}

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
