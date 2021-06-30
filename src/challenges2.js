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
  let phonenumber;
  let cachenumber;
  let checkrepeat = 0;
  
  if (numbah.length != 11){
    return 'não é possível gerar um número de telefone com esses valores';
  }

  //checks if it's less than 0 and greater than 9
  for (let key of numbah){
    if (key < 0 || key > 9){
      return 'não é possível gerar um número de telefone com esses valores';
    }

    //checks if it repeats 3 times
    for (let repeat of numbah){
      if (key == repeat){
        checkrepeat++;
      }
      else if (checkrepeat >= 3){
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    checkrepeat = 0;
  }

  //NOW it's gonna make the phone number jesus FUCK
  

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
