// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    console.log('Vazio!');
  }

  if (array.length === 5) {
    let technologies = [];
    let sortedArray = array.sort();
    for (let i = 0; i < array.length; i += 1) {
      technologies[i] = {
        tech: sortedArray[i],
        name: name,
      };
    }
    return technologies;
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
