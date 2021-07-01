// Desafio 10
function techList(list, name) {
  // seu código aqui 
  let arrayTech = [];
  list.sort();
  for (let tech of list) {
    arrayTech.push({
      tech,
      name
    });
  }
  return arrayTech.length === 0 ? 'Vazio!' : arrayTech;
}

// Desafio 11
function generatePhoneNumber(phone) {
  // seu código aqui
  let counter = 0;
  if (phone.length !== 11) {
    return "Array com tamanho incorreto.";
  } else {
    for (let j = 0; j <= phone.length; j++) {
      counter = 0;
        for (let i = 0; i <= phone.length; i++) { //phone[0] == 1 phone[0+1] == 1 phone[0+2] == 9
        if (phone[i] < 0 | phone[i] > 9) {
          return "não é possível gerar um número de telefone com esses valores";
        }
        if (phone[j] == phone[i]) {
          counter++; 3
        }
        if (counter >= 3) {
          return "não é possível gerar um número de telefone com esses valores";
        }
      }
    }
    return "(" + phone[0] + phone[1] + ")" + " " + phone[2] + phone[3] + phone[4] + phone[5] + phone[6] + "-" + phone[7] + phone[8] + phone[9] + phone[10];
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
