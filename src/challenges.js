// Desafio 1
function compareTrue(bool1,bool2) {   
   // seu código aqui     
    if(bool1 && bool2 === true){
      return true;
    }else {
      return false;
    }  
}

// Desafio 2
function calcArea(base,height) {    
  // seu código aqui
    let area = base * height / 2;
    return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let quebraFrase = frase.split(" ");
  return quebraFrase;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let ultimoArray =  array[array.length - 1];

  let concatNome = ultimoArray + ", " + array[0];
  return concatNome; 
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui

  let times = {
    wins: wins * 3,
    ties: ties * 1,
   }
   let totalPontos  = times.wins + times.ties;
   return totalPontos;
   
}

// Desafio 6
function highestCount(arrayNumbers) {  
  // seu código aqui

let numeroMaior = arrayNumbers[0];
let cont = 0;

for (let i = 1; i < arrayNumbers.length; i += 1){
    if(arrayNumbers[i] > numeroMaior){
      numeroMaior = arrayNumbers[i];      
    }    
 }  
 for(let i = 0;i < arrayNumbers.length;i += 1){
  if (arrayNumbers[i] == numeroMaior){
    cont++;      
 }
} 
 return cont;

}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {

  // seu código aqui
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);

if(dist1 === dist2){
  return 'os gatos trombam e o rato foge';  
}else if(dist1 < dist2) {
  return 'cat1';
}else {
  return 'cat2';
} 
  
  
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
