// Desafio 1
const compareTrue = (param1, param2) => (param1 && param2);

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (string) => string.split(' ');

// Desafio 4
const concatName = (array) => (`${array[array.length - 1]}, ${array[0]}`);

// Desafio 5
const footballPoints = (wins, ties) => 3 * wins + ties;

// Desafio 6
const highestCount = (array) => array.filter((number) => number === Math.max(...array)).length;

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) return 'os gatos trombam e o rato foge';
  return Math.abs(mouse - cat1) < Math.abs(mouse - cat2) ? 'cat1' : 'cat2';
};

// Desafio 8
const fizzBuzz = (array) => array.map((number) => {
  if (number % 3 === 0) {
    return (number % 5 === 0) ? 'fizzBuzz' : 'fizz';
  } return (number % 5 === 0) ? 'buzz' : 'bug!';
});

// Desafio 9
let data = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

const encode = ([...string]) => string.reduce((acc, char) =>
  acc + (Object.keys(data).includes(char) ? data[char] : char), '');

const decode = ([...string]) => string.reduce((acc, char) =>
  acc + (Object.values(data).includes(char) ? Object.keys(data)[char - 1] : char), '');

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
