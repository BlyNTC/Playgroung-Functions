// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true){
    return true;
  }else{ 
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  calcArea = (base*height)/2;
  return calcArea;
}

// Desafio 3
function splitSentence(string, array) {
  // seu código aqui
  array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length - 1] + ", " + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let maiorNumero = arrayNumbers[0];
  let contador = 0;
  for(let i = 0; i < arrayNumbers.length; i +=1){
    if(arrayNumbers[i] > maiorNumero){
      maiorNumero = arrayNumbers[i];
    }
  }for(i = 0; i < arrayNumbers.length; i +=1){
    if (arrayNumbers[i] === maiorNumero)
    contador +=1;
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if(distanciaCat1 < distanciaCat2){
    return 'cat1';
  }else if(distanciaCat2 < distanciaCat1){
    return 'cat2';
  }else if(distanciaCat1 === distanciaCat2 ){
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  let str = [];
  for (let i = 0; i < arrayNumbers.length; i+=1){
    if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 !== 0){ //Divisivel por 3, mas não por 5
    str.push('fizz');
    }else if (arrayNumbers[i] % 3 == 0 && arrayNumbers[i] % 5 === 0){ //Divisivel por 3 e por 5
      str.push('fizzBuzz');
    }else if (arrayNumbers[i] % 3 !== 0 && arrayNumbers[i] % 5 === 0){ // Divisivel por 5, mas não por 3
      str.push('buzz');
    }else{
      str.push('bug!');
    }
  }
  return str;
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
