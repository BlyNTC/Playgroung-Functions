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
  let maiorNum = valores[0];
  for(let index = 0; index < valores.length; index += 1){
    if(valores[index] > maiorNum){
      maiorNum = valores[index]; //seu código aqui
    }
  } 
  
  for(let j = 0; j < valores.length; j += 1){
    if(maiorNum === valores[j]){
      repeticao += 1;
    }  
  }
  return repeticao;
} 


// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let gato1 = 'cat1';
  let gato2 = 'cat2';
  let distancg1 = Math.abs(cat1 - mouse);
  let distancg2 = Math.abs(cat2 - mouse);
  let tromba = 'os gatos trombam e o rato foge';
  if( distancg1 === distancg2){
    return tromba;
  } else if(distancg2 > distancg1){
    return gato1;
  } else if(distancg1 > distancg2){
    return gato2;
  }// seu código aqui
}

// Desafio 8
function fizzBuzz(numeros) {
  let fizz = 'fizz';
  let buzz = 'buzz';
  let fizz2 = 'fizzBuzz';
  let bug = 'bug!'; 
  for(let index = 0; index < numeros.length; index += 1){
    if(numeros[index] % 3 === 0 && numeros[index] % 5 === 0){
      numeros[index] = fizz2;// seu código aqui
    } else if(numeros[index] % 5 === 0){
      numeros[index] = buzz;
    } else if(numeros[index] % 3 === 0){
        numeros[index] = fizz;
    } else{
      numeros[index] = bug;
    }
  }
  return numeros;
}  

// Desafio 9
function encode(texto) {
  for(let index = 0; index <= texto.length; index += 1 ){
    if(texto[index] === 'a'){
      texto[index] = 1;
    } else if(texto[index] === 'e'){
        texto[index] = 2;
    }else if(texto[index] === 'i'){
        texto[index] = 3;
    }else if(texto[index] === 'o'){
      texto[index] = 4;
    } else if(texto[index] === 'u'){
      texto[index] = 5;
    }
  }
  return texto;
}
console.log(encode("hi there!"))

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
