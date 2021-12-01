
const test1 = '1HGCM82633A004352';
const test2 = 156189489165198
const { tokenize, untokenize } = require('./utils/criptRelated');

// Criptografia discutida e implementada em grupo
const criptography = (VIN) => {
  const stringing = VIN.toString().split('');
  const firstLayer = stringing.map(elemen => elemen.charCodeAt());
  const secondLayer = firstLayer.map(charCode => {
    return charCode % 2 === 0 ? charCode + 2 : charCode + 6;
  });
  // adição própria
  const joined = secondLayer.join(',');
  const tokenized = tokenize(joined);
  return tokenized;
};


const decript = (cripted) => {
  // adição própria
  const untokenized = untokenize(cripted);
  const rejoined = untokenized.split(',');
  // Decriptografia discutida e implementada em grupo
  const firstLayer = rejoined.map(item => {
    return Number(item) % 2 === 0 ? Number(item) - 2 : Number(item) - 6;
  });
  const secondLayer = firstLayer.map(char => String.fromCharCode(char)).join('');
  return secondLayer;
};

// console.log(criptography(test1));

console.log(decript(criptography(test2)) === test2.toString());