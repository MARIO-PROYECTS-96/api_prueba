const db = require('../config/dbConfig');
const md5 = require('md5'); // Importa la librería para codificar contraseñas en MD5

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

// Función para buscar un usuario por su ID
User.findById = (userId, callback) => {
  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, res) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (res.length) {
      callback(null, res[0]);
    } else {
      callback({ message: 'Usuario no encontrado' }, null);
    }
  });
};

// Función para crear un nuevo usuario
User.create = (userData, callback) => {
    // Codifica la contraseña en MD5 antes de insertarla en la base de datos
    const userWithMd5Password = { ...userData, password: md5(userData.password) };
  
    db.query('INSERT INTO users SET ?', userWithMd5Password, (err, res) => {
      if (err) {
        callback(err, null);
        return;
      }
      const newUser = { id: res.insertId, ...userWithMd5Password };
      callback(null, newUser);
    });
  };
  
  module.exports = User;

// Función para actualizar un usuario existente
User.update = (userId, userData, callback) => {
    // Verifica si se está actualizando la contraseña
    if (userData.password) {
      // Codifica la nueva contraseña en MD5
      userData.password = md5(userData.password);
    }
  
    db.query('UPDATE users SET ? WHERE id = ?', [userData, userId], (err, res) => {
      if (err) {
        callback(err, null);
        return;
      }
      if (res.affectedRows === 0) {
        callback({ message: 'Usuario no encontrado' }, null);
        return;
      }
      const updatedUser = { id: userId, ...userData };
      callback(null, updatedUser);
    });
  };
  
  module.exports = User;

// Función para eliminar un usuario existente
User.delete = (userId, callback) => {
  db.query('DELETE FROM users WHERE id = ?', [userId], (err, res) => {
    if (err) {
      callback(err);
      return;
    }
    if (res.affectedRows === 0) {
      callback({ message: 'Usuario no encontrado' });
      return;
    }
    callback(null);
  });
};

module.exports = User;
