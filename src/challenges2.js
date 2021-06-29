// Desafio 10
function techList(techs,alunoNome) {
  let techsOr = techs.sort();
  let resp=[];
  if (!techsOr.length === false){
      for (let i = 0; i <techsOr.length ; i += 1){
       resp.push({
                  tech: techsOr[i],
                  name: alunoNome
                })
      }
      return resp;
    } else {
      return 'Vazio!';
    }
}

// Desafio 11
function generatePhoneNumber(nt) {
    let numeroFormatado;
    let st = nt.toString()
    for(let i = 0;i < nt.length; i +=1){
      if (nt[i] < 0 || nt[i] > 9 ){
        return "não é possível gerar um número de telefone com esses valores";
      } else if (st.indexOf(st[i]) === 3){
        return "não é possível gerar um número de telefone com esses valores";
      } else if (nt.length !== 11 ){
        return "Array com tamanho incorreto.";
      } else {
       numeroFormatado = "("+ nt[0]+nt[1] + ")" + " " + nt[2]+ nt[3]+ nt[4]+ nt[5]+ nt[6] + "-" + nt[7]+nt[8]+ nt [9]+ nt [10];
      }
    }
  return (numeroFormatado);
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let abLineAB = Math.abs(lineA - lineB);
  let abLineAC = Math.abs(lineA - lineC); 
  let abLineCB = Math.abs(lineC - lineB);

  if(lineA + lineB > lineC && lineC > abLineAB ){
      return true;
  } else if (lineA + lineB > lineC && lineC > abLineAB ){
      return true;
  } else if (lineA + lineB > lineC && lineC > abLineAB ){
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
