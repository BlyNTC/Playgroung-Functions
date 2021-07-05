// Desafio 10
function techList(techs, Name) {
  let array = [];
  let techsOrdem = techs.sort();
  for (let i = 0; i < techs.length; i += 1) {
    let obj = {
      tech: techsOrdem[i],
      name: Name,
    };
    array.push(obj);
  }
  if (array.length === 0) {
    return 'Vazio!';
  }
  return array;
}
// Desafio 11
function verificaRepeticoes(n, number) {
  let count = 0;
  for (let j of number) {
    if (n === j) {
      count += 1;
    }
  }
  if (count >= 3) {
    return true;
  }
  return false;
}
function condicoes(number) {
  for (let i of number) {
    if (i > 9 || i < 0 || verificaRepeticoes(i, number)) {
      return true;
    }
  }
  return false;
}
function generatePhoneNumber(number) {
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (condicoes(number)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let numberFormat = `(${number[0]}${number[1]}) `;
  for (let i = 2; i < number.length; i += 1) {
    if (i === 7) {
      numberFormat += '-';
    }
    numberFormat += number[i];
  }
  return numberFormat;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = true;
  if ((lineA > lineB + lineC) || (lineB > lineA + lineC) || (lineC > lineA + lineB)) {
    check = false;
  }
  return check;
}
// Desafio 13
function hydrate(str) {
  let r = /\d+/g;
  let numbers = (str.match(r));
  let count = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    count += Number(numbers[i]);
  }
  if (count > 1) {
    return `${count} copos de água`;
  }
  return `${count} copo de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
