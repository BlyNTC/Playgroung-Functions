// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ")
}

// Desafio 4
function concatName(array) {
  let primeiro = array.shift();
  let ultimo = array.pop();
  return ultimo + ", " + primeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties;
  return winPoints + tiePoints;
}

// Desafio 6
function highestCount(array) {
  let result = 0;
  for (let i in array) {
    if (Math.max(...array) === array[i]) {
      result = result + 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1Mouse = Math.abs(mouse - cat1);
  let distanciaCat2Mouse = Math.abs(mouse - cat2);
  if (distanciaCat1Mouse < distanciaCat2Mouse) {
    return "cat1";
  } else if (distanciaCat1Mouse > distanciaCat2Mouse) {
    return "cat2";
  } else if (distanciaCat1Mouse === distanciaCat2Mouse) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let result = [];
  for (let i in numeros) {
    if ((numeros[i] % 3) === 0 && (numeros[i] % 5) === 0) {
      result.push("fizzBuzz");
    }
    else if ((numeros[i] % 3) === 0) {
      result.push("fizz");
    }
    else if ((numeros[i] % 5) === 0) {
      result.push("buzz");
    }
    else if ((numeros[i] % 3) !== 0 && (numeros[i] % 5) !== 0) {
      result.push("bug!");
    }
  }
  return result;
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
