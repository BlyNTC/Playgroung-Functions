// Desafio 1
function compareTrue(boo1, boo2) {
  let resultado;
  if(boo1 === true && boo2 === true){
    resultado = true
} else if(boo1 === true && boo2 === false){
    resultado = false
} else {
    resultado = false
}
    return resultado
}

// Desafio 2
function calcArea(base, height) {
  let resultado = base * height / 2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  let divisor = ' ';
  let divideArray = string.split(divisor);

  return divideArray;
}

// Desafio 4
function concatName(arraystring) {
  let resultado;
  string0 = arraystring[0];
  string1 = arraystring[arraystring.length - 1]
  resultado = string0 + ', ' + string1

  return resultado
}

  console.log(concatName(['foguete', 'nao', 'tem', 'ré']))

// Desafio 5
function footballPoints(win, ties) {  
  let resultado = 0;
  winpoints = 3;
  tiespoints = 1;
  win = win * winpoints
  ties = ties * tiespoints
  resultado = win + ties
  return resultado
}
  console.log(footballPoints(14, 8))

    // Aprendido novo jeito de fazer
    // let point = win * 3
    // let points = point + ties;
    // return points;

// Desafio 6
function highestCount(numeros) {
    let maiorValor = 0;
    
    for(let numero of numeros){
      if(maiorValor < numero){
        maiorValor = numero;
      }
    }
    
    let arrayTodos = []
    let maiorNum = maiorValor
    let idx = numeros.indexOf(maiorNum)
    while (idx != -1) {
      arrayTodos.push(idx)
      idx = numeros.indexOf(maiorNum, idx + 1)
    }

    return arrayTodos.length
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
