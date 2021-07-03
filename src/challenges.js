// Desafio 1
function compareTrue(a, b) {
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
//calcArea(10, 50);
//calcArea(5, 2);
//calcArea(51, 1);

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ');
}
//splitSentence('go Trybe');
//splitSentence('vamo que vamo');
//splitSentence('foguete');

// Desafio 4
function concatName(palavras) {
  // seu código aqui
  let ultimaPalavra = palavras[palavras.length - 1];
  let primeiraPalavra = palavras[0];

  return ultimaPalavra + ', ' + primeiraPalavra;
}
//concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
//concatName(['foguete', 'não', 'tem', 'ré']);
//concatName(['captain', 'my', 'captain']);

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let valor1 = 3;
  let valor2 = 1;
  let resultadoWins = valor1 * wins;
  let resultadoTies = valor2 * ties;
  let resultadoFinal = resultadoWins + resultadoTies;

  return resultadoFinal;
}
//footballPoints(14, 8);
//footballPoints(1, 2);
//footballPoints(0, 0);

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let numeroMaior = -Infinity;
  let repeticaoNumeroMaior = 0;
  for (let indice = 0; indice < numeros.length; indice += 1) {
    console.log(numeros[indice]);
    if (numeroMaior < numeros[indice]) {
      numeroMaior = numeros[indice];
      repeticaoNumeroMaior = 0;
    }
    if (numeros[indice] === numeroMaior) {
      repeticaoNumeroMaior += 1;
    }
  }
  return repeticaoNumeroMaior;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);
//highestCount([0, 4, 4, 4, 9, 2, 1]);
//highestCount([0, 0, 0]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1ToMouse = Math.abs(mouse - cat1);
  let distanciaCat2ToMouse = Math.abs(mouse - cat2);
  if(distanciaCat1ToMouse < distanciaCat2ToMouse){
    return 'cat1';
  }
  if(distanciaCat2ToMouse < distanciaCat1ToMouse) {
    return 'cat2';
  }
  if(distanciaCat2ToMouse === distanciaCat1ToMouse) {
    return 'os gatos trombam e o rato foge';
  }
}
//catAndMouse(0, 3, 2);
//catAndMouse(0, 6, 12);
//catAndMouse();

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let arrayString = [];
  for (let indice = 0; indice < numeros.length; indice += 1) {
    if (numeros[indice] % 3 === 0 && numeros[indice] % 5 === 0) {
      arrayString.push('fizzBuzz');
      //console.log('fizzBuzz');
      continue;
    }
    if (numeros[indice] % 3 === 0) {
      arrayString.push('fizz');
      //console.log('fizz');
      continue;
    }
    if (numeros[indice] % 5 === 0) {
      arrayString.push('buzz');
      //console.log('buzz');
      continue;
    }
    arrayString.push('bug!');
    //console.log('bug!');
  }
  //console.log(arrayString);
  return arrayString;
}

//fizzBuzz([2, 15, 7, 9, 45]);
//fizzBuzz([7, 9]);
//fizzBuzz([9, 25]);

// Desafio 9
function encode(str) {
  // seu código aqui
  let res = str.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
  //console.log(res);
  return res;
}
//console.log(encode('hi there'));
//encode('hi there')
function decode(str) {
  // seu código aqui
  let res = str.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  //console.log(res);
  return res;
}
//decode('h3 th2r2')

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
}
