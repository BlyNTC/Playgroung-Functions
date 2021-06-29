// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(b, h) {
  const area = (b * h) / 2;
  return area;
}

// Desafio 3
function splitSentence(s) {
  return s.split(" ");
}

// Desafio 4
function concatName(arr) {
  return arr[arr.length - 1] + ", " + arr[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(arr) {
  let maiorNumero = 0, seRepete = 0;

  arr.forEach(element => {
    if (element === arr[0]) {
      maiorNumero = element;
    }

    if (element > maiorNumero) {
      maiorNumero = element;
      seRepete = 1;
    } else if (element === maiorNumero) {
      seRepete++;
    }
  });

  return seRepete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let absCat1 = Math.abs(cat1);
  let absCat2 = Math.abs(cat2);

  let d1 = Math.abs(absCat1 - mouse);
  let d2 = Math.abs(absCat2 - mouse);

  if (d1 == d2) {
    return "os gatos trombam e o rato foge";
  }

  if (d1 < d2) {
    return "cat1";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let newArr = [];

  arr.forEach(el => {
    if (el % 5 === 0 && el % 3 === 0) {
      newArr.push("fizzBuzz");
    } else if (el % 5 === 0) {
      newArr.push("buzz");
    } else if (el % 3 === 0) {
      newArr.push("fizz");
    } else {
      newArr.push("bug!");
    }
  })

  return newArr;
}

// Desafio 9
function encode(s) {
  let newString = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      newString += s[i].replace('a', 1);
    } else if (s[i] === 'e') {
      newString += s[i].replace('e', 2);
    } else if (s[i] === 'i') {
      newString += s[i].replace('i', 3);
    } else if (s[i] === 'o') {
      newString += s[i].replace('o', 4);
    } else if (s[i] === 'u') {
      newString += s[i].replace('u', 5);
    } else {
      newString += s[i];
    }
  }

  return newString;
}
function decode(s) {
  let newString = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      newString += s[i].replace(1, 'a');
    } else if (s[i] === '2') {
      newString += s[i].replace(2, 'e');
    } else if (s[i] === '3') {
      newString += s[i].replace(3, 'i');
    } else if (s[i] === '4') {
      newString += s[i].replace(4, 'o');
    } else if (s[i] === '5') {
      newString += s[i].replace(5, 'u');
    } else {
      newString += s[i];
    }
  }

  return newString;
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
