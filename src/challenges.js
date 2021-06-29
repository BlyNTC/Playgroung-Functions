// Desafio 1
function compareTrue(param1,param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let prItem= array[0];
  let sgItem= array[array.length - 1];
  let juntos;
  return juntos = sgItem + "," + " " + prItem;
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontos = (wins*3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = Math.max.apply(null, numeros );
  let quantasVezes = 0;
  for(let i = 0; i < numeros.length;i += 1 ){
      if(maiorNumero === numeros[i]){
          quantasVezes += 1;
      }
  }
  return (quantasVezes);
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2)

  if(gato1 < gato2){
      return "cat1";
    } else if (gato1 > gato2){
      return "cat2";
    } else {
      return "os gatos trombam e o rato foge";
    }
}

// Desafio 8
function fizzBuzz(numeros) {
  let resp =[];
  for(let i = 0; i < numeros.length; i +=1 ){
      if (numeros[i]% 3 === 0 && numeros[i]%5 === 0){
          resp.push("fizzBuzz");
      } else if (numeros[i]%3 === 0 && numeros[i]%5 !== 0){
          resp.push("fizz");
      } else if (numeros[i]%5 === 0 && numeros[i]%3 !== 0){
          resp.push("buzz");
      } else {
          resp.push("bug!");
      }
  }
  return resp;
}

// Desafio 9
function encode(frase) {
  let encA;
  encA = frase.replace( /a/g,'1');
  let encE;
  encE = encA.replace( /e/g,'2');
  let encI;
  encI = encE.replace( /i/g,'3');
  let encO;
  encO = encI.replace( /o/g,'4');
  let encU;
  encU = encO.replace( /u/g,'5');

  return (encU);
}
function decode(frase) {
  let encA;
  encA = frase.replace( /1/g,'a');
  let encE;
  encE = encA.replace( /2/g,'e');
  let encI;
  encI = encE.replace( /3/g,'i');
  let encO;
  encO = encI.replace( /4/g,'o');
  let encU;
  encU = encO.replace( /5/g,'u');

  return (encU);
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
