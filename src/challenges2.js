// Desafio 10
function techList(tecnologia, name) {
  tecnologia.sort();
  let listaDeTechs;
  if (tecnologia.length === 0) {
    listaDeTechs = "Vazio!";
  } else {
    listaDeTechs = [];
    for (let key in tecnologia) {
      listaDeTechs.push({
        tech: tecnologia[key],
        name: name,
      });
    }
  }
  return listaDeTechs;
}
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineC + lineA && lineC < lineB + lineA) {
    return true;
  }
  return false;
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
