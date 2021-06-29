// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ');
}

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  let primeiroNome = nomes[0];
  let ultimoNome = nomes[nomes.length - 1];
  
  return (ultimoNome +', '+ primeiroNome);

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let vezes = 0;
  let numMaior = numeros[0];
  for(let index = 1; index < numeros.length; index += 1) {
    if(numMaior < numeros[index]) {
      numMaior = numeros[index];
    }
    else {
      numMaior = numMaior;
    }
  }
  for(let cont = 0; cont < numeros.length; cont += 1) {
    if(numMaior === numeros[cont]) {
      let vezes = vezes + 1;
    }
    else {
      vezes = vezes;
    }
  }
  return numMaior;
  return vezes;
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
