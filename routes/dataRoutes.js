const express = require('express');
const router = express.Router();
const dataController = require('../controllers/userController');
const authenticateJWT = require('../config/auth').authenticateJWT; // Middleware de autenticación JWT
const loginController = require('../controllers/loginController'); // Importa el controlador de inicio de sesión

// Ruta de inicio de sesión
router.post('/login', loginController.login);

// Ruta protegida con autenticación JWT
router.get('/data', authenticateJWT, dataController.getAllUsers);

module.exports = router;
