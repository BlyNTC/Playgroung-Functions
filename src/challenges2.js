// Desafio 10
function compare (a, b) {
  if (a.tech < b.tech) return -1;
  if (a.tech > b.tech) return 1;
  return 0;
}

function techList(techArray, name) {
  let answer = [];
  let finalAnswer;
  for (let i in techArray) {
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
function generatePhoneNumber() {
  // seu código aqui
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
