// Desafio 10
function techList(tech, name) {
  let arrayTech = [];
  let arrayTechSort = tech.sort();
  for (index = 0; index < tech.length; index += 1) {
    let object = {
      tech: arrayTechSort[index],
      name: name
    }
    arrayTech.push(object);
  }
  if (arrayTech.length === 0) {
    return 'Vazio!'
  } else {
    return arrayTech;
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  
  let count = 0;
  for (let index of numbers) {
  if (index < 0 || index > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}

  for (let index of numbers) {
    for (let index2 of numbers) {
      if (index === index2) {
        count += 1;
      }
    }
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      count = 0;
    }
  }

  return '(' + numbers[0] + numbers[1] + ') ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10];
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle = false;
  if (lineA < (lineB + lineC) && lineA > (Math.abs(lineB - lineC))) {
    triangle = true;
  }
  return triangle;
}

// Desafio 13
function hydrate(string) {
  let alcoholCups = string.replace(/\D/g, '');
  let alcoholArray = alcoholCups.split('').map(Number);
  let sum = 0;
  for (index = 0; index < alcoholArray.length; index += 1) {
    sum += alcoholArray[index];
  }
  if (sum === 1) {
    return sum + ' copo de água';
  } else {
    return sum + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
