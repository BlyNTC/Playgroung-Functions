// Desafio 1
function compareTrue(a, b) {
  return a && b === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(array) {
  return array.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}

// Desafio 6
// for (let i = 0; i < array.length; i += 1)
function highestCount(array) {
  let numeroRepete = 0;
  let maiorNumero = Math.max(...array);
  for (let i in array) {
    if (array[i] === maiorNumero) {
      numeroRepete += 1;
    }
  }
  return numeroRepete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse-cat2)) {
    return 'cat1'
  } if (Math.abs(mouse - cat1) > Math.abs(mouse-cat2)) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// function catAndMouse(mouse, cat1, cat2) {
//   let catOne = Math.abs(mouse - cat1);
//   let catTwo = Math.abs(mouse - cat2);
//     if (catOne < catTwo) {
//     return 'cat1'
//   } if (catOne > catTwo) {
//     return 'cat2'
//   } else {
//     return 'os gatos trombam e o rato foge'
//   }
// }

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

// Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão caçando um mesmo rato chamado mouse. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.

// Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).

// Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".

// Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".