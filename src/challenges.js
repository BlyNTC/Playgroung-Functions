// Desafio 1
function compareTrue(valor1, valor2) {
   if(valor1 == true && valor2 == true){
    return true;
  }else{
    return false;
  }
}
console.log(compareTrue(true, false));
// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(frase) {
  let n = frase.split(/\s+/).length;
  return frase.split(" ", n);
}
console.log(splitSentence("foguete"));

// Desafio 4
function concatName(arrayNome) {
  for(let index in arrayNome){
    return arrayNome[arrayNome.length - 1] + ", " + arrayNome[0];
  }
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontoWins = 3;
  let pontoTies = 1;

  return pontoWins * wins + pontoTies * ties;
  }
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(array) {

  let maiorNumero = Math.max(...array);
  let maiorRepete = 0;

  for(let index of array){
    if(index >= maiorNumero){
      maiorRepete += 1;
    }
  }
  return maiorRepete;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);

  if(distancia1 < distancia2){
    return "cat1";
  }else if(distancia1 > distancia2){
    return "cat2";
  }else{
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(10, 6, 5));

// Desafio 8
function fizzBuzz(arrayNumero) {
  for(let index of arrayNumero){
    if(index % 3 == 0){
      return "fizz";
    }else if(index % 5 == 0){
      return "buzz";
    }else if(index % 3 == 0 && index % 5 == 0){
      return "fizzbuzz";
    }else{
      return "bug!";
    }
  }
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(frase1) {
  let resultado1 = frase1.split("");

  for(let index = 0; index < resultado1.index; index += 1){
    switch(resultado1[index]){
      case 'a': resultado1[index] = '1';
      break;
      case 'e': resultado1[index] = '2';
      break;
      case 'i': resultado1[index] = '3';
      break;
      case 'o': resultado1[index] = '4';
      break;
      case 'u': resultado1[index] = '5';
      break;
    }
  }
  return frase1;
}

function decode(frase2) {
  let resultado2 = frase2.split("");

  for(let index = 0; index < resultado2.index; index += 1){
    switch(resultado2[index]){
      case '1': resultado2[index] = 'a';
      break;
      case '2': resultado2[index] = 'e';
      break;
      case '3': resultado2[index] = 'i';
      break;
      case '4': resultado2[index] = 'o';
      break;
      case '5': resultado2[index] = 'u';
      break;
    }
  }
  return frase2;
}
console.log(encode("hi, there!"), decode("h3, th2r2!"));

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
