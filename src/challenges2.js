// Desafio 10
function techList(arrayNomes, name) {
  let arraySaida = [];
  arrayNomes.sort();
  if (arrayNomes.length === 0) {
    return "Vazio!";
  } else {
    for (let index = 0; index < arrayNomes.length; index += 1) {
      let informacoes = {
        tech: "",
        name: name
      }
      informacoes.tech = arrayNomes[index];
      arraySaida.push(informacoes);
    }
    return arraySaida
  }
}
let arraaay = ["React", "Jest", "HTML", "CSS", "JavaScript"];
console.log(techList(arraaay, "Lucas"));
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
