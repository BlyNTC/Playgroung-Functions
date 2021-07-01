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
  let numeroTelefone = '';
  console.log(numeroTelefone);
  for (let index = 0; index < numeros.length; index += 1) {
    
  }
}

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
  return somaNumeros + ' copos de água'
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
