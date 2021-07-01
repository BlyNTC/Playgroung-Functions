// Desafio 10
function techList(arrayNomes, name) {
  let arraySaida = [];
  arrayNomes.sort();
  if (arrayNomes.length === 0) {
    return "Vazio!";
  } else {
    for (let index = 0; index < arrayNomes.length; index += 1) {
      let informacoes = {
        tech: "",
        name: name
      }
      informacoes.tech = arrayNomes[index];
      arraySaida.push(informacoes);
    }
    return arraySaida
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let phoneNumber = ["("];

  if (numbers.length != 11) {
    return "Array com tamanho incorreto.";
  }

  for (let j = 0; j < numbers.length; j += 1) {
    let contador = 0;
    for (let k = 0; k < numbers.length; k += 1) {
      if (numbers[j] === numbers[k]) {
        contador += 1;
      }
    }
    if (contador >= 3) {
    return "não é possível gerar um número de telefone com esses valores";
    break;
    }
  }

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    } else {
      switch (index) {
        case 2:
          phoneNumber.push(") ");
          phoneNumber.push(numbers[index]);
          break;

        case 7:
          phoneNumber.push("-");
          phoneNumber.push(numbers[index]);
          break;

        default:
          phoneNumber.push(numbers[index]);
      }
    }
  }
  return phoneNumber.join('');
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
