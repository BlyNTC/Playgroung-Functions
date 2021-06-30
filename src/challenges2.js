// Desafio 10
function techList(arrayTech,name) {
  let arrayObj = [];
  let arrayTechSort = arrayTech.sort();
  for (i6 = 0; i6 < arrayTech.length; i6++){
    let bloco = {
      tech: arrayTechSort[i6],
      name: name,
    }
    arrayObj.push(bloco)
  }
  if (arrayObj.length == []){
    return "Vazio!"
  }
  else {
    return arrayObj
  }
  
}

// Desafio 11
function generatePhoneNumber(arrayNumeros) {
  let arrayNumerosReais = [];
  if (arrayNumeros.length != 11){
    return "Array com tamanho incorreto."
  }
  else {
    for (i = 0; i < arrayNumeros.length; i++){
      let cont = 0;
      for (i2 = 0; i2 < arrayNumeros.length; i2++){
        if (arrayNumeros[i] == arrayNumeros[i2]){
          cont++
        }
        if (arrayNumeros[i] < 0 || arrayNumeros[i] > 9 || cont >= 3){
          return "não é possível gerar um número de telefone com esses valores"
          break
        }
        else{
          arrayNumerosReais.push += arrayNumeros[i];
        }
      }
    }
    return '('+arrayNumeros[0]+arrayNumeros[1]+')'+' '+arrayNumeros[2]+arrayNumeros[3]+arrayNumeros[4]+arrayNumeros[5]+arrayNumeros[6]+'-'+arrayNumeros[7]+arrayNumeros[8]+arrayNumeros[9]+arrayNumeros[10]
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
