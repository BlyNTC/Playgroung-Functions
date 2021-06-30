// Desafio 10
function techList(techs, name) {
  // seu código aqui
  techs.sort();
  let r = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < techs.length; i++) {
    let o = {};
    o.tech = techs[i];
    o.name = name;
    r.push(o);
  
  }
  return r
}

// Desafio 11
function generatePhoneNumber(phone) {
  // seu código aqui
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    let numRepeat = phone.reduce(function(reps, nums){
      reps[nums] = (reps[nums] ? reps[nums] += 1 : 1);
      return reps;
    }, {})
    if (phone.some((x) => x < 0 || x > 9 || numRepeat[x] >= 3)) { return 'não é possível gerar um número de telefone com esses valores';
  } else {
      let result = '(' + phone[0] + phone[1] + ') ' + phone[2] + phone [3] + phone[4] + phone[5] + phone[6] + '-' + phone[7] + phone[8] + phone[9] + phone [10];

      return result;
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let array = [ [lineA,lineB - lineC], [lineB,lineA-lineC], [lineC,lineA-lineB] ];
  return array.every(x => (x[0]> Math.abs(x[1])) && (2*x[0] < (lineA + lineB + lineC)));
}


// Desafio 13
function hydrate(string) {
  // seu código aqui
  let reg = /\d+/g;
  let bebidas = (string.match(reg));
  let agua = bebidas.map((e,i) => parseInt(bebidas[i])).reduce((a,e) => e + a);

  if (agua > 1) {
    return agua + ' copos de água';
  } 
  return '1 copo de água';
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
