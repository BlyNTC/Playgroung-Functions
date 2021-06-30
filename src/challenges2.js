// Desafio 10
let arrayTech = ["React", "Jest", "HTML", "CSS", "JavaScript"];

function techList(arrayTech, name) {
  // seu código aqui
  let arrayTechSort = arrayTech.sort();
  let arrayObj = [];
  for (let i = 0; i < arrayTech.length; i++) {
    let obj = {
      tech: arrayTech[i],
      name: name,
    };
    arrayObj.push(obj);
  };

  if (arrayObj.length === 0) {
    return "Vazio!";
  } else {
    return arrayObj;
  }
}

console.log(techList(arrayTech, "Lucas"));

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
