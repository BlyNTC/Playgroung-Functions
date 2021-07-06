// Desafio 1
function compareTrue(pcLigado, abriuGame) {  
  
  if ( pcLigado == true && abriuGame == true ) { 

    return true;    
    
  } else {  

    return false;
  }    
}

// Desafio 2
function calcArea(base,height) {
  
  const result = (base * height) / 2;

  return result; 
}

// Desafio 3
function splitSentence(frase) {

  let splitado = frase.split(" ");
  return splitado
}
//console.log(splitSentence("go trybe!"));
// FONTE: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254 


// Desafio 4
function concatName(arr) { 

  return arr[arr.length -1 ].concat(', ').concat(arr[0]);  
}


// Desafio 5
function footballPoints(wins, ties) {
  wins = (wins * 3) + ties
  return wins
}

// Desafio 6
function highestCount(arr) {
  
  arr = arr.sort(function (a, b) { return a - b; });

  let highValue = arr[arr.length - 1];

  let count = 0;

  for (let number of arr) {

    if (number === highValue) {

      count += 1;
    }
  }
  return count;

  // source: https://github.com/tryber/sd-014-a-project-playground-functions/commit/cdd88e5f455c7cf45c28ea4734d638767d4bad1c#

}

// Desafio 7
function catAndMouse(rato,gato01,gato02) {

  let diff1 = Math.abs(rato - gato01)

  let diff2 = Math.abs(rato - gato02)

  if(diff1 === diff2){

    return 'os gatos trombam e o rato foge'

  }else if(diff1 < diff2){

  return "cat1"
  
  }else{

    return "cat2"
  }
  //Creditos a aula do italo, ajudou a enxergar como fazer.
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode(tec, name){ 

   let arr = []

   if(tec.length === 0){

     return 'Vazio!'
   }

   for(let tecs of tec.sort()){

     arr.push({tecs,name,});     
   }

   return arr;
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
