// Desafio 10
function techList(tec,name) {
  let arr = []

  if(tec.length === 0){

    return 'Vazio!';
  }

  for(let tech of tec.sort()){

    arr.push({tech,name,});     
  }

  return arr;

}

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
