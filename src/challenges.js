// Desafio 1
function compareTrue(carbon, oxygen) {
  // seu código aqui
  let carbonmonoxyde;
  if (carbon == true && oxygen == true){
    return carbonmonoxyde = true;
  }
  else
  return carbonmonoxyde = false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triArea;
  triArea = base * height / 2;

  return triArea;
}
 
// Desafio 3
function splitSentence(word) {
  // seu código aqui
  let splitword = [];
  let cacheword = '';
  
  for(let key of word){
    if (key != ' '){
      cacheword += key;
    }
    else{
      splitword.push(cacheword);
      cacheword = '';
    }
  }

  splitword.push(cacheword);

  return splitword;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let manolos = '';
  for (let i = array.length; i >= 0; i-=1){
    if (i == array.length-1){
      manolos += array[i] + ', ';
    }
    else if (i == 0){
      manolos += array[i];
    }
  }

  return manolos;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let score = 0;
  score += wins*3 + ties;
  return score;
}

// Desafio 6
function highestCount(arrayah) {
  // seu código aqui
  let numOft = 0;
  let highestnum = arrayah[0];

  for (let key of arrayah){
    if (key >= highestnum){
      highestnum = key;
    }
  }

  for (let index of arrayah){
    if (highestnum == index){
      numOft++;
    }
  }

  return numOft;  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let message;
  let distC1;
  let distC2;

  if (cat1 > mouse){
    distC1 = cat1 - mouse;
  }
  else{
    distC1 = mouse - cat1;
  }

  if (cat2 > mouse){
    distC2 = cat2 - mouse;
  }
  else{
    distC2 = mouse - cat2;
  }

  if (distC1 > distC2){
    message = 'cat2';
  }

  else if (distC1 < distC2){
    message = 'cat1';
  }

  else
  message = 'os gatos trombam e o rato foge';

  return message;
}
  
// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let results = [];
  
  for (let key of numbers){
    if (key % 3 == 0 && key % 5 == 0){
      results.push('fizzBuzz');
    }
    else if (key % 3 == 0 && key % 5 != 0){
      results.push('fizz')
    }
    else if (key % 3 != 0 && key % 5 == 0){
      results.push('buzz');
    }
    else
    results.push('bug!');  
  }
  return results;
}

// Desafio 9
function encode(toencode) {
  // seu código aqui
  let encoded = '';

  for (let key of toencode){
    switch (key){
      case 'a':
        encoded += '1';
        break;
      
      case 'e':
        encoded += '2';
        break;

      case 'i':
        encoded += '3';
        break;

      case 'o':
        encoded += '4';
        break;

      case 'u':
        encoded += '5';
        break;

      default:
        encoded += key;
    }   
  }
  return encoded;
}

function decode(todecode) {
  // seu código aqui
  let decoded = '';

  for (let key of todecode){
    switch (key){
      case '1':
        decoded += 'a';
        break;

      case '2':
        decoded += 'e';
        break;

      case '3':
        decoded += 'i';
        break;

      case '4':
        decoded += 'o';
        break;

      case '5':
        decoded += 'u';
        break;

      default:
        decoded += key;
    }
  }
  return decoded;
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
