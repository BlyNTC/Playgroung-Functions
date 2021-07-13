// Desafio 10
function techList(technoList, name) {
  // seu código aqui
  let objTechnoName = [];

  technoList.sort();

  for (let tech of technoList) {
    objTechnoName.push({ tech, name });
  }

  return objTechnoName.length === 0 ? 'Vazio!' : objTechnoName;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let sumA = lineB + lineC;
  let sumB = lineA + lineC;
  let sumC = lineA + lineB;

  if (lineA < (sumA) && lineB < (sumB) && lineC < (sumC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(order) {
  // seu código aqui
  let numString = order.match(/\d+/g).map(Number);
  let glassWater = 0;

  for (let index = 0; index < numString.length; index += 1) {
    glassWater += numString[index];
  }
  if (glassWater === 1) {
    return `${glassWater} copo de água`;
  } if (glassWater > 1) {
    return `${glassWater} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
