// Desafio 10
function techList(array, name) {
  let techArray = [];
  array.sort();
  if (array.length == 0) {
    return "Vazio!";
  } else {
    for (let tech of array) {
      techArray.push({tech, name});
    }
  } return techArray;
}

// Desafio 11
function generatePhoneNumber(array) {
  let numeros = []
  let compara = true
  for (let i = 0; i < array.length; i++) {
    let repete = 0
    for (let u = 0; u < array.length; u++) {
      if (array[i] === array[u]) {
        repete++
      }
    }
    if (repete >= 3) {
      numeros.push(array[i])
      compara = false
    }
  }
  if (array.length != 11){
    return ("Array com tamanho incorreto.")}
  else if (Math.min(...array) < 0 || Math.max(...array) > 9) {
    return ("não é possível gerar um número de telefone com esses valores")
  } else if (compara === false) {
    return ("não é possível gerar um número de telefone com esses valores")
  } 
  else {
    return ('(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10])
 
  }
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
