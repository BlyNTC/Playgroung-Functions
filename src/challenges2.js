// Desafio 10
function techList(array, name) {
  let tecnologias = [];
  let objeto = {};
  array.sort();

  for (let index = 0; index < array.length; index += 1) {
    objeto.tech = array[index];
    objeto.name = name;
    tecnologias.push(objeto);
    objeto = {};
  }
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    return tecnologias;
  }
}

// Desafio 11
function generatePhoneNumber(numeros) {
//Calcula o numero de repetição e retorna se o número for superado
    let vezesRepetido = 0;
    for (let index = 0; index < numeros.length; index += 1) {
      for (let i = 0; i < numeros.length; i += 1) {
        if(numeros[i] === numeros[index]) {
        vezesRepetido += 1;
        }
        if(vezesRepetido >= 3){
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
      vezesRepetido = 0;
    }
//Faz os outros testes
  if (numeros.length !== 11){
    return 'Array com tamanho incorreto.';
  }
  let numeroTelefone = '(';
  for (let index = 0; index < numeros.length; index += 1) {
    
    if (numeros[index] < 0 || numeros[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (index === 2) {
      numeroTelefone += ') ';
    } else if (index === 7) {
      numeroTelefone += '-';
    } 
    numeroTelefone += numeros[index];
    
  }
  return numeroTelefone;
}
//console.log(generatePhoneNumber([1, 1, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineB - lineC) < lineA && lineA < (lineB + lineC) && Math.abs(lineA - lineC) < lineB && lineB < (lineA + lineC) && Math.abs(lineA - lineB) < lineC && lineC < (lineA + lineB)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  let numerosNaString = string.match(/\d+/g);
  let somaNumeros = 0;
  for (let index = 0; index < numerosNaString.length; index += 1) {
    somaNumeros += parseInt(numerosNaString[index]);
  }
  if (somaNumeros === 1) {
  return somaNumeros + ' copo de água';
  } else {
    return somaNumeros + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};