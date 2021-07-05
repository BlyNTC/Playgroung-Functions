// Desafio 10
function techList(array, name) {
  let arrayTech = [];
  let arraySorted = array.sort();
  if (array < 1) {
    return 'Vazio!';
  } else {
    for (let tech of arraySorted) {
      arrayTech.push({ tech, name });
    }
    return arrayTech;
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  var count = 0;
  for (let number of numbers) {
    for ( let number1 of numbers){
      if (number === number1){
        count += 1
      }
    }
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    count = 0;
  }

  let telephoneNumber = '(' + numbers[0] + numbers[1] + ') ';
  for (let index = 2; index < numbers.length; index += 1) {
    if (index === 7) {
      telephoneNumber += '-';
    }
    telephoneNumber += numbers[index];
  }
  return telephoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let cond = false;
  if(lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return cond = true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return cond = true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return cond = true;
  } else {
    return cond;
  }
}

// Desafio 13
function hydrate(string) {
  var regex = /\d+/g;
  var stringNumbers = string.match(regex);
  var sum = 0;
  for (let numbers of stringNumbers){
    sum += parseInt(numbers);
  }
  let message = '';
  if (sum < 2) {
    message = sum + ' copo de água';
  } else {
    message = sum + ' copos de água';
  }
  return message;  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
