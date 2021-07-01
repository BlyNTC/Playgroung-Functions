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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
