// Desafio 10
function techList(arrayTech, name) {
  // FONTE DE PESQUISA STACKOVERFLOW E SLACK
  let array = [];
  arrayTech.sort();

  if (arrayTech.length === 0) {
    return 'Vazio!'
  }

  for (let tech of arrayTech) {
    array.push({
      tech,
      name
    });
  }
  return array
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))


// Desafio 11
function generatePhoneNumber(array) {
  let conta = 0;
  if (array.length !== 11) {
    return "Array com tamanho incorreto." ;
  } else {
      for (let ind of array){
        conta = 0;
        for (let jei of array){
        if (jei < 0 | jei > 9){
          return "não é possível gerar um número de telefone com esses valores";
        }

        if (jei == ind){
           conta++
        }
        if (conta >= 3){
        return "não é possível gerar um número de telefone com esses valores";
        }
     }
   }
      return "(" + array[0] + array[1] + ")" + ' ' + array[2] + array[3] + array[4]+ array[5]+ array[6] + '-' + array[7] + array[8] + array[9] + array[10] ;

  }
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let retornoA = 0;
  let retornoB = 0;
  let retornoC = 0;

  if(lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)){
    retornoA = true;
  }

  if(lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)){
    retornoB = true;
  }

  if(lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)){
    retornoC = true
  }

  if( retornoA && retornoB && retornoC === true){
    return true
  } else {
    return false
  }

}

// Desafio 13
function hydrate(string) {
  var numbers = string.match(/\d+/g).map(Number);
let soma = numbers.reduce((a, b) => a + b);
if (soma === 1){
  return `${soma} copo de água`
} else {
    return `${soma} copos de água`;
}
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
