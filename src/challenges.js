// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if(a === true && b === true){
    return true;
  } else{
    return false;
  }

}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let area = (base*altura)/2;
  return area;
}


// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = [''];
  let cont=0;
 

  for(let index=0; index < string.length ; index +=1){
    let indicaEspaco = 0;
      if(string[index] === " "){
      cont +=1;
      indicaEspaco +=1;
      } 
      if(indicaEspaco === 0 ){
      array[cont]= array[cont] + string[index];
      } else{
        array[cont]='';
      }
    }
return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string= '';
  let tam = array.length;
  string= array[tam-1];
  string= string + ", " + array[0];
  
 console.log(string);
 return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let soma = 0;
  soma = 3*wins + 1*ties;
  return soma;

}

// Desafio 6
function highestCount() {
  // seu código aqui
  
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
