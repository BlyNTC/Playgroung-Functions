// Desafio 1
function compareTrue(n1,n2) {
  if(n1===false && n2===true){
    return false
  }else if(n1===true && n2===false){
    return false
  }else if(n1===false && n2===false){
    return false
  }else if(n1===true && n2===true){
    return true
  }
}


// Desafio 2
function calcArea(base,height) {
  let area=((base*height)/2)
  return area
}


// Desafio 3
function splitSentence(string) {
  let texto=string.split(" ")
  return texto
}



// Desafio 4
function concatName(array) {
  for(let i=0;i<array.length;i+=1)
    var primeiro=array[0]
    var ultimo=array[array.length-1]
  return ultimo+','+ ' ' + primeiro  
}


// Desafio 5
function footballPoints(wins,ties) {
  let resultado=((wins*3)+(ties*1))
  return resultado
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
