// Desafio 10
function techList(techs, name) {
  // seu código aqui
  let result = [], order = techs.sort();

  if (techs == 0){
    result = 'Vazio!';
  } else {
    for (let tec of order) {
      result.push({tech: tec, 'name': name});
    }
  }

  return result;
}

// Desafio 11
function generatePhoneNumber(listOfNumbers) {
  // seu código aqui
  let result = 0, listConvertedForString = '', keepGoing = false;


  if (listOfNumbers.length != 11) {

    result = "Array com tamanho incorreto.";

    return result;

  } else {

    for (let numberFirstCheck of listOfNumbers) {
      let couterOfRepeatNumbers = 0;
  
      if (numberFirstCheck < 0 || numberFirstCheck > 9) {

        result = "não é possível gerar um número de telefone com esses valores";

        return result;
      } else {

        for (let numberSecondCheck of listOfNumbers) {
  
          if (numberFirstCheck === numberSecondCheck) {
            couterOfRepeatNumbers += 1;
          }
    
        }
    
        if (couterOfRepeatNumbers >= 3) {

          result = "não é possível gerar um número de telefone com esses valores";

          return result;

        }

      }      
  
    }
    
  } 


  for (let index = 0; index < listOfNumbers.length; index += 1) {

    if (index == 0) {

      listConvertedForString += '(';
      listConvertedForString += `${listOfNumbers[index]}`;

    } else if (index == 2) {

      listConvertedForString += ')';
      listConvertedForString += ` `;
      listConvertedForString += `${listOfNumbers[index]}`;

    } else if (index == 7) {

      listConvertedForString += '-';
      listConvertedForString += `${listOfNumbers[index]}`;
      
    } else {

      listConvertedForString += `${listOfNumbers[index]}`;

    }
    
  }

  result = listConvertedForString;

  return result;

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let lineOfTriangle = [lineA, lineB, lineC], conditionToBeATriangle = [];

  for (let line of lineOfTriangle) {

    let sum = 0, difference =  [], resultOfDifference = 0;;

    for (let othersLines of lineOfTriangle) {
      
      if (line !== othersLines) {

        sum += othersLines;
        difference.push(othersLines);

      }

    }

    resultOfDifference = Math.abs(difference[0] - difference [1]);

    if (line < sum && line > resultOfDifference){

      conditionToBeATriangle.push(true);

    } else {

      conditionToBeATriangle.push(false);

    }

  }

  if (conditionToBeATriangle[0] === true && conditionToBeATriangle[1] === true && conditionToBeATriangle[2] === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  let cupOfWater = 0, retorno = 0;

  for (let bebida of bebidas) {

    for (let index = 1; index <= 9; index += 1) { 

      if (bebida == index) {

        cupOfWater += parseInt(bebida);

      }

     }

  }

  if (cupOfWater == 1) {

    retorno = `${cupOfWater} copo de água`;

  } else {

    retorno = `${cupOfWater} copos de água`;

  }

  return retorno;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
