// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true){
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(" ");
}

// Desafio 4
function concatName(arr) {
  let concat = arr[arr.length - 1] + ", " + arr[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(nums) {
  let i2 = 0;
  let soma = 0;
  for (let index = 0; index < nums.length; index += 1) {
    if (nums[i2] < nums[index]) {
        i2 = index;
    }
} 
for (let index2 = 0; index2 < nums.length; index2 += 1) {
    if (nums[index2] === nums[i2]) {
    soma = soma + 1;
    }
  } return soma;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = (mouse) - (cat1);
  let distancia2 = (mouse) - (cat2);
  if (distancia1 < distancia2) {
      return 'cat1'
  } else if (distancia2 < distancia1) {
      return 'cat2'
  } else {
      return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let arr1 = [];
  for (let index = 0; index < arr.length; index += 1) {
      if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      arr1.push('fizzBuzz')
  } else if (arr[index] % 3 === 0 && arr[index] % 5 !== 0) {
      arr1.push('fizz')
  } else if (arr[index] % 3 !== 0 && arr[index] % 5 === 0) {
      arr1.push('buzz')
  } else if (arr[index] % 3 !== 0 && arr[index] % 5 !== 0) {
      arr1.push('bug!')
  }
  }
   return (arr1);
}

// Desafio 9
function encode() {
  // seu código aqui
}
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
