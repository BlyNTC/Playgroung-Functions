// Desafio 10
function techList(arr,name) {
  if(arr.length===0){
    return 'Vazio!'
  }else{
    arr.sort();
    let tec = []
    for(let j in arr){
      tec.push({tech: '', name: ''})
    }
    for(let i in arr){
      tec[i].tech = arr[i];
      tec[i].name = name;
      arr[i]= tec[i];
    }
    return arr;

  }
  // seu código aqui
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
