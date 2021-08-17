// Desafio 10
function techList(techs, name) {
  if (techs.length > 0) {
    return techs.sort().map((tech) => {
      tech = { tech, name };
      return tech;
    });
  }
  return 'Vazio!';
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  return phoneNumber;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
