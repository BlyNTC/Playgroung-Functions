// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  let list = [];
  for (const tech of techs.sort()) {
    list.push({ tech, name });
  }
  return list;
}

// Auxiliares para Desafio 11
function countRepeats(arr) {
  let counts = {};
  for (const num of arr) {
    // if key is undefined, create it, else increase it
    counts[num] = counts[num] === undefined ? 1 : counts[num] + 1;
  }
  return counts;
}

function threeOrMoreRepeats(arr) {
  let counts = countRepeats(arr);
  for (const key in counts) {
    if (counts[key] >= 3) {
      return true;
    }
  }
  return false;
}

// Desafio 11
function generatePhoneNumber(numArr) {
  // se qtd de num for diferente de 11, erro 1
  if (numArr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let numString = numArr.join('');
  // se algum dígito repetido mais de 3x
  // ou números com mais de um dígito, erro 2
  if (threeOrMoreRepeats(numArr) || numString.length !== 11) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  // faça o número certinho
  return `(${numString.slice(0, 2)}) ${numString.slice(2, 7)}-${numString.slice(7)}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let list = [lineA, lineB, lineC];
  for (const line of list) {
    let sum = list[1] + list[2];
    let diff = Math.abs(list[1] - list[2]);
    if (line > sum || line < diff) {
      return false;
    }
    list.push(list.shift());
  }
  return true;
}

// Desafio 13
function hydrate(str) {
  // a linha abaixo:
  // - captura os dígitos na string e coloca em uma array usando RegExp
  // - converte eles em números e os soma em um único valor
  let count = str.match(/(\d)/g).reduce((acc, i) => {
    acc += +i;
    return acc;
  }, 0);
  if (count === 1) {
    return '1 copo de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
