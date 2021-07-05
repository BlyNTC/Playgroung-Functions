const { TestWatcher } = require("jest");

// Desafio 1
function compareTrue(a,b) {
    return a && b;
}

// Desafio 2
function calcArea(base,height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // Usei a referência a seguir: https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string.
  return sentence.split(" ");
}

// Desafio 4
function concatName(name) {
  return name[name.length - 1] + ", " + name[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  let highest = numbers[0];
  for (let index = 0; index < numbers.length; index ++) {
    if (numbers[index] > highest) {
      highest = numbers[index];
    }
  }
  let counter = 0;
  for (let index = 0; index < numbers.length; index ++) {
    if (highest == numbers[index]) {
      counter++;
    }
  }
  return counter  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  // Transforma distâncias negativas em positivas:
  function makePositive(data) {
    let numbers = [data]
    let posNumber = [];
    for (let number of numbers) {
      if (number < 0) {
        number = number * -1;
        posNumber = number;
      }
      else if (number >= 0) {
        posNumber = number;
      }
    } 
    return posNumber;
  }

  let firstCat = makePositive((cat1 - mouse));
  let secondCat = makePositive((cat2 - mouse)); 

  if (firstCat < secondCat)  {
    return "cat1";
  } 
  else if (secondCat < firstCat) {
    return "cat2";
  }
  else if (firstCat == secondCat) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let solution = []
  for (let element of array) {
    if (element % 3 == 0 && element % 5 == 0) {
      solution.push("fizzBuzz");
    } 
    else if (element % 3 == 0) {
      solution.push("fizz");
    }
    else if (element % 5 == 0) {
      solution.push("buzz");
    }
    else {
      solution.push("bug!");
    }
  }
  return solution;
}

// Desafio 9
function encode(code) {

  // Usei o método ()split, encontrado aqui: https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string.
  let letters = code.split("");
  let codedArray = [];
  for (let index = 0; index < letters.length; index ++) {
    if (letters[index] == "a") {
      letters[index] = "1";
      codedArray.push(letters[index]);
    }
    else if (letters[index] == "e") {
      letters[index] = "2";
      codedArray.push(letters[index]);
    }
    else if (letters[index] == "i") {
      letters[index] = "3";
      codedArray.push(letters[index]);
    }
    else if (letters[index] == "o") {
      letters[index] = "4";
      codedArray.push(letters[index]);
    }
    else if (letters[index] == "u") {
      letters[index] = "5";
      codedArray.push(letters[index]);
    }
    else {
      codedArray.push(letters[index]);
    }
  }
 
  // Usei o método join(), encontrado aqui: https://www.w3schools.com/jsref/jsref_join.asp
  let codedString = codedArray.join("");
  return codedString;
}

function decode(code) {

   // Usei o método ()split, encontrado aqui: https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string.
   let letters = code.split("");
   let decodedArray = [];
   for (let index = 0; index < letters.length; index ++) {
     if (letters[index] == "1") {
       letters[index] = "a";
       decodedArray.push(letters[index]);
     }
     else if (letters[index] == "2") {
       letters[index] = "e";
       decodedArray.push(letters[index]);
     }
     else if (letters[index] == "3") {
       letters[index] = "i";
       decodedArray.push(letters[index]);
     }
     else if (letters[index] == "4") {
       letters[index] = "o";
       decodedArray.push(letters[index]);
     }
     else if (letters[index] == "5") {
       letters[index] = "u";
       decodedArray.push(letters[index]);
     }
     else {
       decodedArray.push(letters[index]);
     }
   }
  
   // Usei o método join(), encontrado aqui: https://www.w3schools.com/jsref/jsref_join.asp
   let decodedString = decodedArray.join("");
   return decodedString;
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
