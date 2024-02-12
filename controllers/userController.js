const User = require('../models/userModel');

// Obtener todos los usuarios
exports.getAllUsers = (req, res) => {
  User.getAll((err, users) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json(users);
  });
};

// Obtener un usuario por su ID
exports.getUserById = (req, res) => {
  const userId = req.params.id;
  User.findById(userId, (err, user) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }
    res.json(user);
  });
};

// Crear un nuevo usuario
exports.createUser = (req, res) => {
  const userData = req.body;
  User.create(userData, (err, newUser) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.status(201).json(newUser);
  });
};

// Actualizar un usuario existente
exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  User.update(userId, userData, (err, updatedUser) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json(updatedUser);
  });
};

// Eliminar un usuario existente
exports.deleteUser = (req, res) => {
  const userId = req.params.id;
  User.delete(userId, (err) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json({ message: 'Usuario eliminado correctamente' });
  });
};
