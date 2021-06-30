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
  // seu código aqui
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
