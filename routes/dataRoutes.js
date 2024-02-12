const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateJWT = require('../config/auth').authenticateJWT;

// Rutas CRUD para usuarios
router.get('/users', authenticateJWT, userController.getAllUsers);
router.get('/users/:id', authenticateJWT, userController.getUserById);
router.post('/users', authenticateJWT, userController.createUser);
router.put('/users/:id', authenticateJWT, userController.updateUser);
router.delete('/users/:id', authenticateJWT, userController.deleteUser);

module.exports = router;
