// Desafio 10
function techList(tech, name) {
  tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    tech[index] = {
      tech: tech[index],
      name: name,
    };
  }
  if (tech == '') {
    return 'Vazio!';
  } else {
    return tech;
  }
}

// Desafio 11
function generatePhoneNumber(arrayTelefone) {
  if (arrayTelefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let repeticao = 0;
  for (let i = 0; i < arrayTelefone.length; i += 1) {
    for (let i2 = 0; i2 < arrayTelefone.length; i2 += 1) {
      if (arrayTelefone[i] == arrayTelefone[i2]) {
        repeticao += 1;
      }
    }
    if ((repeticao >= 3) || (arrayTelefone[i] > 9) || (arrayTelefone[i] < 0)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    repeticao = 0;
  }
  let phoneNumber = "";
  for (let i3 = 0; i3 < arrayTelefone.length; i3 += 1) {
    if (phoneNumber.length == 0) {
      phoneNumber += "(";
    }
    if (phoneNumber.length == 3) {
      phoneNumber += ")";
    }
    if (phoneNumber.length == 4) {
      phoneNumber += " ";
    }
    if (phoneNumber.length == 10) {
      phoneNumber += "-";
    }
    phoneNumber += arrayTelefone[i3];
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
