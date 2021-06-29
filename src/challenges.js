// Desafio 1
function compareTrue(valor1, valor2 ) {
  return valor1 && valor2;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  return base*height/2 ;
  // seu código aqui
}

// Desafio 3
function splitSentence(stringSplitting) {
  return stringSplitting.split(" ") ;
  // seu código aqui
}

// Desafio 4
function concatName(stringConcatenation) {
  return `${stringConcatenation[stringConcatenation.length - 1]}, ${stringConcatenation[0]}` ;
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3+ties ;
  // seu código aqui
}

// Desafio 6
function highestCount(arrayNumber) {
  
  let higherNumber = null ;
  let counting = null ;
  for (let index = 0; index < arrayNumber.length; index += 1 ) {
    
    if (higherNumber<arrayNumber[index] || higherNumber === null ) { 
        counting = 1 ;
        higherNumber = arrayNumber[index] ;
    }
    else if (higherNumber===arrayNumber[index]) {  
      counting += 1 ;
    }
    else { 
      continue
    }
    
  }
  
  return counting ;// seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const d1 =  Math.abs(mouse-cat1)
   const d2 =  Math.abs(mouse-cat2)
   if (d1>d2) {
    return "cat2";
   }
   else if (d1<d2) {
    return "cat1";
   } 
   else {
    return "os gatos trombam e o rato foge";
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
