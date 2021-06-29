// Desafio 10
function techList(technologies, name) {
  let output = [];

  if (technologies.length === 0) {
    return 'Vazio!';
  }

  for (let value of technologies.sort()) {
    let object = {};
    object.tech = value;
    object.name = name;
    output.push(object);
  }

  return output;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let numberCount = {};

  for (let value of numbers) { // count how many times the value appears
    if (numberCount[value] === undefined) {
      numberCount[value] = 1;
    } else {
      numberCount[value] += 1;
    }
  }

  let repeated = 0;

  for (let count in numberCount) { // determines how many times the value appears
    if (numberCount[count] > repeated) {
      repeated = numberCount[count];
    }
  }

  for (let value of numbers) {
    if (value < 0 || value > 9 || repeated >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return numbers.join('').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Beseado no Exemplo 4 em <https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176>
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
