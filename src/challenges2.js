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
function hydrate(hidratar) {
  // precisei pesquisar sobre split, replace e parseint
  let numberResult = hidratar.replace(/[^0-9]/g, "")
  numberResult = numberResult.split("");
  let resultado;

  if (numberResult.length === 1) {
    resultado = parseInt(numberResult) + " copo de água"
  } else if (numberResult.length === 2) {
    resultado = parseInt(numberResult[0]) + parseInt(numberResult[1]) + " copos de água"
  } else {
    resultado = parseInt(numberResult[0]) + parseInt(numberResult[1]) + parseInt(numberResult[2]) + " copos de água"
  }
  return resultado;
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
