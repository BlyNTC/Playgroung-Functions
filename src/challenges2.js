// Desafio 10
function techList(arrayTech,name) {
  let arrrayJunta =[];
  let vazio = "Vazio!"
  for(i = 0; i < arrayTech.length; i += 1){
    let especificacoes = {
      tech: arrayTech[i],
      name: name
    };
    arrrayJunta.push(especificacoes);// seu código aqui
  }
  if(arrrayJunta.length === 0){
    return vazio;
  } else{
    return arrrayJunta.sort(function(a,b){
      if(a.tech < b.tech){
        return -1;
      } else{
        return true;
      };
    });
  }
}
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let trianguloA = lineB + lineC;
  let trianguloB = lineC + lineA;
  let trianguloC = lineA + lineB;
  let diferenceA = Math.abs(lineB - lineC);
  let diferenceB = Math.abs(lineC - lineA);
  let diferenceC = Math.abs(lineA - lineB);
  if(lineA < trianguloA && lineA > diferenceA){
    return true;// seu código aqui
  } else if(lineB < trianguloB && lineB > diferenceB){
  return true;
  } else if(lineC < trianguloC && lineC > diferenceC){
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

