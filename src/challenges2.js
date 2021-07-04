// Desafio 10
function techList(techList,name) {
  // seu código aqui
  let listaOrdenados =[]; // array que vai receber os objetos.
  techList.sort(); // ordenar as informações do array recebido.
  for(let index in techList) {
    // Adiciona os objetos em ordem para o novo array.
    listaOrdenados.push({
      tech: techList[index],
      name: name,
    }) 
  }
  // Verifica se é vazio ou não o array de entrada.
  if (techList.length === 0){
    listaOrdenados = 'Vazio!';
    return listaOrdenados; // retorna com a informaçõ de vazio!
  }
  else {
    return listaOrdenados; // retorna com os objetos.
  }
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

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
