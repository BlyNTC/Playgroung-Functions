// Desafio 1
function compareTrue(bool1, bool2) {
  comp = bool1 && bool2;
  return comp;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let split = frase.split(' ');
  return split;
}

// Desafio 4
function concatName(arr) {
  return (arr[arr.length - 1] + ", " + arr[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(arr) {
  let order = arr.sort((a, b) => a - b);
  let maj = 0;
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] === order[arr.length - 1]) {
      maj++;
    }
  }
  return maj;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) - Math.abs(mouse - cat2) == 0) {
    return ("os gatos trombam e o rato foge");
  } else {
    return cat1 > cat2 ? "cat2" : "cat1";
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let control = []
  for (let index in arr) {
    let contador5 = (arr[index] % 5);
    let contador3 = (arr[index] % 3);
    if (contador5 == 0 | contador3 == 0) {
      (arr[index] % 5 == 0) && (arr[index] % 3 == 0) ? control.push("fizzBuzz"): arr[index] % 5 == 0 ? control.push("buzz") : control.push("fizz");
    } else {
      control.push("bug!");
    }
  }
  return control;
}

// Desafio 9
function encode(str) {
  let control = [];
  let split = str.split("")
  for (c = 0; c <= 1; c++) {
    control = split.join("");
    if (c == 0) {
      for (i in split) {
        switch (split[i]) {
          case "a":
            split[i] = "1";
            break;
          case "e":
            split[i] = "2";
            break;
          case "i":
            split[i] = "3";
            break;
          case "o":
            split[i] = "4";
            break;
          case "u":
            split[i] = "5";
            break;
        }
      }
    } else {
      return control;
    }
  }
}

function decode(str) {
  let control = [];
  let split = str.split("")
  for (c = 0; c <= 1; c++) {
    control = split.join("");
    if (c == 0) {
      for (i in split) {
        switch (split[i]) {
          case "1":
            split[i] = "a";
            break;
          case "2":
            split[i] = "e";
            break;
          case "3":
            split[i] = "i";
            break;
          case "4":
            split[i] = "o";
            break;
          case "5":
            split[i] = "u";
            break;
        }
      }
    } else {
      return control;
    }
  }
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
