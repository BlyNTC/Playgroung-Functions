// Desafio 1
const compareTrue = (a1, a2) => a1 && a2;

// Desafio 2
const calcArea = (b, h) => (b * h) / 2;

// Desafio 3
const splitSentence = (arraySentence) => arraySentence.split(' ');

// Desafio 4
const concatName = (arSentence) => `${arSentence[arSentence.length - 1]}, ${arSentence[0]}`;

// Desafio 5
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 6
const highestCount = (ar) => {
  let highest = ar[0];
  return ar.reduce((a, v) => {
    if (v === highest) {
      a += 1;
      return a;
    }
    if (v > highest) {
      highest = v;
      a = 1;
    }
    return a;
  }, highest);
};

// Desafio 7
const catAndMouse = (mouse, c1, c2) => {
  if (Math.abs(mouse - c1) < Math.abs(mouse - c2)) { return 'cat1'; }
  if (Math.abs(mouse - c1) > Math.abs(mouse - c2)) { return 'cat2'; }
  if (Math.abs(mouse - c1) === Math.abs(mouse - c2)) { return 'os gatos trombam e o rato foge'; }
};

// Desafio 8
const fizzBuzz = (fbA) => fbA.map((a) => {
  if (a % 3 === 0 && a % 5 === 0) { return 'fizzBuzz'; }
  if (a % 3 === 0) { return 'fizz'; }
  if (a % 5 === 0) { return 'buzz'; }
  return 'bug!';
});

// Desafio 9
const encode = (fraseE) => {
  let letras = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  return fraseE.replace(/[aeiou]/g, (m) => letras[m]);
};

const decode = (fraseD) => {
  let letras = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  return fraseD.replace(/[12345]/g, (m) => letras[m]);
};

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
