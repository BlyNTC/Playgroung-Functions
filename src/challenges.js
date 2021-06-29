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
  let maior = 0
  let repeticao = 0
  let index = 0
  for(let i in arr){
    if(maior<arr[i]){
      maior = arr[i];
      for(let j in arr){
        if(maior === arr[i]){
          repeticao+=1;

        }
      }
    }
  }
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mensagem = 'os gatos trombam e o rato foge';
  if(cat1<cat2){
    return 'cat1';
  }else if(cat1>cat2){
    return 'cat2';
  }else if(cat1 === mouse || cat2 === mouse){
    return mensagem;
  }
  // seu código aqui
}
catAndMouse(5,5,5);

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
  // seu código aqui
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
      let index = letra.indexOf(letraFinder)
      deploy += string[i];
    }
  }
  return deploy;
  // seu código aqui
}
encode('giboia');
function decode() {
  // seu código aqui
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
