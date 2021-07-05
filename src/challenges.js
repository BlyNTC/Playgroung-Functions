// Desafio 1 - TERMINADO
function compareTrue(bool1, bool2) {

  if (bool1 === true && bool2 === true) {
    return true;
  }
    return false;
  }

// Desafio 2 - TERMINADO
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3 - TERMINADO
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4 - TERMINADO
function concatName(nameArray) {
  let name = `${nameArray[nameArray.length - 1]}, ${nameArray[0]}`;

  return name;
}

// Desafio 5' - TERMINADO
function footballPoints(wins, ties) {
  return wins*3+ties*1;
}

// Desafio 6 - TERMINADO
function highestCount(list) {
  let counter = 0;
  for(let i = 0; i < list.length; i++){
    if(list[i] == Math.max.apply(null, list)){
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7 - TERMINADO
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) return 'cat2';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeros){
    let check = [];
    for (let value of numeros){
      if (value % 3 === 0 && value % 5 === 0){
        check.push('fizzBuzz');
      } else if (value % 3 === 0){
        check.push('fizz');
      } else if (value % 5 === 0){
        check.push('buzz');
      } else{
        check.push('bug!');
      }
    }
    return check;
}

// Desafio 9 - TERMINADO
function encode(frase) {
  frase=frase.replace(/a/g,"1");
  frase=frase.replace(/e/g,"2");
  frase=frase.replace(/i/g,"3");
  frase=frase.replace(/o/g,"4");
  frase=frase.replace(/u/g,"5");
  return frase;
}
//Desafio 10 - TERMINADO
function decode(frase) {
  frase=frase.replace(/1/g,"a");
  frase=frase.replace(/2/g,"e");
  frase=frase.replace(/3/g,"i");
  frase=frase.replace(/4/g,"o");
  frase=frase.replace(/5/g,"u");
  return frase;
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
