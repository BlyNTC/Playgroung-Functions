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
function fizzBuzz(numArray) {
  let resposta = [];
  for (let num = 0; num <= numArray.length - 1; num++) {
    if (numArray[num] % 3 == 0) {
      if (numArray[num] % 5 == 0) {
        resposta.push("fizzBuzz");
      }
      else {
        resposta.push("fizz");
      }
    }
    else if (numArray[num] % 5 == 0) {
      resposta.push("buzz");
    }
    else {
      resposta.push("bug!");
    }       
  }
  return resposta;
}

// Desafio 9
function encode(frase) {
  return frase.replace(/a/ig,'1').replace(/e/ig,'2').replace(/i/ig,'3').replace(/o/ig,'4').replace(/u/ig,'5')
}
function decode(frase) {
  return frase.replace(/1/ig,'a').replace(/2/ig,'e').replace(/3/ig,'i').replace(/4/ig,'o').replace(/5/ig,'u')
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
