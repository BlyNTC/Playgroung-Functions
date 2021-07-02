// Desafio 10
// https://stackoverflow.com/questions/7479520/javascript-cannot-set-property-of-undefined
function compare(a, b) {
  if (a.tech < b.tech) return -1;
  if (a.tech > b.tech) return 1;
  return 0;
}

function techList(techArray, name) {
  let answer = [];
  let finalAnswer;
  for (let i = 0; i < techArray.length; i += 1) {
    answer[i] = {};
    answer[i].tech = techArray[i];
    answer[i].name = name;
  }

  if (techArray.length === 0) {
    return 'Vazio!';
  }
  finalAnswer = answer.sort(compare);
  return finalAnswer;
}

// Desafio 11
function generatePhoneNumber(digits) {
  if (digits.length !== 11) return 'Array com tamanho incorreto.';

  let count = 0;
  for (let i = 0; i < digits.length; i += 1) {
    count = 0;
    for (let j = 0; j < digits.length; j += 1) {
      if (digits[j] === digits[i]) count += 1;

      if (digits[j] < 0 || digits[j] > 9 || count >= 3) return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  digits.splice(0, 0, '(');
  digits.splice(3, 0, ') ');
  digits.splice(9, 0, '-');

  return digits.join('');
}

// Desafio 12
function triangleCheck(a, b, c) {
  let valid = true;
  if (a > b + c || b > a + c) valid = false;
  return valid;
}

// Desafio 13
function hydrate(string) {
  let soma = 0;
  for (let i in string) {
    if (string[i].match(/\d+/g)) soma += parseInt(string[i], 10);
  }
  if (soma === 1) return `${soma} copo de água`;
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
