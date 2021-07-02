// Desafio 1
function compareTrue(fristValue, secondValue) {
  // seu código aqui
    if (fristValue === true && secondValue === true){
      return true;} else { return false};
  }

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) /2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array1) {
  // seu código aqui
  let ultimoItem = array1[array1.length - 1];
  let primeiroItem = array1[0];
  return ultimoItem.concat(', ', primeiroItem);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = (wins * 3) + ties
  return result
}

// Desafio 6
function highestCount(array2) {
  // seu código aqui
let repeticao = 0;
let heigiestNumb = Math.max(...array2);
for (let index = 0; index < array2.length; index += 1){
  if (heigiestNumb === array2[index]) {
    repeticao+=1;
  }
}
return repeticao
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
      let distanciaCat1 = Math.abs(cat1 - mouse);
    let distanciaCat2 = Math.abs(cat2 - mouse);
    let gato;
    if (distanciaCat1 < distanciaCat2) {
      gato = 'cat1';
    } else if (distanciaCat2 < distanciaCat1) {
      gato = 'cat2';
    } else {
      gato = 'os gatos trombam e o rato foge';
    }
    return gato;

}

// Desafio 8
function fizzBuzz(array3) {
  // seu código aqui
  let string = []
  for (index = 0; index < array3.length; index +=1) {
    if(array3[index] % 3 === 0 && array3[index]% 5 ===  0){
      string.push ("fizzBuzz")
    } else if (array3[index] % 3 === 0) {
    string.push ("fizz")
  } else if (array3[index] % 5 === 0 ){
    string.push ("buzz")
  } else {string.push("bug!")}
}
return string;
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
