// Desafio 10
function techList(array, name) {
  //Fonte de pesquisa StackOverFlow e Slack
  let arrayTech = [];
  array.sort();

  if (array.length === 0) {
    return 'Vazio!'
  }

  for (let tech of array) {
    arrayTech.push({
      tech,
      name
    });
  }
  return arrayTech
}

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
