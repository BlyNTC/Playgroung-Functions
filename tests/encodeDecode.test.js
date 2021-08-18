const challenges = require('../src/challenges');

describe('9 - Crie uma função que Codifique e Decodifique', () => {
  it('Retorne uma string codificada quando a função encode for utilizada', () => {
    expect(challenges.encode('hello')).toBe('h2ll4');
    expect(challenges.encode('How are you today?')).toBe('H4w 1r2 y45 t4d1y?');
    expect(challenges.encode('This is an encoding test.')).toBe('Th3s 3s 1n 2nc4d3ng t2st.');
    expect(challenges.encode('go Trybe!')).toBe('g4 Tryb2!');
  });

  it('Retorne uma string decodificada quando a função decode for utilizada', () => {
    expect(challenges.decode('h2ll4')).toBe('hello');
    expect(challenges.decode('H4w 1r2 y45 t4d1y?')).toBe('How are you today?');
    expect(challenges.decode('Th3s 3s 1n 2nc4d3ng t2st.')).toBe('This is an encoding test.');
    expect(challenges.decode('g4 Tryb2!')).toBe('go Trybe!');
  });
});

describe('Testa se são funções', () => {
  it('Encode e Decode é uma função?', () => {
    expect(typeof challenges.encode).toBe('function');
    expect(typeof challenges.decode).toBe('function');
  });
  it('função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(challenges.encode('aeiou')).toBe('12345');
  });
  it('função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(challenges.decode('12345')).toBe('aeiou');
  });
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(challenges.encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
    expect(challenges.decode('06789')).toBe('06789');
  });
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(challenges.encode('Testa isso').length).toBe(10);
    expect(challenges.decode('T2st1 3ss4').length).toBe(10);
  });
});