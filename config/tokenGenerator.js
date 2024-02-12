// tokenGenerator.js

const jwt = require('jsonwebtoken');

const secretKey = 'J:?bvj6Ja4&2'; // Reemplaza esto con una clave secreta segura

function generateToken(payload) {
  // Genera un token JWT con el payload proporcionado y la clave secreta
  return jwt.sign(payload, secretKey);
}

module.exports = generateToken;
