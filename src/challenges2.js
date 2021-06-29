// Desafio 10
function techList(techNames, name) {
  
  if(techNames.length === 0)
    return "Vazio!";
  
  techNames.sort();
  let techObjects = [];

  for(let key in techNames)
  {
    let temp = {
      tech: techNames[key],
      name: name,
    };
    techObjects.push(temp);
  }

  return techObjects;
}

// Desafio 11
function generatePhoneNumber(array) {
  if(array.length !== 11)
   return "Array com tamanho incorreto.";
  
  for(let key in array)
  {
    if(array[key] < 0 || array[key] > 9)
      return "não é possível gerar um número de telefone com esses valores";

    let contador = 0;
    for(let index = 0; index < array.length; index++)
    {
      if(array[key] === array[index])
      {
        contador += 1;
        if(contador >= 3)
          return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  return "(" + array[0] + array[1] + ") " + array[2] + array[3] + array[4] + array[5] + array[6] + "-" + array[7] + array[8] + array[9] + array[10]
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < lineB + lineC && lineA > Math.abs(lineB - lineC))
    return true;
  else if(lineB < lineA + lineC && lineB > Math.abs(lineA - lineC))
    return true;
  else if(lineC < lineB + lineA && lineC > Math.abs(lineB - lineA))
    return true;
  else
    return false;
}

// Desafio 13
function hydrate(frase) {
  let numbers = frase.match(/\d+/g).map(Number);
  let soma = 0;
  for(let key in numbers) {
    soma = soma + numbers[key];
  }

  if(soma > 1)
    return soma + ' copos de água';
  else
    return soma + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

console.log(hydrate("107 cachaça, 85 cervejas e 13 copo de vinho"));
