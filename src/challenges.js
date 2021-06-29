// Desafio 1
function compareTrue(valor1, valor2) {
  let absoluto;
  if (valor1 === true && valor2 === true) {
    absoluto = true;
  }
  else {
    absoluto = false;
  }
  return absoluto;
}

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(frase) {
  let palavra = frase.split(' ');
  return palavra;
}

// Desafio 4
function concatName(nomes) {
  let nome = [];
  nome.push(nomes[nomes.length - 1]); // Ultimo Item
  nome.push(nomes[0]);                // Primeiro item
  let nomeForm = nome.join(', ')      // Juntanto
  return nomeForm;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoint = tiesPoint = 0;
  for (let iw = 1; iw <= wins; iw++) {
    winsPoint += 3;
  }
  for (let it = 1; it <= ties; it++) {
    tiesPoint++;
  }
  let total = winsPoint + tiesPoint;
  return total;
}

// Desafio 6
function highestCount(sequencia) {
  // seu código aqui
  let numComp = sequencia[0];
  // Achar o Maior:
  for (let times = 0; times <= sequencia.length - 1; times++) { 
    if (sequencia[times] >= numComp) {
      numComp = sequencia[times];
    }
  }
  // Qtas vezes tem o maior:
  let point = 0;
  for (let times = 0; times <= sequencia.length - 1; times++) {
    if (numComp === sequencia[times]) {
      point++
    }
  }
  return point;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = Math.abs(cat1 - mouse);
  let mouseCat2 = Math.abs(cat2 - mouse);
  if (mouseCat1 > mouseCat2) {
    return "cat2";
  }
  else if (mouseCat1 < mouseCat2) {
    return "cat1";
  }
  else {
    return "os gatos trombam e o rato foge";
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
