// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(concatArray) {
  let ultimaString = concatArray.length - 1;
  return concatArray[ultimaString] + ', ' + concatArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (3 * wins) + (1 * ties);
  return pontos;
}

// Desafio 6
// Utilizamos o spread(...) para quebrar o array - w3.
function highestCount(Array) {
  let numeroMaximo = Math.max(...Array);
  let repetições = 0;
  for(let index =0; index < Array.length; index += 1) {
    if (numeroMaximo === Array[index]) {
      repetições += 1;
    }
  }
  return repetições;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  posicaoCat1 = Math.abs(mouse - cat1);
  posicaoCat2 = Math.abs(mouse - cat2);

  if (posicaoCat1 < posicaoCat2 ) {
    return 'cat1';
  } if (posicaoCat1 > posicaoCat2) {
    return 'cat2';
  } if (posicaoCat1 === posicaoCat2) {
    return 'os gatos trombam e o rato foge';
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
