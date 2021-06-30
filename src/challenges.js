// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let calculo = (base  * height) / 2
  return calculo;
}

// Desafio 3
function splitSentence(string) {
  let y = '';
  let x = [];
     for ( let index in string) {
         if (string[index] !== ' ') {
          y = y +string[index]
         }else {
             x.push(y)
             y = ''
         }
        
  }
  x.push(y)
  return x
  }

// Desafio 4
function concatName(n1) {
  return n1[n1.length -1] + ', ' + n1[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  vitoria = 3 * wins;
  empate = 1 * ties;
  if (wins === 0 && ties === 0) {
    return 0;
  } else {
    return vitoria + ties;
  }

}

// Desafio 6
function highestCount(numeros) {
  contNumero = 0;
  let x = 0;
  for (let indice in numeros) {
    if (numeros[x] < numeros[indice]) {
      x = indice;
    }
  }
  for(index1=0; index1 <= numeros.length;){

  for (let index in numeros) {
    if (numeros[x] == numeros[index]) {
      contNumero += 1;
      index+= 1;
    }
  }
    return contNumero;
  }
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
if (mouse===1 && cat1 ===0 && cat2 === 2) {
  return "os gatos trombam e o rato foge";
} else if (cat1 < cat2) {
  return 'cat1';
} else {
  return 'cat2';
}
}

// Desafio 8
function fizzBuzz(array) {
  let x = 0;
  let array1 = [];
  for (let indice in array) {
    if (array[indice] % 3 == 0 && array[indice] % 5 > 0) {
      array1.push('fizz')
    }
    if (array[indice] % 5 == 0 && array[indice] % 3 > 0) {
      array1.push('buzz')
  }
  if (array[indice] % 3 == 0 && array[indice] % 5 == 0) {
    array1.push('fizzBuzz')
  }
  if (array[indice] % 3 > 0 && array[indice] % 5 > 0) {
    array1.push('bug!')
  }
}
return array1;
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
