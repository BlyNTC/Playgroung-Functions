/* eslint-disable complexity */
// Desafio 10
function techList(skill, name) {
  let skillSort = skill.sort();
  if (skill.length === 0) { return ('Vazio!'); }
  let listObjects = [{ tech: skillSort[0], name }, {
    tech: skillSort[1], name }, { tech: skillSort[2], name }, { tech: skillSort[3], name },
  { tech: skillSort[4], name },
  ];
  return listObjects;
}

techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');

// Desafio 11
function generatePhoneNumber(telephoneArray) {
  if (telephoneArray.length !== 11 || telephoneArray === []) {
    return ('Array com tamanho incorreto.');
  }
  let telephoneNumber = '';
  let newArray = telephoneArray;
  for (let iTelephone = 0; iTelephone < telephoneArray.length; iTelephone += 1) {
    let repNumbers = 0;
    for (let iRep = 0; iRep < newArray.length; iRep += 1) {
      if (telephoneArray[iTelephone] === telephoneArray[iRep]) { repNumbers += 1;
      }
      if (telephoneArray[iTelephone] < 0 || telephoneArray[iTelephone] > 9 || repNumbers >= 3) {
        return ('não é possível gerar um número de telefone com esses valores');
      }
    }
  }
telephoneNumber = `(${telephoneArray[0]}${telephoneArray[1]}) ${telephoneArray[2]}${telephoneArray[3]}${telephoneArray[4]}${telephoneArray[5]}${telephoneArray[6]}-${telephoneArray[7]}${telephoneArray[8]}${telephoneArray[9]}${telephoneArray[10]}`;
  telephoneNumber = telephoneNumber.toString();
  return telephoneNumber;
}

generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  if (lineA < (lineB + lineC) === true && lineA > Math.abs(lineB - lineC) === true) {
    return true;
  } if (lineB < (lineC + lineA) === true && lineB > Math.abs(lineA - lineC) === true) {
    return true;
  } if (lineC < (lineB + lineA) === true && lineC > Math.abs(lineB - lineC) === true) {
    return true;
  }
  return false;
}

triangleCheck(30, 23, 10);

// Desafio 13
function hydrate(drinks) {
  let drinksNumberfind = /\d+/g;
  let arrayDrinks = drinks.match(drinksNumberfind);
  let numberDrinks = arrayDrinks.map(Number);
  let sumOfDrinks = 0;
  for (let i = 0; i < numberDrinks.length; i += 1) {
    sumOfDrinks += numberDrinks[i];
  }
  arrayDrinks = sumOfDrinks.toString();
  if (sumOfDrinks === 1) {
    arrayDrinks += ' copo de água';
  } else {
    arrayDrinks += ' copos de água';
  }
  return arrayDrinks;
}
hydrate('1 cerveja, 5 cachaças e 3 vodkas');

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
