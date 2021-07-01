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

// Desafio 7 OK
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8 OK
function fizzBuzz(array) {
  // seu código aqui
  let resultado = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0) {
      resultado[index] = 'fizz';
    }
    if (array[index] % 5 === 0) {
      resultado[index] = 'buzz';
    }
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultado[index] = 'fizzBuzz';
    }
    if (array[index] % 3 != 0 && array[index] % 5 != 0) {
      resultado[index] = 'bug!';
    }
  }
  return resultado;
}

// Desafio 9 OK
function encode(stringEncode) {
  // seu código aqui
  let codificada = '';
  codificada = stringEncode.replace(/a/g, '1');
  codificada = codificada.replace(/e/g, '2');
  codificada = codificada.replace(/i/g, '3');
  codificada = codificada.replace(/o/g, '4');
  codificada = codificada.replace(/u/g, '5');
  return codificada;
}
// console.log(encode('hi there'));

function decode(stringDecode) {
  // seu código aqui
  let decodificada = '';
  decodificada = stringDecode.replace(/1/g, 'a');
  decodificada = decodificada.replace(/2/g, 'e');
  decodificada = decodificada.replace(/3/g, 'i');
  decodificada = decodificada.replace(/4/g, 'o');
  decodificada = decodificada.replace(/5/g, 'u');
  return decodificada;
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
