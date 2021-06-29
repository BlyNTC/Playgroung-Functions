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
  let numMaior = Math.max.apply(null, numeros);
  let vezes = 0;

  for (let index = 0; index < numeros.length; index += 1) {
    if (numMaior === numeros[index]) {
      vezes = vezes + 1;
    }
  }
  return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);

  if (gato1 == gato2) {
    console.log("os gatos trombam e o rato foge");
  }
  else if (gato1 < gato2) {
    console.log("cat1");
  }
  else {
    console.log("cat2");
  }
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
