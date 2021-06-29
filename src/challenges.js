// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2===true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let array1 = array[0];
  let array2 = array[array.length-1];
  let arrayAuxiliar = array2.concat(", ", array1);
  let string = arrayAuxiliar.toString();
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins*3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maior = arrayNumeros[0];
  let contador = 0;
  for (let index=0; index<arrayNumeros.length; index+=1){
    if(arrayNumeros[index]>maior){
      maior = arrayNumeros[index];
    }
  }
  for (let j=0; j<arrayNumeros.length; j+=1){
    if(arrayNumeros[j]===maior){
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1-mouse);
  let distanciaCat2 = Math.abs(cat2-mouse);
  let string = "";
  if(distanciaCat1 === distanciaCat2){
    string = "os gatos trombam e o rato foge";
  } else {
    if(distanciaCat1<distanciaCat2){
      string = "cat1";
    } else {
      string = "cat2";
    }
  }
  return string;
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
