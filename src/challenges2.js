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

// Desafio 11
function generatePhoneNumber(numberArray) {
  // if (numberArray.length !== 11) {
  //   return 'Array com tamanho incorreto.';
  // }
  // let telNumber = `(${}) -`
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
