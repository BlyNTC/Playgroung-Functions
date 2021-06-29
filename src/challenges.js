// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true
  } else {
    return false
  } 
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2
  return area
}

// Desafio 3
function splitSentence(phraseSplit) {
  return phraseSplit(" ")
  // seu código aqui
}

// Desafio 4
function concatName(nome) {
  return nome[0]+','+' '+ nome[n - 1]
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  switch (wins, ties) {
    case wins:
      pontos += 3
      break
    case ties:
      pontos += 1
      break
  }
  return pontos
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  let palavras = {}; //Cria um array para receber as palavras conforme a divisibilidade do número
  let palavra = 0 //Cria a variável palavra para ser alterada e adicionada no array palavras conforme o andamento do código
  for (numero of numeros) { //Comando que faz o código analisar elemento por elemento do array recebido
    switch (numeros) { // Comando que configura a palavra recebida conforme a divisibilidade do elemento analisado e adiciona ao array palavras
      case numero % 3 === 0:
        palavra = 'fizz'
        palavras.palavra.push()
        break
      case numero % 5 === 0:
        palavra = 'buzz'
        palavras.palavra.push()
        break
      case (numero % 3 === 0) && (numero % 5 === 0):
        palavra = 'fizzBuzz'
        palavras.palavra.push() 
        break
      default:
        palavra = 'bug!'
        palavras.palavra.push()
        break
    }
  return palavras
  }  
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
