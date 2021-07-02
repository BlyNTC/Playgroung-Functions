// Desafio 10
function techList(tech, name) {
  let techSorted = tech.sort();
  let resultado = [];
  let objeto = {};
  if (tech.length <= 0) {
    return "Vazio!"
  }
  for (let index = 0; index < tech.length; index += 1) {
    objeto = {};
    objeto.tech = techSorted[index];
    objeto.name = name;
    resultado.push(objeto)
  }
    return resultado;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  let estrutura = "(" + phoneNumber[0] + phoneNumber[1] + ") " + phoneNumber[2] + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] + "-" + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10];
  if (phoneNumber.length > 11 || phoneNumber.length < 11) {
      return "Array com tamanho incorreto."; 
  }
  for (let index = 0; index < phoneNumber.length; index += 1) {
    let soma = 0;  
    if (phoneNumber[index] > 9 || phoneNumber[index] < 0) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    for (let index2 = 1; index2 < phoneNumber.length; index2 += 1) {
          if (phoneNumber[index] === phoneNumber[index2]) {
              soma += 1;
            if (soma >= 3) {
              return "não é possível gerar um número de telefone com esses valores"
           } 
          }
      }
  } return estrutura;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let soma1 = lineA + lineB;
  let soma2 = lineA + lineC;
  let soma3 = lineB + lineC;
  let subAbs1 = Math.abs(lineA - lineB);
  let subsAbs2 = Math.abs(lineA - lineC);
  let subAbs3 = Math.abs(lineB - lineC);
  let ladoAValido;
  let ladoBValido;
  let ladoCValido;
if (lineA < soma3 && lineA > subAbs3) {
  ladoAValido = true;
}
if (lineB < soma2 && lineB > subsAbs2) {
  ladoBValido = true;
}
if (lineC < soma1 && lineC > subAbs1) {
  ladoCValido = true;
}
if (ladoAValido === true || ladoBValido === true || ladoCValido === true) {
  return true;
} else {
  return false;
}
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
