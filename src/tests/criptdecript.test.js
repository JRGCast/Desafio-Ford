const { criptography, decript } = require('../desafio_ford');

describe('Testando criptografia e descriptografia', () => {
  it('1- Testa se a criptografia realmente muda a string inicial', () => {
    const test1 = '1HGCM82633A004352';
    const encripting = criptography(test1);
    expect(test1).not.toBe(encripting);
  });
  it('2- Testa se a descriptografia de uma criptografia resulta na mesma string passada para a criptografia', () => {
    const test1 = '1HGCM82633A004352';
    const encripting = criptography(test1);
    const decripting = decript(encripting);
    expect(decripting).toBe(test1);
  });
  it('3- Testa se a descriptografia de uma criptografia com puros números resulta em string com os mesmos números passados para a criptografia', () => {
    const test2 = 156189489165198;
    const encripting = criptography(test2);
    const decripting = decript(encripting);
    expect(decripting).toBe(test2.toString());
  });
});