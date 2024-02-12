// loginRoutes.js

const express = require('express');
const router = express.Router();
const { login } = require('../controllers/loginController');

// POST /api/login
// Ruta para el inicio de sesión
router.post('/login', login);

module.exports = router;
