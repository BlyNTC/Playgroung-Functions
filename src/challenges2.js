// Desafio 10
function techList(techs,alunoNome) {
  let techsOr = techs.sort();
  let resp=[];
  if(!techsOr.length === false){
      for(let i = 0; i <techsOr.length ; i +=1){
       resp.push({
                  tech: techsOr[i],
                  name: alunoNome
                })
      }
      return resp;
    }else{
      return 'Vazio!';
    }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let abLineAB = Math.abs(lineA - lineB);
  let abLineAC = Math.abs(lineA - lineC); 
  let abLineCB = Math.abs(lineC - lineB);

  if(lineA + lineB > lineC && lineC > abLineAB ){
      return true;
  }else if(lineA + lineB > lineC && lineC > abLineAB ){
      return true;
  }else if(lineA + lineB > lineC && lineC > abLineAB ){
      return true;
  }else{
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
