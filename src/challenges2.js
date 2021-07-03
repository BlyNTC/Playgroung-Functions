// Desafio 10
function techList(array=[], nome) {
  // seu código aqui
  let tec ={
    tech: '',
    name: ''
  };
  let tec2 = array.sort();
  let tec3 = [];
  for (let i = 0; i < tec2.length; i += 1){
    if (tec2.length > 0){
    tec ={
      tech: tec2[i],
      name: nome
    }
    tec3.push(tec);
    }
  }
  if( tec2.length < 1){
    tec3 = 'Vazio!';
  }
  return tec3;
}


// Desafio 11
function generatePhoneNumber(array=[]){
  // seu código aqui
   
  if (array.length != 11){
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1){
    if (array[i] < 0 || array [i] > 9){
      return 'não é possível gerar um número de telefone com esses valores';
    }
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf Só consegui resolver utilizando esse codigo. ALELUIA!!!!
    var repetidoArray = [];
    var elemento = array[i];
    var idx = array.indexOf(elemento);
    while (idx != -1) {
    repetidoArray.push(idx);
    idx = array.indexOf(elemento, idx + 1);
    }
    if ( repetidoArray.length > 2){
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let telefone = '(' + array[0] + array[1] + ') ' + array[2]+array[3]+array[4]+array[5]+array[6]+'-'+array[7]+array[8]+array[9]+array[10];

  return telefone;
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let triangulo = false;
  if (lineA + lineB > lineC && lineB + lineC > lineA && lineC + lineA > lineB && Math.abs(lineA - lineB) < lineC && Math.abs(lineB - lineC) < lineA && Math.abs(lineA - lineC) < lineB) {
    triangulo = true;
  }
return triangulo;
}


// Desafio 13
function hydrate(frase) {
  // seu código aqui
  let teste = /\d+/g;
  let numero = frase.match(teste);
  let soma = 0;
  for (let i = 0; i < numero.length; i += 1){
    soma += parseInt(numero[i]);
  }
  if (soma > 1){
    resposta = soma + ' copos de água';
  }
  else{
    resposta = soma + ' copo de água';
  }

  return resposta;
}



module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
