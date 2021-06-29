// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base*height)/2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let last = array.length -1;
  let string = array[last] + ", " + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins,ties) {
  let points = wins*3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let highest = array[0];
  for (let i of array) {
    i > highest ? highest = i : highest;
  }
  let highestCount = 0;
  for (let i of array) {
    i === highest ? highestCount +=1 : highestCount;
  }
  return highestCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 < distCat2) {
    return "cat1";
  } else if (distCat2 < distCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i of array) {
    if (i%3===0 && i%5===0) {
      result.push("fizzBuzz");
    } else if (i%3===0) {
      result.push("fizz");
    } else if (i%5===0) {
      result.push("buzz");
    } else {
      result.push("bug!")
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let array = string.split('');
  for (let i in array) {
    switch (array[i]) {
      case 'a':
        array[i]="1";
        break;
      case 'e':
        array[i] = "2";
        break;
      case 'i':
        array[i] = "3";
        break;
      case 'o':
        array[i] = "4";
        break;
      case 'u':
        array[i] = "5";
        break;
        
    }
  }
  array = array.join("");
  return array;
}
function decode(string) {
  let array = string.split('');
  for (let i in array) {
    switch (array[i]) {
      case '1':
        array[i]="a";
        break;
      case '2':
        array[i] = "e";
        break;
      case '3':
        array[i] = "i";
        break;
      case '4':
        array[i] = "o";
        break;
      case '5':
        array[i] = "u";
        break;
        
    }
  }
  array = array.join("");
  return array;
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
