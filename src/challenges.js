// Desafio 1
function compareTrue(p1, p2) {
  // seu código aqui
  if (p1 === true && p2 === true)
  {
    return true;
  }
  else
  {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base*height)/2);
}

// Desafio 3
//https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(string) {
  // seu código aqui
  return string.split(" ");
}

// Desafio 4
//https://www.w3schools.com/jsref/jsref_join.asp
function concatName(array) {
  // seu código aqui
  let newArray = [];
  let arrayLength = array.length-1;
  for (let i=(array.length-1); i>=0; i-=1)
  {
    if (i===0 || i===(arrayLength))
    {
      newArray.push(array[i]);
    }
  }
  return newArray.join(", ");
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins*3+ties);

}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = array[0];
  let n=0;

  for (let i of array)
  {
    if (i > maior)
    {
      maior = i;
    }
  }
  for (let i of array)
  {
    if (maior === i)
    {
      n+=1;
    }
  }
  return n;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ((cat1-mouse) > (cat2-mouse))
  {
    return "cat2";
  }
  else if ((mouse-cat1) < (cat2-mouse))
  {
    return "cat1"
  }
  else if ((mouse-cat1) === (cat2-mouse))
  {
    return "os gatos trombam e o rato foge";
  }
}


// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
