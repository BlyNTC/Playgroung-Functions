// Desafio 1
function compareTrue(boolean1, boolean2){
  if(boolean1 === true && boolean2 === true){
    return true;
  }else if(boolean1 === true && boolean2 === false){
    return false
  }else{
    return false
  }
}
// Desafio 2
function calcArea(base, heigth) {
  let areaTriangulo = base * heigth / 2;
  return areaTriangulo;
}


// Desafio 3
function splitSentence(string) {
  let sentenceSplit = string.split(' ');
  return sentenceSplit;
}

// Desafio 4
function concatName(arrayNomes){
  let primeiraPosicao = arrayNomes[0];
  let ultimaPosicao = arrayNomes[arrayNomes.length - 1];
  return ultimaPosicao.concat(', ', primeiraPosicao);
}
concatName(['foguete', 'não', 'tem', 'ré']);

// Desafio 5
 function footballPoints(wins, ties){
  let vitorias = wins * 3;
  let empates = ties * 1;
  return empates + vitorias
}
// Desafio 6
 function highestCount(arrayNumeros){
  let count = 0; 
  let maiorNumero = arrayNumeros[0]
  for(let index = 0; index < arrayNumeros.length; index += 1){
    if(maiorNumero < arrayNumeros[index]){
      maiorNumero = arrayNumeros[index];
    }
  }
  for(let index = 0; index < arrayNumeros.length; index += 1){
    if(maiorNumero === arrayNumeros[index]){
      count += 1;
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2){
  if(Math.abs(mouse - cat1 > mouse - cat2 )){
    return 'cat1'
  }else if(Math.abs(mouse - cat1 < mouse - cat2 )){
    return 'cat2'
  }else{
    return 'os gatos trombam e o rato foge'
  }
  //Math.abs(cats1 - mouse) -1 
}
console.log(catAndMouse(0, 2, 2));
// Desafio 8
function fizzBuzz(arrayNumerico){
  let fizzBuzz = []
  for(let index = 0; index < arrayNumerico.length; index += 1){
    if(arrayNumerico[index] % 3 === 0 && arrayNumerico[index] % 5 === 0){
      arrayNumerico[index] = 'fizzBuzz'
      fizzBuzz.push(arrayNumerico[index])
    }else if(arrayNumerico[index] % 5 === 0){
      arrayNumerico[index] = 'buzz'
      fizzBuzz.push(arrayNumerico[index])
    }else if(arrayNumerico[index] % 3 === 0){
      arrayNumerico[index] = 'fizz'
      fizzBuzz.push(arrayNumerico[index])
    }else{
      arrayNumerico[index] = 'bug!'
      fizzBuzz.push(arrayNumerico[index])
    }
  }
  return fizzBuzz
}

// Desafio 9
function encode(string){
  let arrayNum = [1, 2, 3, 4, 5];
  let arrayVogais = ['a', 'e', 'i', 'o', 'u'];

  
}
encode('amazon');


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
