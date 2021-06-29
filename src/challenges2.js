// Desafio 10
function techList(arr, name) {
  let studies = arr.sort();
  let newArr = [];

  if (studies.length === 0){
    return 'Vazio!';
  } else {
    studies.forEach(el => {
      newArr.push({
        tech: el, 
        name: name
      });
    });
  
    return newArr;
  }
}

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length != 11) return "Array com tamanho incorreto.";

  arr.forEach(el => {
    if (el < 0 || el > 9) return "não é possível gerar um número de telefone com esses valores"
  });

  let maskedPhone = $`(${arr[0]}${arr[1]}) ${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`
  return maskedPhone
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA + lineB) > lineC) {
    if ((lineA + lineC) > lineB) {
      if ((lineC + lineB) > lineA) return true;
    }
  }
  return false;
}

// Desafio 13
function hydrate(s) {
  let num = s.match(/\d+/g);
  let sum = 0;
  
  num.forEach(el => sum += Number(el));

  if (num == 1) return sum + " copo de água";
  return sum + " copos de água";
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
