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

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

// Desafio 11
function generatePhoneNumber(numbers) {
  //   let phoneNumber;
//   console.log(phoneNumber)
//   let response;
//   for (let index in numbers) {
//     if (numbers.length !== 11) {
//       response = 'Array com tamanho incorreto';
//     } else if (numbers[index] < 0 || numbers[index] > 9) {
//       response = 'não é possível gerar um número de telefone com esses valores';
//     } else if {
//       phoneNumber = Math.ceil(Math.random() * numbers[index])}
//     return response;
//   }
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]))

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
