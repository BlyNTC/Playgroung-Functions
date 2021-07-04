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
function fizzBuzz(arrayNumbers) {
  // seu código aqui

  for(let i = 0;i < arrayNumbers.length; i+= 1){
    if(arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0){
      arrayNumbers[i] = "fizzBuzz";      
    }else if (arrayNumbers[i] % 3 === 0){
      arrayNumbers[i] = "fizz";     
    }else if (arrayNumbers[i] % 5 === 0){
      arrayNumbers[i] = "buzz";      
    }else {
      arrayNumbers[i] = "bug!";      
    }
  }
  return arrayNumbers;
}

// Desafio 9
function encode(string) {
  // seu código aqui
frase = string;

  for (let i = 0; i < frase.length; i+= 1){
    if(frase[i] === "a"){
      frase = frase.replace("a", 1);    
    }else if (frase[i] === "e"){
     frase = frase.replace("e", 2);   
  }else if (frase[i] === "i"){
   frase = frase.replace("i", 3);
  }else if (frase[i] === "o"){
   frase = frase.replace("o", 4);
  }else if (frase[i] === "u"){
   frase = frase.replace("u", 5);
  }

}
return frase;

}

function decode(string) {
  // seu código aqui
  frase = string;

  for (let i = 0; i < frase.length; i+= 1){
    if(frase[i] === "1"){
     frase = frase.replace("1", "a");    
    }else if (frase[i] === "2"){
      frase = frase.replace("2", "e");   
    }else if (frase[i] === "3"){
     frase = frase.replace("3", "i");
    }else if (frase[i] === "4"){
     frase = frase.replace("4", "o");
    }else if (frase[i] === "5"){
     frase = frase.replace("5", "u");
    }
  
  }
  
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
}
