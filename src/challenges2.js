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
  let repete = 0;
    let n = 0;
    if (array.length === 11) {
        for (let nume of array) {
            if (nume <= 9 && nume >= 0) {
                n += 1;
            }
        }
            if (n === array.length) {
                mensagem = '(' + array[0] + array[1] + ")" + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
            } else {
                mensagem = "não é possível gerar um número de telefone com esses valores";
            }

        for (let numeros of array) {
            for (let num of array) {
                if (numeros === num) {
                    repete += 1
                }

            }
            if (repete > 3) {
                mensagem = "não é possível gerar um número de telefone com esses valores";
                break;
            }
            repete = 0;

        }

        
    } else {
        mensagem = 'Array com tamanho incorreto.';
    }
    return mensagem;
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
