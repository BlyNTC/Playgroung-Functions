// Desafio 1
function compareTrue(bool1,bool2) {
  if(bool1 === true && bool2 === false || bool1 === false && bool2 === true){
    return false;// seu código aqui
  } else if(bool1 === false && bool2 === false){
    return false;
  } else {
    return true;
  }
}

// Desafio 2
function calcArea(base,height) {
  let operacao = (base * height) / 2;
  return operacao;// seu código aqui
}

// Desafio 3
function splitSentence(texto) {
  let separa = texto.split(' ');
  return separa;// seu código aqui
}

// Desafio 4
function concatName(arrayPalavras) {
  let primeiroItem = arrayPalavras[0];
  let ultimoItem = arrayPalavras[arrayPalavras.length -1];
  let retornaItens = ultimoItem + ', ' + primeiroItem;
  return retornaItens;// seu código aqui
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontoVitoria = wins * 3;
  let pontoEmpate = ties * 1;
  let resultado = pontoVitoria + pontoEmpate;
  return resultado;// seu código aqui
}

// Desafio 6
function highestCount(valores) {
  let repeticao = 0;
  let inicio = valores[0];
  for(let index = 0; index < valores.length; index += 1){
    if(valores[index] >= inicio && inicio >= valores[index]){
      repeticao += 1;// seu código aqui
    }
  }
  return repeticao;
}  

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let gato1 = 'cat1';
  let gato2 = 'cat2';
  let tromba = 'os gatos trombam e o rato foge';
  if(cat1 > mouse && cat1 > cat2){
    return gato2;
  } else if(cat2 > mouse && cat2 > cat1){
    return gato1;
  } else if(cat1 === mouse && cat2 === mouse){
    return tromba;
  }// seu código aqui
}

// Desafio 8
function fizzBuzz(numeros) {
  let fizz = 'fizz';
  let buzz = 'buzz';
  let fizz2 = 'fizzBuzz';
  let bug = 'bug!'
  let substitui = 0; 
  for(let index = 0; index < numeros.length; index += 1){
    if(numeros[index] % 3 === 0){
      numeros[index] = fizz;// seu código aqui
    } else if(numeros[index] % 5 === 0){
      numeros[index] = buzz;
    } else if(numeros[index] % 3 === 0 && numeros[index] % 5 === 0){
        numeros[index] = fizz2;
    } else{
      numeros[index] = bug;
    }
  }
  return numeros;
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
