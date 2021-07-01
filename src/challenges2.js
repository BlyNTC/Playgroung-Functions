// Desafio 10
function techList(array, name) {
  if (array === null || array.length === 0) {
    return "Vazio!";
  } else {
    array.sort();
    for (let i in array) {
      array[i] = {tech:array[i],name:name};
    }
  }
  return array;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"lucas"));

// Desafio 11
function generatePhoneNumber(array) {
  let formatoTelefone = '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
  let repeat = 0;

  if (array.length !== 11){
    return 'Array com tamanho incorreto.';
      } else {
    for(let i of array) {
      if (i < 0 || i > 9){
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }

  for (let i of array){
    for (let j of array){
      if (i === j){
        repeat += 1;
        if (repeat >= 3){
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
    repeat = 0;
  }
  return formatoTelefone;
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
