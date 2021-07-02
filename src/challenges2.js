// Desafio 10
function techList(array, name) { // Recebi ajuda do Filipe Brochier para desenvolver a lógica desse desafio.
  let arrayTecnologias = [];
  array.sort();
  let resultado;
  if (array.length === 0) {
    resultado = 'Vazio!';
  } else {
    for (let tech of array) {
      arrayTecnologias.push({ tech, name });
      resultado = arrayTecnologias;
    }
  }
  return resultado;
}

// Desafio 11
function generatePhoneNumber(array) {
  let repete = 0;
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i +=1){
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let i2 = 0; i2 < array.length; i2 +=1) {
      if (array[i] === array[i2]) {
        repete = repete + 1;
      }
    }
    if (repete >= 3){
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      repete = 0;
    }
  }
  return '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resultado = 0;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB && lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 13
function hydrate(String) {
  let numeroCoposAgua = 0;
  let conversaoStrParaInteiro = 0;
  let resultado = 0;
  for (let elemento of String) {

    for (let i = 0; i < String.length; i += 1) {
      if (i == elemento && elemento !== ' ') {
        conversaoStrParaInteiro = Number.parseInt(elemento);
      
        numeroCoposAgua += conversaoStrParaInteiro;
        }
      }
    
    }

    if (numeroCoposAgua == 1) {
      resultado = `${numeroCoposAgua} copo de água`;
    } else {
      resultado = `${numeroCoposAgua} copos de água`;
    }
  return resultado;  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};