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
function generatePhoneNumber(phone) {
  // seu código aqui
  if (phone.length !== 11){
    return "Array com tamanho incorreto."
  }else{
    let numRepeat = phone.reduce(function(reps, nums){
      reps[nums] = (reps[nums] ? reps[nums]+=1 : 1);
      return reps;
    }, {})
    if (phone.some((x) => x < 0 || x > 9 || numRepeat[x] >= 3)){ return "não é possível gerar um número de telefone com esses valores";
  }else{
      let result = "(" + phone[0] + phone[1] + ") " + phone[2] + phone [3] + phone[4] + phone[5] + phone[6] + "-" + phone[7] + phone[8] + phone[9] + phone [10]

      return result
    }
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
