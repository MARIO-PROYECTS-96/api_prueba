const db = require('../config/dbConfig');

const User = {};

// Función para buscar todos los usuarios
User.getAll = (callback) => {
  db.query('SELECT * FROM users', (err, res) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, res);
  });
};

// Otros métodos para interactuar con la base de datos, como createUser, updateUser, etc.

module.exports = User;
