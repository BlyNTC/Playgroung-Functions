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
function footballPoints() {
  // seu código aqui
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
