// Desafio 10
let techNome;
function techList(techs, nome) {
  // seu código aqui
  if(techs.length > 0) {
    techNome = techs;
    techNome.sort()
    let listaObjetos = [];
    for(let indice = 0; indice < techs.length; indice +=  1) {
      let Objetos = {
      tech: techs[indice],
      name: nome,
     
      };

      listaObjetos.push(Objetos);

    }
    
  console.log(listaObjetos);
  return listaObjetos;
  } else return "Vazio!";
  
}

techList(["HTML","CSS","Javascript","React"],"Lucas");


// Desafio 11
function generatePhoneNumber(numeroTel) {
  // seu código aqui
  let ddd = [numeroTel[0]] + [numeroTel[1]]
  let inicial = [numeroTel[2]] + [numeroTel[3]]+ [numeroTel[4]] + [numeroTel[5]]+ [numeroTel[6]];
  let final = [numeroTel[7]] + [numeroTel[8]]+[numeroTel[9]]+[numeroTel[10]];
  let repete = 0;
  let numeroCompleto = "";
 
  if(numeroTel.length != 11){
    return "Array com tamanho incorreto.";  
  } 

  for(let numb of numeroTel){
    if (repete >= 3 || numb < 0 || numb > 9) {
      console.log("não é possível gerar um número de telefone com esses valores");
      return "não é possível gerar um número de telefone com esses valores";
      
           
    }
    repete = 0;
    for(let numero of numeroTel) {
      if( numb === numero) { 
          repete += 1;
      }
    }  
  }
  numeroCompleto = "(" + ddd + ")"+ " " + inicial + "-" + final;
  console.log(numeroCompleto);
  return numeroCompleto;
}

generatePhoneNumber([1, 21, 3, 4, 5, 6, 7, 8, 9, 0, 1]);

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
