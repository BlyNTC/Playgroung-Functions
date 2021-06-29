// Desafio 10
function techList(arr, names) {
  let techs = [];
  for (index in arr.sort()) {
    techs.push({tech:arr[index], name:names});
  }
  if(arr[1] == techs[1]){
    return('Vazio!')
  } else {
    return techs;
  }
}

// Desafio 11
function generatePhoneNumber(phone) {
  let cancelador = 0;
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let areaCode = [phone[0], phone[1]];
  let phoneNum1 = [phone[2], phone[3], phone[4], phone[5], phone[6]];
  let phoneNum2 = [phone[7], phone[8], phone[9], phone[10]];
  if(phone.length != 11 ) {
    return "Array com tamanho incorreto."
  } else {
    for(number in numbers) {
    let counter = 0;
      for(let index = 0; index <=  phone.length; index++) {
        if(numbers[number] == phone[index]) {
          counter++;
          if (counter >= 3) {
            return ("não é possível gerar um número de telefone com esses valores");
          }
        }
        if((phone[index] < 0 | phone[index] > 9)) {
          cancelador = 1;
        }
      }
    }
    if(cancelador > 0) {
      return "não é possível gerar um número de telefone com esses valores" 
    } else {
        return ("(" + areaCode.join('') + ")" + " " + phoneNum1.join("") + "-" + phoneNum2.join(""));
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let bolA;
  let bolB;
  let bolC;
   ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) ? bolA = true : bolA = false;
   ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC))) ? bolB = true : bolB = false;
   ((lineC < lineB + lineA) && (lineC > Math.abs(lineB - lineA))) ? bolC = true : bolC = false;
   if(bolA == false | bolB == false | bolC == false) {
     return false;
   } else {
     if (bolA == true) {
       if(bolB == true) {
         if(bolC == true) {
           return true;
         }
       }
     }
   }
}

// Desafio 13
function hydrate() {
  let counter = 0;
  regEx = /[1-9]+/g;
  index =  str.match(/[1-9]+/g);
  for(let i in index){
  counter = counter + Math.abs(index[i]);
  }
  if(counter == 1) {
    return ('1 copo de água');
  } else {
    return (counter + ' copos de água');
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
