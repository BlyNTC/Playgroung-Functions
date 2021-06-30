/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-duplicated-branches */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable radix */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable complexity */
// Desafio 10
function techList(array, name) {
  let techlist = [];
  array.sort();
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    let object = {
      tech: array[i],
      // eslint-disable-next-line object-shorthand
      name: name,
    };
    techlist.push(object);
  }
  // eslint-disable-next-line eqeqeq
  if (techlist == '') {
    return 'Vazio!';
  }
  return techlist;
}

// Desafio 11
// eslint-disable-next-line complexity
// eslint-disable-next-line sonarjs/cognitive-complexity
function generatePhoneNumber(array) {
  let number = `(${array[0]}${array[1]}) ${array[2]}${array[3] 
  }${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  let count = 0;
  let msg = 'não é possível gerar um número de telefone com esses valores';
  for (let a = 0; a <= 9; a++) {
    for (let b = 0; b < array.length; b++) {
      if (array[b] == a) { count += 1; }
      if (count > 2) { number = msg; }
    }
  count = 0;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) { number = msg;} 
    else if (array[i] > 9) { number = msg;}
  }
  if (array.length != 11) { number = 'Array com tamanho incorreto.'}
  return number;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result;
  if (lineA > lineB + lineC) {
    result = false;
  } else if (lineB > lineA + lineC) {
    result = false;
  } else if (lineC > lineB + lineA) {
    result = false;
  }
  if (lineA < Math.abs(lineB - lineC)) {
    result = false;
  } else if (lineB < Math.abs(lineA - lineC)) {
    result = false;
  } else if (lineC < Math.abs(lineB - lineA)) {
    result = false;
    } else {
      result = true;
      }
  return result;
}

// Desafio 13
function hydrate(string) {
  let regex = /\d+/g;
  let matches = string.match(regex);
  let qtd = 0;
  for (let i = 0; i < matches.length; i += 1) {
    let int = parseInt(matches[i]);
    qtd += int;
  }
  if (qtd > 1) {
    let text = `${qtd} copos de água`;
  } else {
  let text = '1 copo de água';
  }
  return text;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
