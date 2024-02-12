// En tu modelo de usuario (dataModel.js)

const db = require('../config/dbConfig');

const User = {};

User.findOne = (username) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      if (res.length) {
        resolve(res[0]); // Resuelve la promesa con el usuario encontrado
      } else {
        resolve(null); // Resuelve la promesa con null si no se encontró ningún usuario
      }
    });
  });
};

module.exports = User;
