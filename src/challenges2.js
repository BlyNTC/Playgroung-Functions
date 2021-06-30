// Desafio 10
function techList(techs, name) {
  // seu código aqui
  techs.sort()
  let r = []
  if(techs.length === 0){
    return "Vazio!"
  }else{
    for(i = 0; i<techs.length; i++){
      let o = {};
      o.tech = techs[i];
      o.name = name
      r.push(o)
    }
  }
  return r
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
