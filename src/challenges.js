// Desafio 1
function compareTrue(operador1, operador2) {
  // seu código aqui
  let resultado = operador1 && operador2;
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
let formulaAreaTriangulo = base * height / 2;
return formulaAreaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separado = string.split(" ")
  return separado;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let name = array[array.length - 1] + ", " + array[0]
  return name;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalDePontos = wins * 3 + ties
  return totalDePontos;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = Math.max.apply(null, array);
  let quantidade = 0
  for(let index = 0; index < array.length; index += 1){
    if(array[index] === maior){
      quantidade += 1;
    }
  }
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let posicaoGato1 = Math.abs(mouse - cat1)
  let posicaoGato2 = Math.abs(mouse - cat2)

  if(posicaoGato1 === posicaoGato2){
    return "os gatos trombam e o rato foge";
  }else if(posicaoGato1 < posicaoGato2){
    return "cat1";
  }else if(posicaoGato2 < posicaoGato1){
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resultado = [ ];

  for(let index = 0; index < array.length; index += 1){
    let divisao3 = array[index] % 3;
    let divisao5 = array[index] % 5;

    if(divisao3 === 0 && divisao5 === 0){
      resultado.push("fizzBuzz");
    }else if(divisao3 === 0){
      resultado.push("fizz");
    }else if(divisao5 === 0){
      resultado.push("buzz");
    }else{
      resultado.push("bug!");
    }
  }

  return resultado;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let frase = string;

  for(let index = 1; index < frase.length; index += 1){
      if(frase[index] === "a"){
        frase.replace(frase(index), "1")
      }else if(frase[index] === "e"){
        frase.replace(frase(index), "2")
      }else if(frase[index] === "i"){
        frase.replace(frase(index), "3")
      }else if(frase[index] === "o"){
        frase.replace(frase(index), "4")
      }else if(frase(index) === "u"){
        frase.replace(frase(index), "5")
      }
  }
  
  return frase;
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