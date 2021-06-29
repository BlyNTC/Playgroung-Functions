// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let splited = [];
  splited = str.split(" ");
  return splited;
}

// Desafio 4
function concatName(arr) {
  let result = [];
  let str = "";
  result.push(arr[arr.length - 1]);
  result.push(arr[0]);
  str = result.join(", ");
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 0;
  let totalPoints = 0;
  winPoints = wins * 3;
  totalPoints = winPoints + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(arr) {
  let counter = 0;
  let highestNum = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === highestNum) {
      counter++;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1";
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return "cat2";
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arr) {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (arr[i] % 3 === 0) {
      result.push("fizz")
    } else if (arr[i] % 5 === 0) {
      result.push("buzz")
    } else {
      result.push("bug!")
    }
  }
  return result;
}

// Desafio 9
function encode(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "a":
        arr[i] = "1"
        break;
      case "e":
        arr[i] = "2"
        break;
      case "i":
        arr[i] = "3"
        break;
      case "o":
        arr[i] = "4"
        break;
      case "u":
        arr[i] = "5"
        break;
      default:
        break;
    }
  }
  return arr.join("")
}

function decode(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "1":
        arr[i] = "a"
        break;
      case "2":
        arr[i] = "e"
        break;
      case "3":
        arr[i] = "i"
        break;
      case "4":
        arr[i] = "o"
        break;
      case "5":
        arr[i] = "u"
        break;
      default:
        break;
    }
  }
  return arr.join("")
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
