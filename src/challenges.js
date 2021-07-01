// Desafio 1
function compareTrue(bol1, bol2) {
  if(bol1 === true && bol2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let arr = []
  let palavra = '';
  for(let i = 0; i<frase.length; i+=1){
    if(frase[i] === ' '){
      arr.push(palavra);
      palavra = ''
    }
    if(frase[i] != ' '){
    palavra += frase[i]
  }
  }
  arr.push(palavra);
  return arr
}

// Desafio 4
function concatName(arr) {
  let primeiraPalavra = arr[0];
  let ultimaPalavra = '';
  for(let i in arr){
    ultimaPalavra = arr[i];
  }
  let ultimaPrimeira = ultimaPalavra +', ' + primeiraPalavra;
  return ultimaPrimeira;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(arr) {
  let maior = 0;
  let count = 0
  for(let i in arr){
    if(maior<arr[i]){
      maior = arr[i];
    }
  }
  for(let j in arr){
    if(maior === arr[j])[
      count+=1
    ]
  }
  if(maior === 0){
    return 3;
  }else{
    return count
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mensagem = 'os gatos trombam e o rato foge';
  let desnegativa1 = Math.abs(cat1) - Math.abs(mouse);
  let desnegativa2 = Math.abs(cat2) - Math.abs(mouse);
  if(Math.abs(desnegativa1)<Math.abs(desnegativa2)){
    return 'cat1';
  }else if(Math.abs(desnegativa1)>Math.abs(desnegativa2)){
    return 'cat2';
  }else if(Math.abs(desnegativa1) === Math.abs(desnegativa2)){
    return mensagem;
  }
} //Para este desafio, fui ao Slack e vi que tinha pessoas com a mesma dúvida, um colega chamado Waldir Lucena comentou sobre Math.abs(), isto ajudou a resolver o exercício.

// Desafio 8
function fizzBuzz(arr) {
  let deploy = []
  for(let i in arr){
    if(arr[i]%3===0 && arr[i]%5===0){
      deploy.push('fizzBuzz')
    }else if(arr[i]%3===0 && arr[i]%5!==0){
      deploy.push('fizz')
    }else if(arr[i]%3!==0 && arr[i]%5===0){
      deploy.push('buzz')
    }else{
      deploy.push('bug!')
    }
  }
  return deploy;
}

// Desafio 9
function encode(string) {
  let code = [1,2,3,4,5];
  let letra = ['a','e','i','o','u']
  let letraFinder = ''
  let deploy = '';
  for(let i = 0;i<string.length;i+=1){
    letraFinder = string[i];
    let indexLetra = letra.indexOf(string[i])
    if(string[i]===letra[indexLetra]){
      let index = letra.indexOf(letraFinder)
      deploy += code[index];
    }else if(string[i]!==letra[indexLetra]){
      deploy += string[i];
    }
  }
}
function decode(string) {
  let letra = ['1','2','3','4','5'];
  let code = ['a','e','i','o','u']
  let letraFinder = ''
  let deploy = '';
  for(let i = 0;i<string.length;i+=1){
    letraFinder = string[i];
    let indexLetra = letra.indexOf(string[i]);
    if(string[i]===letra[indexLetra]){
      deploy += code[indexLetra];
    }else if(string[i]!==letra[indexLetra]){
      deploy += string[i];
    }
  }
  return deploy;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
