// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true){
    return true;
  } else {
return false;
}
console.log(compareTrue(a, b))
}


// Desafio 2
function calcArea(base, height) {
  return base * height / 2
}

// Desafio 3
function splitSentence(string) {
  let split = string.split(' ');
  return split;
}

// Desafio 4
function concatName(juncao) { 
   let elementoA = juncao[0]; 
  let elementoB = juncao[juncao.length - 1];
  let concat = elementoB +  ', '  + elementoA;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
 return wins * 3 + ties * 1;
  }


// Desafio 6
function highestCount(numeros) {
  let maior = Math.max.apply(null,numeros);
  let repete = 0;
  for (let i in numeros) {
    if (numeros[i] === maior) {
      repete += 1;
    }
  }
  return repete;
} 



// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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
