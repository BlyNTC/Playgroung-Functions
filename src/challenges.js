// Desafio 1

function compareTrue(a, b) {
if(a === true && b === true){
  return true;
}
else {
  return false;
}
}


// Desafio 2
function calcArea(base,altura) {
  let area = (base*altura)/2 ;
  return area;
}


// Desafio 3
function splitSentence(palavras) {
  let palavra ='';
    let array = [];
    for(let letters of palavras){
        if(letters != ' '){
         palavra += letters;
        }
        else {
            array.push(palavra);
            palavra = '';
        }
        
    }
    array.push(palavra)
    return array;
}


// Desafio 4
function concatName(array) {
  let conca = '';
    let index = 0;

    for(let key in array){
        index = key;
    }
    conca = array[index] + ',' + ' ' + array[0];
    
    return conca;
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontuacao = 0;
  pontuacao = (wins * 3) + (ties * 1);
  
  return pontuacao;
}


// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
    let repete = 0;
    for(let num of array){
        if ( num > maiorNumero){
            maiorNumero = num;
        }
    }
    for (let n of array){
        if (n === maiorNumero){
            repete += 1;
        }
    }
    return repete
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distancia1 = 0;
    let distancia2 = 0;
    distancia1 = mouse - cat1;
    distancia2 = mouse -cat2;
    if (distancia1 < 0){
        distancia1 = distancia1 * (-1);
    }
    if (distancia2 < 0){
        distancia2 = distancia2 *(-1);
    }
    if (distancia1 > distancia2){
        return 'cat2';
    }
    else if (distancia1 < distancia2){
        return 'cat1';
    }
    else {
        return "os gatos trombam e o rato foge";
    }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
    for (let numeros of array){
         if (numeros % 3 === 0 && numeros % 5 === 0){
        newArray.push('fizzBuzz');
    }
    else if (numeros % 3 === 0){
        newArray.push('fizz');
    }
    else if (numeros % 5 === 0){
        newArray.push('buzz');
    }
    else {
        newArray.push('bug!');
    }

    }
    return newArray;
}

// Desafio 9
function encode(frase) {
  newfrase = '';
  for (let letter of frase) {
      switch (letter) {
          case 'a':
              newfrase += '1';
              break;
          case 'e':
              newfrase += '2';
              break;
          case 'i':
              newfrase += '3';
              break;
          case 'o':
              newfrase += '4';
              break;
          case 'u':
              newfrase += '5';
              break;
          
          default:
              newfrase += letter;
      
      }
  }
  return newfrase;
}

function decode(frase) {
  newfrase = '';
  for (let letter of frase) {
      switch (letter) {
          case '1':
              newfrase += 'a';
              break;
          case '2':
              newfrase += 'e';
              break;
          case '3':
              newfrase += 'i';
              break;
          case '4':
              newfrase += 'o';
              break;
          case '5':
              newfrase += 'u';
              break;
          
          default:
              newfrase += letter
      
      }
  }
  return newfrase;
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
