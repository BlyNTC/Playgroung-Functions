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
function generatePhoneNumber(number) {
  let numerFormat = '';
  let count = 1;
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < number.length; i += 1) {
    for (let j = i + 1; j < number.length; j += 1) {
      if (number[i] === number[j]) {
        count += 1;
      }
    }
    if ((number[i] < 0 || number[i] > 9) || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    } 
    if (i === 0) {
      numerFormat += '(' + number[i];
    } else if ((i > 0 && i < 2) || (i > 2 && i < 7) || (i > 7)) {
      numerFormat += number[i];
    } else if (i === 2) {
      numerFormat += ') ' + number[i];
    } else if (i === 7) {
      numerFormat += '-' + number[i];
    }
    count = 1;
  }
  return numerFormat;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = false;
  if (((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) || ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC))) || ((lineC < lineA + lineB && (lineC > Math.abs(lineA - lineB))))) {
    check = true;
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
    return count + ' copos de água';
  } 
  return count + ' copo de água';
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
