// Desafio 10
function techList(tech, name) {
  
}

// Desafio 11
function generatePhoneNumber(array) {
  /*if (array.length !== 11) {
    return "Array com tamanho incorreto."
  } else
  if () {

  }
  return (array[0],array[1])+array[2]+array[3]+array[4]+array[5]+'-'+array[6]+array[7]+array[8]+array[9]*/
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resultado = 0;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB && lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB))  {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado
}

// Desafio 13
function hydrate(String) {
  let numeroCoposAgua = 0;
  let conversaoStrParaInteiro = 0;
  let resultadoNumeroCoposAgua;
  for (let elemento of String) {
    
    if (elemento == '1' || elemento == '2' || elemento == '3' || elemento == '4' || elemento == '5' || elemento == '6' || elemento == '7' || elemento == '8' || elemento == '9') {
       conversaoStrParaInteiro = parseInt(elemento);
      
        numeroCoposAgua += conversaoStrParaInteiro;
      }
    }

    if (numeroCoposAgua == 1) {
      resultadoNumeroCoposAgua = `${numeroCoposAgua} copo de água`;
    } else {
      resultadoNumeroCoposAgua = `${numeroCoposAgua} copos de água`;
    }
  return resultadoNumeroCoposAgua  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};