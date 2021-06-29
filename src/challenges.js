// Desafio 1
function compareTrue(boo1, boo2) {
  if(boo1 === true && boo2 === true) {
    return true;
  } else {
    return false;
  }
  // seu código aqui 
} //console.log(compareTrue(false,false))

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
  // seu código aqui
} //console.log (calcArea(51, 1))

// Desafio 3
function splitSentence(text) {
  const vetor = text.split(" ");
  return vetor;
  // seu código aqui
} //console.log(splitSentence('foguete'));

// Desafio 4
function concatName(words) {
  let firstLastWords = words[words.length - 1] + ", " + words[0];
  return firstLastWords;
  // seu código aqui
} //console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
  // seu código aqui
} //console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numbers) {
  let maior = 0;
  let conta = 0;
  for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] > maior) {
      maior = numbers[index];
    } 
  }
  for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] === maior) {
      conta = conta + 1; 
    }
  }
  return conta
  // seu código aqui
} //console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = mouse - cat1;
  let distancia2= mouse - cat2;
  if(distancia2 < distancia1) {
    return 'cat2';
  } else if(distancia2 > distancia1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge'
  }
  // seu código aqui
} console.log(catAndMouse(10, 5, 5));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
