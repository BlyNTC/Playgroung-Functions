// Desafio 10
function techList(tech, name) {
  tech.sort()
  let techListOrdered = [];
  for (let index = 0; index < tech.length; index += 1) {
    let objectOrdered = {
      tech: tech[index],
      name: name
    }
    techListOrdered.push(objectOrdered)
  }
  if (techListOrdered.length === 0) {
    return 'Vazio!';
  } else {
    return techListOrdered;
  }
  
}


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) || lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) || lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  } else {
    return false;
  }
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
