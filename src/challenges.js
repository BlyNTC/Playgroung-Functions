// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  return false;
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
  return (ultimoNome + ', ' + primeiroNome);
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

  if (gato1 === gato2) {
    return 'os gatos trombam e o rato foge';
  }
  else if (gato1 < gato2) {
    return 'cat1';
  }
  else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let test = [];
  for (let index = 0; index < numbers.length; index +=1) {
    if(numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      test.push("fizzBuzz");
    }
    else if (numbers[index] % 3 === 0) {
      test.push("fizz");
    }
    else if (numbers[index] % 5 === 0) {
      test.push("buzz");
    }
    else {
      test.push("bug!");
    }
  }
  return test;
}

// Desafio 9
function encode(string) {
  // Utilizado método replace() para substituir caracteres específicos.
  // Fonte de pesquisa: https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
  let stringEncode = string.replace(/a/g, "1").replace(/e/g, "2").replace(/i/g, "3").replace(/o/g, "4").replace(/u/g, "5");
  return stringEncode;
}

function decode(string2) {
  // Utilizado método replace() para substituir caracteres específicos.
  // Fonte de pesquisa: https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
  let stringDecode = string2.replace(/1/g, "a").replace(/2/g, "e").replace(/3/g, "i").replace(/4/g, "o").replace(/5/g, "u");
  return stringDecode;
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
