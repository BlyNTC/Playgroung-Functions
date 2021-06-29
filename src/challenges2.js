// Desafio 10
//https://stackoverflow.com/questions/7479520/javascript-cannot-set-property-of-undefined
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
function triangleCheck(a, b, c) {
  if ((a < b + c) && (a > Math.abs(b-c)) && (b < a + c) && (b > Math.abs(a - c)) && (c < (a + b)) && (c > (Math.abs(a - b)))) return true;
  return false;
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
