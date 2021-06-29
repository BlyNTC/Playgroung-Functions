// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
    if(param1 && param2 === true){
      return true
  }else{
      return false
  }  
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height)/2
  return area
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let splitedSentence = sentence.split(" ")
  return splitedSentence
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  let result = names[names.length-1] + ", " + names[0]
  return result
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = wins*3 + ties
  return totalPoints
}

// Desafio 6
function highestCount(nums) {
  // seu código aqui
  let max = nums.reduce(function(a, b) { return Math.max(a, b); });
  let result = nums.filter(function(x){return x==max}).length
  return result
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let diff1 = mouse - cat1;
  let diff2 = mouse - cat2;
  if(Math.abs(diff1) === Math.abs(diff2)){
    return("os gatos trombam e o rato foge")
  }else if(Math.abs(diff1) > Math.abs(diff2)){
    return("cat2")
  }else{
    return("cat1")
  }
}

// Desafio 8
function fizzBuzz(numArray) {
  // seu código aqui
  let r = [];
  for(i of numArray){
    if(i % 3 == 0){
      if(i % 5 == 0){
        r.push("fizzBuzz")
      }else{
        r.push("fizz")
      }
    }else if(i % 5 == 0){
      r.push("buzz")
    }else{
      r.push("bug!")
    }
  }
  return r
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
