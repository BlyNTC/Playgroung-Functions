// Desafio 1
function compareTrue(x, y) {
  if(x === true && y === true){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}

// Desafio 3
function splitSentence(word) {
    return word.split(' ')
}

// Desafio 4
function concatName(words) {
  let firstWord = words[0];
  let lastWord = words[words.length -1]
  return (lastWord + ', ' + firstWord)
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPts = (wins * 3) + (ties * 1)
  return totalPts
}

// Desafio 6
function highestCount(array) {
    let maiorNumero = Math.max(...array)
    let totalMaiorNumero = 0;
    for (let i = 0; i <= array.length; i += 1){
      if (maiorNumero === array[i]){
        totalMaiorNumero += 1
      };
    };
    return totalMaiorNumero
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dcat1 = Math.abs(mouse - cat1);
  let dcat2 = Math.abs(mouse - cat2);
  if (dcat1 < dcat2){
    return 'cat1'
  }else if (dcat1 > dcat2){
    return 'cat2'
  }else{
    return 'os gatos trombam e o rato foge'
  };
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i += 1){
    if (array[i] % 3 === 0  && array[i] % 5 === 0){
      result.push('fizzBuzz')
    }else if(array[i] % 5 === 0){
      result.push('buzz')
    }else if(array[i] % 3 === 0){
      result.push('fizz')
    }else{
      result.push('bug!')
    };
  };
  return result
}

// Desafio 9
function encode(word) {
  let result = ''
    for (let i of word){
        switch (i){
            case 'a':
                result += 1;
                break;
            case 'e':
                result += 2;
                break;
            case 'i':
                result += 3;
                break;
            case 'o':
                result += 4;
                break;
            case 'u':
                result += 5;
                break;
            default:
                result += i
        };
    };
    return result
}


function decode(word) {
  let result = ''
    for (let i of word){
        switch (i){
            case '1':
                result += 'a';
                break;
            case '2':
                result += 'e';
                break;
            case '3':
                result += 'i';
                break;
            case '4':
                result += 'o';
                break;
            case '5':
                result += 'u';
                break;
            default:
                result += i
        };
    };
    return result
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
