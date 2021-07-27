// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
};

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
};
//console.log(calcArea(5,2));

// Desafio 3
function splitSentence(funcao) {
  let resultado = funcao.split(' ');
  return resultado;
};

// Desafio 4
function concatName(nomes) {
  let first = nomes[0];
  let last = nomes[nomes.length - 1];
  return (last + ', ' + first);
};

// Desafio 5
function footballPoints(wins, ties) { //peguei referência ao código do Flávio
  let totalPontos = wins * 3 + ties * 1;
  return totalPontos;
}; //footballPoints(1, 2);

// Desafio 6
function highestCount(numbers) {
  let numeroMaior = numbers[0];
  let cont = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numeroMaior < numbers[i]) {
        cont++;
      } else if(numbers[i] === numeroMaior) {
        cont++;
      }
    }
    return cont;  
}; //console.log(highestCount([20, 15, 45, 84]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  let resultado = '';
  if (distanciaCat1 < distanciaCat2) {
    resultado = 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    resultado = 'cat2';
  } else {
    resultado = ('os gatos trombam e o rato foge');
  }
  return resultado;
}; //console.log(catAndMouse(0, 1, 1));

// // Desafio 8
function fizzBuzz(numbers) {
  let tipo = [];
  for (let num of numbers) {
    if (num % 3 === 0 && num % 5 === 0) {
      tipo.push("fizzBuzz");
    } else if (num % 3 === 0) {
      tipo.push("fizz");
    } else if (num % 5 === 0) {
      tipo.push("buzz");
    } else {
      tipo.push("bug!");
    }
  }
  return tipo;
};

// Desafio 9
function encode() {
  // seu código aqui
};
function decode() {
  // seu código aqui
};

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