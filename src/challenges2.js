// Desafio 10
/*function techList(tech, name) {
  let arr = {
    tech: null,
    name: null,
  }
  for () {
    if (tech === null && name === null) {
      return 'Vazio!'
    } else {
      arr['tech'] = tech;
      arr['name'] = name;
    }
    return arr
  }
}*/

// Desafio 11
/*function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return "Array com tamanho incorreto."
  } else
  if () {

  }
  return (array[0],array[1])+array[2]+array[3]+array[4]+array[5]+'-'+array[6]+array[7]+array[8]+array[9]
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}
*/
// Desafio 13
function hydrate(String) {
  let arr = [];
  let numero = 0;
  for (let elemento of String) {
    arr.push(elemento) 
    if (elemento === '1' || elemento === '2' || elemento === '3' || elemento === '4' || elemento === '5' || elemento === '6' || elemento === '7' || elemento === '8' || elemento === '9') {
       Number(elemento)
      //if (typeof elemento == Number) { //Problema: todos os elementos que estao sendo submetidos ao push, estao sendo guardados como strings. Como resolver isso?
        numero += 1
      }
    
      if (numero === 1) {
        return `${numero} copo de água`
      } else {
        return `${numero} copos de água`
      }
    }
    
  }

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
