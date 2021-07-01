// Desafio 10
function techList(learning, name) {
  // seu código aqui
  let listalinda = [];
  learning.sort();

  if (learning.length == 0){
    return 'Vazio!';
  }

  for (let key of learning){
    let stuff = {
      tech: key,
      name: name,
    }

    listalinda.push(stuff);
  }

  return listalinda;
}

// Desafio 11
function generatePhoneNumber(numbah) {
  // seu código aqui
  let phonenumber = '(';
  let checkrepeat = 0;
  
  if (numbah.length != 11){
    return 'Array com tamanho incorreto.';
  }

  //checks if it's less than 0 and greater than 9
  for (let key of numbah){
    if (key < 0 || key > 9){
      return 'não é possível gerar um número de telefone com esses valores';
    }

    // Encontrei essa função integrada bem bacana aqui: https://www.geeksforgeeks.org/javascript-number-isinteger-function/
    if (Number.isInteger(key) == false){
      return 'não é possível gerar um número de telefone com esses valores';
    }

    //checks if it repeats 3 times
    for (let repeat of numbah){
      if (key == repeat){
        checkrepeat+=1;
      }      
    }
    if (checkrepeat >= 3){
      return 'não é possível gerar um número de telefone com esses valores';
    }
    else
    checkrepeat = 0;
  }

  //NOW it's gonna make the phone number jesus FUCK
  //ex: (12) 34567-8901
  //to achando que preciso de um FOR IN aqui porque FOR OF nao distingue posição de valor
  
  for (let key in numbah){
    if (key == 2){
      phonenumber += ') ';
    }

    if (key == 7){
      phonenumber += '-';
    }

    phonenumber += numbah[key];
  }
   
  return phonenumber;
}



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  
  if (lineA + lineB < lineC || lineB + lineC < lineA || lineA + lineC < lineB){
    return false;
  }
  else
  return true;


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
