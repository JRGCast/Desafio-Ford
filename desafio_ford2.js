
const test1 = '1HGCM82633A004352';

const criptography = (VIM) => {
  const stringing = VIM.split('');
  const firstLayer = stringing.map(elemen => elemen.charCodeAt());
  const secondLayer = firstLayer.map(charCode => {
    return charCode % 2 === 0 ? charCode + 2 : charCode + 6;
  });
  return secondLayer;
};

const decript = (cripted) => {
  const firstLayer = cripted.map(item => {
    return item % 2 === 0 ? item - 2 : item - 6;
  });
  const secondLayer = firstLayer.map(char => String.fromCharCode(char)).join('');
  return secondLayer;
};

console.log(criptography(test1));

console.log(decript(criptography(test1)));