// Desafio 1 OK
function compareTrue(valor1, valor2) {
  // seu código aqui
  // na monitoria Ítalo explicou que todas essas linhas de código podem ser substituidas por
  // "return valor1 && valor2" pq, quando os parâmetros são booleanos a comparação fica restrira a true e false
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2 OK
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3 OK
function splitSentence(string = []) {
  // seu código aqui
  for (caractere of string) {
    return string.split(' ');
  }
}

// Desafio 4 NÃO
function concatName(array) {
  //   // seu código aqui
  //   let primeiroItem = array;
  //   let ultimoItem = array[array.lenght - 1];
  //   let result = ultimoItem.concat(primeiroItem, ', ');
  //   return result;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5 OK
function footballPoints(wins, ties) {
  // seu código aqui
  let vitoria = 3;
  let empate = 1;
  return ((wins * vitoria) + (ties * empate));
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maior = numeros[0];
  let contador = 0;
  for (let index = 0; index <= numeros.length; index += 1) {
    if (numeros[index] > maior) {
      maior = numeros[index];
    }
  }
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] === maior) {
      contador += 1;
    }
  }
  return contador;
}
console.log(highestCount([0, 0, 0]));

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
