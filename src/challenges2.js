// Desafio 10
function techList(array, name) {
  switch (array.length){
    case 0:
        return 'Vazio!'
        break;
    case 5:
        array.sort();
        let arrayTech = [];
        let nome = name;
        for (let i of array){
          arrayTech.push({tech: i, name: nome})
           };        
        return arrayTech    
        break;
  };
};


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
