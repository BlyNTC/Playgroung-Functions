// Desafio 1
function compareTrue(x, y) {
  if (x && y === true){
    return true;
    } else {
      return false;
    }
}

// Desafio 2
  function calcArea(base, height) {
    let area = 0;
    area = (base * height) / 2;
    return area; 
}

// Desafio 3
function splitSentence(string) {
  //Método split
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
  return(string.split(' '));
}

// Desafio 4
function concatName(nomes) {
  return(nomes[nomes.length-1] + ', ' + nomes[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(values) {
  let count = 0;
  for (let i of values) {
    if (i == Math.max(...values)) {
      count++;
    }
  }
  return (count);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  //Referência ao operador condicional ternário 
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return ("os gatos trombam e o rato foge");
  } else {
    return Math.abs(mouse - cat1) < Math.abs(mouse - cat2) ? 'cat1' : 'cat2';
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
