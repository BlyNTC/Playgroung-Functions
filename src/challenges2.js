// Desafio 10
function techList(array, name) {
  switch (array.length) {
    case 0:
      return 'Vazio!'
      break;
    case 5:
      array.sort();
      let arrayTech = [];
      let nome = name;
      for (let i of array) {
        arrayTech.push({
          tech: i,
          name: nome
        })
      };
      return arrayTech
      break;
  };
};


// Desafio 11
function generatePhoneNumber(arrayNumber) {
  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.'
  };
  for (let cont1 = 0; cont1 < arrayNumber.length; cont1 += 1) {
     let repeat3 = 0;
    for (let cont2 = 1; cont2 < arrayNumber.length; cont2 += 1) {
      if (arrayNumber[cont1] === arrayNumber[cont2]) {
        repeat3 += 1
      };
    };
    if (arrayNumber[cont1] > 9 || arrayNumber[cont1] < 0 || repeat3 > 2) {
      return 'não é possível gerar um número de telefone com esses valores'
    };
  };

  let ddd = `${arrayNumber[0]}${arrayNumber[1]}`
  let fistPartNumber = `${arrayNumber[2]}${arrayNumber[3]}${arrayNumber[4]}${arrayNumber[5]}${arrayNumber[6]}`
  let lastPartNumber = `${arrayNumber[7]}${arrayNumber[8]}${arrayNumber[9]}${arrayNumber[10]}`
  return `(${ddd}) ${fistPartNumber}-${lastPartNumber}`
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)){
      return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)){
      return true;
  } else if(lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)){
      return true;
  } else{
      return false
  };
};

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
