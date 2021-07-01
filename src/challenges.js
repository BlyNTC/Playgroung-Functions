
// Desafio 1
function compareTrue(bool1, bool2) {

  //vai retornar falso
  if (bool1 === true && bool2 === true) { return true }
  else { return false; }
}

// Desafio 2
function calcArea(base, height) {
  let area;
  //formula
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(stringRef) {
  let str = stringRef.split(' ');
  return str;
}

// Desafio 4
function concatName(palavra) {
  let resultado = '';
  for(let x= palavra.length -1; x >= 0; x -= 1){
    if(x === palavra.length -1){
      resultado = palavra[x];
    }
    else if(palavra[x] === palavra[0]){
      resultado += ', ' + palavra[0]
    }
  }
  return resultado;
}

// Desafio 5
function footballPoints(wins,ties) {
  // parametro q receba um numero de vitorias chamado 'wins'
  // parametro q receba um numero de empates chamado 'ties'
  // retorne a quantidade de pontos que o time marcou em um campeonato
  // cada vitoria vale 3 pontos e cada empate vale 1 ponto  
  let pontos = 0;
  for (let index = 0; index < wins; index++) {
    if(wins > 0){ pontos += 3;}
    
  }
  for (let index = 0; index < ties; index++) {
    if (ties > 0) { pontos += 1;}
    
  }
  return pontos;  
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
