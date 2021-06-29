// Desafio 1
function compareTrue(n1, n2) {
  if (n1 && n2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  var area = (base*height/2);
  return area;
}

// Desafio 3
function splitSentence(string) {
  var stringarray = string.split(" ");
  return stringarray;
}

// Desafio 4
function concatName(array) {
  var string = array[array.length-1] + ", " + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  var winpoints = wins * 3;
  var tiepoints = ties;
  return winpoints + tiepoints;
}

// Desafio 6
function highestCount(array) {
  var max = Math.max(...array);
  var count = 0;
  for (i = 0; i < array.length; ++i) {
    if (array[i] == max) {
      count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  var cat1d = cat1 - mouse;
  var cat2d = cat2 - mouse;
  var result = "";

  if (cat1d < 0) {
    cat1d = cat1d * -1;
  }

  if (cat2d < 0) {
    cat2d = cat2d * -1;
  }

  if (cat1d > cat2d) {
    result = "cat2"
  } else if (cat1d < cat2d) {
    result = "cat1"
  } else {
    result = "os gatos trombam e o rato foge";
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  var result = [];
  var final = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0) {
      var a = "fizz";
    } else {
      var a = "null";
    }
    if (array[i] % 5 == 0) {
      var b = "buzz";
    } else {
      b = "null";
    }
    var c = a + b;
    result.push(c);
  }
  for (i = 0; i < result.length; i++) {
    if (result[i] == "nullnull") {
      final.push("bug!");
    } else if (result[i] == "fizzbuzz") {
      final.push("fizzBuzz");
    } else if (result[i] == "fizznull") {
      final.push("fizz");
    } else if (result[i] == "nullbuzz") {
      final.push("buzz");
    }
  }
  return final;
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
