// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
 if(lineA > (lineB + lineC) && lineB > (lineA + lineC) && lineC > (lineA + lineB)) {
  return false;
} else if (lineA < (lineB - lineC) && lineB < (lineA - lineC) && lineC < (lineA - lineB)) {
  return false;
} else {
  console.log("Não é um triângulo válido");
}

}
console.log(10,4,8);

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
