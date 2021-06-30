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
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4 OK
function concatName(array) {
  // seu código aqui
  let primeiroItem = array[0];
  let ultimoItem = array[array.length - 1];
  return ultimoItem.concat(', ', primeiroItem);
}

// Desafio 5 OK
function footballPoints(wins, ties) {
  // seu código aqui
  const vitoria = 3;
  const empate = 1;
  return ((wins * vitoria) + (ties * empate));
}

// Desafio 6 OK
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

// Desafio 7 NÃO
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // if ((mouse - cat1) < (mouse - cat2)) {
  //   return 'cat1';
  // }
  // if ((mouse - cat1) === (mouse - cat2)) {
  //   return 'os gatos trombam e o rato foge';
  // }
  // if ((mouse - cat1) > (mouse - cat2)) {
  //   return 'cat2';
  // }
}
// console.log(catAndMouse(20, 17, 18));

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  // let resultado = [];

  for (let index = 0; index < string.length; index += 1) {
    if (array[index] % 3 === 0) {
      array[index] = ('fizz');
    } else {
      array[index] = ('nothing');
    }
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
