// Desafio 10
function techList(techs, name) {
  if (techs.length > 0) {
    return techs.sort().map((tech) => {
      tech = { tech, name };
      return tech;
    });
  }
  return 'Vazio!';
}

// Desafio 11
function countNumbers(phone, value) {
  return phone.filter((v) => (v === value)).length;
}

function formatNumber(phone) {
  let result = '';
  for (let pos = 0; pos < phone.length; pos += 1) {
    result += phone[pos];
  }
  return `(${result.slice(0, 2)}) ${result.slice(2, 7)}-${result.slice(7, 11)}`
}

function generatePhoneNumber(phone) {
  let repeat = [];
  const repeatedNumbers = phone.map((a) => {
    repeat[a] = countNumbers(phone, a);
    return repeat[a];
  });

  if (phone.length !== 11) { return 'Array com tamanho incorreto.'; }
  if (phone.some((number) => number < 0) || phone.some((number) => number > 9)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (repeatedNumbers.some((a) => a >= 3)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return formatNumber(phone);
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
