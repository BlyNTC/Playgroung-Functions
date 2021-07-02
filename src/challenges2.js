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
function verificaTamanho(tam) {
  if (tam !== 11) {
    return 'Array com tamanho incorreto.';
  }
  return '';
}
function verificaRepeticoes(n, str, i) {
  let count = 1;
  for (let j = i + 1; j < str.length; j += 1) {
    if (n === str[j]) {
      count += 1;
    }
  }
  return count;
}
function phone (format, number) {
  for (let i = 0; i < number.length; i += 1) {
    count = verificaRepeticoes(number[i], number, i);
    if ((number[i] < 0 || number[i] > 9) || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    } 
    if (i === 0) {
      format += '(' + number[i];
    } else if ((i > 0 && i < 2) || (i > 2 && i < 7) || (i > 7)) {
      format += number[i];
    } else if (i === 2) {
      format += ') ' + number[i];
    } else if (i === 7) {
      format += '-' + number[i];
    }
    count = 1;
  }
  return format;
}
function generatePhoneNumber(number) {
  let numberFormat = verificaTamanho(number.length);
  let count = 0;
  if(numberFormat !== ''){
    return numberFormat;
  }
  numberFormat = phone(numberFormat, number);
  return numberFormat;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
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
