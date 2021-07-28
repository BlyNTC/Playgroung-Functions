// Desafio 10
function techList(tech, name) {
  tech.sort();
  let res = '';
  if(tech.lenght === 0) {
    res = 'Vazio!';
  };
  res = [];
  for (let i in tech) {
    res.push({
      tech: tech[i],
      name,
    });
  }
  return res;
}

// Desafio 11
function generatePhoneNumber() {
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA + lineB) <= lineC ||
  Math.abs(lineA + lineC) <= lineB ||
  Math.abs(lineB + lineC) <= lineA) {
  return false;
}
return true;
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
