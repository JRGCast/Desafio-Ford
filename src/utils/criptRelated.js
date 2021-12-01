const jwt = require('jsonwebtoken');
const secret = 'thekey123';
const jwtOptions = {
  "expiresIn": "3h",
  "algorithm": "HS256"
};

const tokenize = (key) => jwt.sign({ data: key }, secret, jwtOptions);

const untokenize = (token) => jwt.decode(token).data;

module.exports = { tokenize, untokenize };