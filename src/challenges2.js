// Desafio 10
function techList(skill, name) {
  let skillSort = skill.sort();
  if (skill.length === 0) {
    return ('Vazio!');
  }

  listObjects = [
    {
      tech: skillSort[0],
      name,
    },
    {
      tech: skillSort[1],
      name,
    },
    {
      tech: skillSort[2],
      name,
    },
    {
      tech: skillSort[3],
      name,
    },
    {
      tech: skillSort[4],
      name,
    },
  ];

  return listObjects;
}

techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
