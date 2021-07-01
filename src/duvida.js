// Desafio 9
let string = 'hi there!';

function encode(string) {
  // seu código aqui
  let str = '';
  for (index = 0; index < string.length; index += 1)
    if (string[index] === 'a') {
      str = str + 1;
    }
  else if (string[index] === 'e') {
    str = str + 2;
  } else if (string[index] === 'i') {
    str = str + 3;
  } else if (string[index] === 'o') {
    str = str + 4;
  } else if (string[index] === 'u') {
    str = str + 5;
  } else {
    str = str + string[index];
  }
  return str;
}
encode('Hi there!');
console.log(encode('Hi there!'));
