// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if(a == true && b == true){
    return true;
  }
  else if(a == true && b == false){
    return false;
  }
  else if (a == false && b == true){
    return false;
  }
  else if (a == false && b == false){
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height)/2)
  // seu código aqui
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado
  // seu código aqui
}



// Desafio 4
function concatName(itens) {
  // seu código aqui
let primeiroItem = itens [0];
let ultimoItem = itens[itens.length -1];
return ultimoItem + "," + " " + primeiroItem;
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let empate = ties * 1;
  let vitoria = wins * 3;
  return empate + vitoria
}


// Desafio 6
function highestCount(numbers) {
  // seu código aqui
 let vezes = 0;
 let maiorNumero = Math.max.apply (null, numbers);
 for(let index = 0; index < numbers.length; index += 1){
   if (numbers [index] === maiorNumero){
     vezes +=1;
   }
 }
 return vezes;
}


// Desafio 7
function catAndMouse(mouse, cat1,cat2) {
  // seu código aqui
  let distance1 = Math.abs(cat1 - mouse); 
  let distance2 = Math.abs(cat2 - mouse); 
  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  } else if (distance1 > distance2) {
    return 'cat2';        
  }
     else {
       return 'cat1';
     }
}



// Desafio 8
function fizzBuzz(arrayNumero) {
  // seu código aqui
  let fraseArray = [];
  for(let i = 0; i < arrayNumero.length; i += 1) {
  if (arrayNumero[i] % 3 === 0 && arrayNumero[i] % 5 === 0) {
    fraseArray.push('fizzBuzz');
  } else if (arrayNumero[i] % 3 === 0) {
    fraseArray.push('fizz');
  }  else if (arrayNumero[i] % 5 === 0) {
    fraseArray.push('buzz');
  } else {
    fraseArray.push('bug!');
  }
 }
 return fraseArray;
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
