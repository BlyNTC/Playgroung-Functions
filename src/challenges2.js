// Desafio 10
function techList(techs, name) {
var array = [];
let techsOrdem = techs.sort();
  for(let i = 0; i<techs.length; i+=1){
    let obj = {
      tech: techs[i],
      name: name
    }
    array.push(obj);
  }
  if(array.length == 0){
    return 'Vazio!';
  }else{
    return array;
  }
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
