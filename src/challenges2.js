// Desafio 10
function techList(array,name) {
  let listaDeTec = [];
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    let objeto = {
      tech: array[index],
      name: name
    }
    listaDeTec.push(objeto);
  }  
  if (listaDeTec == "") {
    return "Vazio!";
  } else {
    return listaDeTec;
  }
}
console.log(techList(['React','Jest','HTML','CSS','JavaScript'], "Lucas"));


// Desafio 11
function generatePhoneNumber(telefone) {
  let contador = 0;
  if (telefone.length !== 11) {
    return "Array com tamanho incorreto.";
  } else {
    for (let numero = 0; numero <= telefone.length; numero += 1) {
      contador = 0;
     for (let chave = 0; chave <= telefone.length; chave += 1){
       if (telefone[chave] < 0 || telefone[chave] > 9) {
         return "não é possível gerar um número de telefone com esses valores"
       }
       if (telefone[numero] === telefone[chave]) {
         contador += 1;
       }
       if (contador >= 3){
         return "não é possível gerar um número de telefone com esses valores"
       }
     }
    }
    return "(" + telefone[0] + telefone[1] + ")" + " " + telefone[2] +telefone [3] + telefone [4] + telefone [5] + telefone [6] + " - " + telefone [7] + telefone [8] + telefone [9] + telefone[10];
  }
}



// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  if (Math.abs((lineA - lineB || lineA - lineB )) < lineC && lineC < (lineA + lineB)) {
    return true;
  } else if (Math.abs((lineA - lineC || lineA - lineC)) < lineB && lineB < (lineA + lineC)){
    return true;
  } else if (Math.abs((lineB - lineC || lineB - lineC)) < lineA && lineA < (lineB + lineC)){
    return true;
  } else {
    return false;
  }
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