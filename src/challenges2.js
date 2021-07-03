// Desafio 10
function techList(tech, name) {
  // seu código aqui

  let ordenados = tech.sort();
  let tecnologias = [];

  if (tech.length > 0){

    for ( let y = 0; y < tech.length; y += 1 ){
  
      tecnologias.push(
        {
          tech: ordenados[y],
          name: name
        })
      }
    }else{
      return "Vazio!";
  }
  return tecnologias;
}

// Desafio 11
function generatePhoneNumber(numeroDeTelefone) {
  // seu código aqui

  let mutacao,
  numeroValidoSortt;
mutacao = numeroDeTelefone;
numeroValidoSortt = mutacao.slice().sort();
 
  let numeroFormaTado = ["(", 0, 0, ")", " ", 0, 0, 0, 0, 0, "-", 0, 0, 0, 0];

  if ( numeroDeTelefone.length !== 11 ){
    return "Array com tamanho incorreto.";
  }else{
    for ( let i = 0; i < numeroDeTelefone.length; i += 1 ){
      if (numeroDeTelefone[i] < 0 || numeroDeTelefone[i] > 9){
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }

  for (let i = 0; i < 11; i += 1){
    if (numeroValidoSortt[i] === numeroValidoSortt[i + 1] && numeroValidoSortt[ i + 2] === numeroValidoSortt[i]){
      return "não é possível gerar um número de telefone com esses valores";
  }
}

numeroFormaTado[1] = numeroDeTelefone[0];
numeroFormaTado[2] = numeroDeTelefone[1];
numeroFormaTado[5] = numeroDeTelefone[2];

  for (let y = 6; y < 10; y += 1 ){
      numeroFormaTado[y] = numeroDeTelefone[ y - 3 ];
  }

  for (let y = 11; y < 15; y += 1 ){
    numeroFormaTado[y] = numeroDeTelefone[ y - 4 ];
  }

    let resultado = numeroFormaTado.join('');
    return resultado;
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
