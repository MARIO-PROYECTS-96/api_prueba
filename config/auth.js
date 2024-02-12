// auth.js
const generateToken = require('../config/tokenGenerator'); // Importa la función para generar tokens
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const secretKey = 'J:?bvj6Ja4&2'; // Cambia esto por una clave secreta segura

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey
}, (jwtPayload, done) => {
  // En esta función, puedes verificar la validez del JWT y buscar al usuario en la base de datos, si es necesario
  // Por simplicidad, aquí simplemente pasamos el usuario decodificado
  return done(null, jwtPayload);
}));

function authenticateJWT(req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user;
    next();
  })(req, res, next);
}

module.exports = {
  authenticateJWT,
  generateToken // Asegúrate de exportar la función

};
