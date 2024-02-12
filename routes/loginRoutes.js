// loginRoutes.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const { generateToken } = require('../config/auth');

// POST /api/login
// Ruta para el inicio de sesión
router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    // Genera un token JWT válido
    const token = generateToken(user);
    // Envía el token JWT en la respuesta
    return res.json({ token });
  })(req, res, next);
});

module.exports = router;
