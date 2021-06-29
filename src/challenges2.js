// Funções auxiliares
function countNumbers(array) {
  let count = {};

  for (let num of array) {
    count[num] = num in count ? count[num] + 1 : 1;
  }
  return count;
}

function phoneNumberLengthCheck(array) {
  return array.length === 11;
}

function phoneNumberRangeCheck(array) {
  for (let num of array) {
    if (num < 0 || num > 9) { return false; }
  }
  return true;
}

function phoneNumberCountCheck(array) {
  let count = countNumbers(array);

  for (let num in count) {
    if (count[num] >= 3) { return false; }
  }
  return true;
}

function triangleSideCheck(sideToCheck, side2, side3) {
  return sideToCheck < (side2 + side3) && sideToCheck > Math.abs(side2 - side3);
}

// Desafio 10
function techList(array, name) {
  // seu código aqui
  let list = [];

  if (array.length === 0) { return 'Vazio!'; }

  array.sort();
  for (let str of array) {
    list.push({
      tech: str,
      name,
    });
  }
  return list;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (!phoneNumberLengthCheck(array)) {
    return 'Array com tamanho incorreto.';
  }
  if (!phoneNumberRangeCheck(array) || !phoneNumberCountCheck(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let part1 = `(${array[0]}${array[1]}) `;
  let part2 = `${array.slice(2, 7).join('')}-`;
  let part3 = `${array.slice(7).join('')}`;

  return part1 + part2 + part3;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let checkA = triangleSideCheck(lineA, lineB, lineC);
  let checkB = triangleSideCheck(lineB, lineA, lineC);
  let checkC = triangleSideCheck(lineC, lineA, lineB);

  return checkA && checkB && checkC;
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
