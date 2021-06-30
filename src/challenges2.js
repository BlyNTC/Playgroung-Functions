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
    let numero1 = nt.filter(function(number) {
      return number == 1;
    });
    let numero2 = nt.filter(function(number) {
      return number == 2;
    });
    let numero3 = nt.filter(function(number) {
      return number == 3;
    });
    let numero4 = nt.filter(function(number) {
      return number == 4;
    });
    let numero5 = nt.filter(function(number) {
      return number == 5;
    });
    let numero6 = nt.filter(function(number) {
      return number == 6;
    });
    let numero7 = nt.filter(function(number) {
      return number == 7;
    });
    let numero8 = nt.filter(function(number) {
      return number == 8;
    });
    let numero9 = nt.filter(function(number) {
      return number == 9;
    });
    let numero0 = nt.filter(function(number) {
      return number == 0;
    });

    let numeroFormatado;
    
    if(numero0.length >= 3 || numero1.length >= 3 || numero2.length >= 3 || numero3.length >= 3 ){
      return 'não é possível gerar um número de telefone com esses valores';
    }else if(numero4.length >= 3 || numero5.length >= 3 || numero6.length >= 3  ){
      return 'não é possível gerar um número de telefone com esses valores';
    }else if(numero8.length >= 3 || numero9.length >= 3 || numero7.length >= 3 ){
      return 'não é possível gerar um número de telefone com esses valores';
    }else { for(let i = 0;i < nt.length; i +=1){
            if (nt[i] < 0 || nt[i] > 9 ){
              return 'não é possível gerar um número de telefone com esses valores';
            } else if (nt.length !== 11 ){
              return 'Array com tamanho incorreto.';
            }else {
               numeroFormatado = "("+ nt[0]+nt[1] + ")" + " " + nt[2]+ nt[3]+ nt[4]+ nt[5]+ nt[6] + "-" + nt[7]+nt[8]+ nt [9]+ nt [10];
            }
      }
    }
    return numeroFormatado;
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
function hydrate(bar){

  var bebidas = bar.split('');
  let coposSoma = 0;
 
  for(let i = 0; i < bebidas.length; i +=1){
    if(bebidas[i] == 1){
      coposSoma += 1;
    }else if(bebidas[i] == 2){
      coposSoma += 2;
    }else if(bebidas[i] == 3){
      coposSoma += 3;
    }else if(bebidas[i] == 4){
      coposSoma += 4;
    }else if(bebidas[i] == 5){
      coposSoma += 5;
    }else if(bebidas[i] == 6){
      coposSoma += 6;
    }else if(bebidas[i] == 7){
      coposSoma += 7;
    }
  }
  if(coposSoma == 1){
    return coposSoma + ' copo de água';
  }else{
    return coposSoma + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
