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
