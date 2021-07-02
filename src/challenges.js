
// Desafio 1
function compareTrue(bool1, bool2) {

  //vai retornar falso
  if (bool1 === true && bool2 === true) { return true }
  else { return false; }
}

// Desafio 2
function calcArea(base, height) {
  let area;
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
function highestCount(arrayRef) {
  // vai receber uma array de numeros
  // RETORNAR a quantidade de vezes q o maior numero se repete
  let maiorValor = Number.NEGATIVE_INFINITY;
  let quantidadeDeRepetições = 0;
  
  for (let index = 0; index < arrayRef.length; index++) {
    if (maiorValor < arrayRef[index]) {
      maiorValor = arrayRef[index];
    }  
  }
  for (let index = 0; index < arrayRef.length; index++) {
    if (arrayRef[index] === maiorValor) {
      quantidadeDeRepetições += 1;
    }  
  }
  return quantidadeDeRepetições;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // criar uma variavel de distancia q o gato 1 e 2 estão do rato
  // calcule a distancia q cada gato esta do rato
  // RETORNE qual dos gatos vão pegar o rato
  // Caso as DISTANCIAS sejam iguais, DEVE ser retornado uma string "os gatos trombam e o rato foge"
  let distancia1;
  let distancia2;

  distancia1 = Math.abs(cat1 - mouse);
  distancia2 = Math.abs(cat2 - mouse);
  if (distancia1 < distancia2) {
    return 'cat1';
  }
  else if (distancia1 > distancia2) {
    return 'cat2';
  }
  else if (distancia1 === distancia2) {
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
