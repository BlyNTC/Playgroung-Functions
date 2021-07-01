// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let obj = [];
  tech.sort();
  if (tech.length === 5) {
    for (let i of tech) {
      obj.push({
        tech: i,
        name: name
      })
    }
  } else if (tech.length === 0) {
    return 'Vazio!'
  }
  return obj
}

// Desafio 11
function generatePhoneNumber(nums) {
  // seu código aqui
  let numeroTel = ''
  let parent1 = '('
  let parent2 = ')'
  let traco = '-'
  let repete = [0,1,2,3,4,5,6,7,8,9]
  let repetido = 0

  if (nums.length !== 11) {
    return 'Array com tamanho incorreto.'
  } 
  for (let i of nums) {
    if (i < 0) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    else if (i > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    for (let index of repete) {
      if (index = i)
      repetido += 1
    }
    if (repetido >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
nums.splice(0, 0, parent1)
nums.splice(3, 0, parent2)
nums.splice(8, 0, traco)
numeroTel = nums.toSring()
return numeroTel
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
