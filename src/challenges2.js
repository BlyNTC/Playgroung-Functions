// Desafio 10
function techList(list, name) {
// seu código aqui 
  let arrayTech = [];
  list.sort();
  for (let tech of list) {
    arrayTech.push({
      tech,
      name;
    });
  }
  return arrayTech.length === 0 ? 'Vazio!' : arrayTech;
}

// Desafio 11
function generatePhoneNumber(phone) {
// seu código aqui
  let counter = 0;
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let j = 0; j <= phone.length; j+=1) {
      counter = 0;
      for (let i = 0; i <= phone.length; i+=1) { //phone[0] == 1 phone[0+1] == 1 phone[0+2] == 9
        if (phone[i] < 0 | phone[i] > 9) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
        if (phone[j] == phone[i]) {
          counter+=1;
          3
        }
        if (counter >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
    return "(" + phone[0] + phone[1] + ")" + " " + phone[2] + phone[3] + phone[4] + phone[5] + phone[6] + "-" + phone[7] + phone[8] + phone[9] + phone[10];
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
// seu código aqui
  let arr = [lineA, lineB, lineC];
  arr.sort();
  if (arr[0] + arr[1] > arr[2] && arr[2] > Math.abs(arr[1] - arr[0])) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(str) {
// seu código aqui
  let water = 0;
  for (let i = 0; i < str.length; i+=1) {
    if (isFinite(str.charAt(i))) water += Number(str.charAt(i));
  }
  if (water === 1) return `${water} copo de água`;
  if (water > 1) return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
