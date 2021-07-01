// Desafio 1
function compareTrue(primeiroValor,segundoValor) {
  if(true===primeiroValor&&true===segundoValor){
    return true;
  }
else{
  return false;
}

}
console.log(compareTrue(true,false));




// Desafio 2
function calcArea( base,height) {
  let areaTriangulo=base*height/2;
  return areaTriangulo
}
console.log(calcArea(10,50))
console.log(calcArea(5,2))
console.log(calcArea(51,1))



// Desafio 3
function splitSentence(frase) {
let stringSeparada=frase.split(' ');
return stringSeparada;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));



// Desafio 4
function concatName(array) {
  // seu código aqui
let primeiroItem=array[0];
let ultimoItem=array[array.length-1];
return  ultimoItem + ', ' + primeiroItem;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))


// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  const vitoria=3;
  const empate=1;
  return ((wins*vitoria)+(ties*empate));
}
footballPoints(14,8)
console.log(footballPoints(14,8))

// Desafio 6
function highestCount(array){
  // seu código aqui
  let maiorNumero=array[0];
let numeroVezes=0;

for (let index = 0; index < array.length; index+=1) {
if (maiorNumero <array[index]){
maiorNumero=array[index];
} 
}
for (let index = 0; index < array.length; index+=1) {
if(maiorNumero===array[index]){
numeroVezes+=1;
}
}
return numeroVezes;
}
        
      
highestCount([9, 1, 2, 3, 9, 5, 7]);
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resultado=[];

  for (let index = 0; index < array.length; index+=1) {


    if (array[index]%3===0 && array[index]%5===0){
      resultado.push("fizzBuzz");
    }
    
    else if  (array[index]%3===0){
      resultado.push("fizz");
    }
    else if(array[index]%5===0){
      resultado.push("buzz");
    }
    
    else{
      resultado.push("bug!");
    }
   
  } 
  return resultado;
}
fizzBuzz([7,9]);
console.log(fizzBuzz([7,9]))

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
