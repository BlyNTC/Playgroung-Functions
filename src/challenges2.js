// Desafio 10
function techList(array,name) {
  let newArray = [];
    arrayTeste = array.length;
    if (arrayTeste > 0 ){
      array.sort()
    for (let palavra of array){
        let objeto = {
            tech : palavra,
            name : name 
        }
      
        newArray.push(objeto);
    }
    }
    else {
        newArray = "Vazio!"
    }
    
    
    return newArray;
}


// Desafio 11
function generatePhoneNumber(array) {
  let mensagem = 0;
    let repete = 0;
   if (array.length === 11){
       for (let n of array){
           if (n <= 9 && n >= 0){
               for(num of array){
                   for (nume of array){
                       if(num === nume){
                           repete += 1;
                       }

                   }
                   if(repete > 2){
                       mensagem = "não é possível gerar um número de telefone com esses valores";
                        break;
                   }
                   else{
                    mensagem = '(' + array[0] + array[1] + ")" + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
                   }
                   repete = 0;
               }

           }
           else {
               mensagem = "não é possível gerar um número de telefone com esses valores";
               break;
           }
       }


   }
   else {
       mensagem = 'Array com tamanho incorreto.';
   }
            
          return mensagem;
}
// console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,0,1]))



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
