// Desafio 1 ok
function compareTrue(bollean1, bollean2) {
  if (bollean1 && bollean2 == true){
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2 ok
function calcArea(base, height) {
   return base*height/2;
}

// Desafio 3 ok
function splitSentence(string) {
  return string.split([' ']);
}

// Desafio 4 ok
function concatName(arrayCN) {
let primeiro = arrayCN[0];
let ultimo = arrayCN[arrayCN.length -1]

return ultimo + ", "+ primeiro;
}

// Desafio 5 ok
function footballPoints(wins, ties) {
  return 3*wins+1*ties;
}

// Desafio 6  

function highestCount(arrayHc) {
let maiorNumero = Math.max(arrayHc);
let contadorDeRepeticao = 0;


}


// Desafio 7 ok
function catAndMouse(mouse, cat1, cat2) {
  let diferença =  Math.abs( cat1 - mouse);
  let diferença2 = Math.abs( cat2 - mouse);

    if (diferença === diferença2){
      return 'os gatos trombam e o rato foge';
    }
    else if(diferença < diferença2){
      return "cat1";
    }
    else{
      return "cat2";
    }
}

// Desafio 8
function fizzBuzz(arrayFB) {
  let voltando = [];

  for(index = 0; index < arrayFB.length; index += 1){
    
    if (arrayFB[index] % 3 === 0 && arrayFB[index] % 5 === 0){
      voltando[index] = "fizzBuzz";
    }
    else if (arrayFB[index] % 5 === 0){
      voltando[index] = "buzz";
    }
    else if (arrayFB[index] % 3 === 0){
      voltando[index] = "fizz";
    }
    else {
      voltando[index] = "bug!";
     }
  }return voltando;

}

// Desafio 9 ok
function encode(codigo) {
  let codificador = '';

  codificador = codigo.replace(/a/g, '1');
  codificador = codificador.replace(/e/g, '2');
  codificador = codificador.replace(/i/g, '3');
  codificador = codificador.replace(/o/g, '4');
  codificador = codificador.replace(/u/g, '5');
  return codificador;
}
function decode(criptografado) {
  let decodificador = '';

  decodificador = criptografado.replace(/1/g, 'a');
  decodificador = decodificador.replace(/2/g, 'e');
  decodificador = decodificador.replace(/3/g, 'i');
  decodificador = decodificador.replace(/4/g, 'o');
  decodificador = decodificador.replace(/5/g, 'u');
  return decodificador;
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