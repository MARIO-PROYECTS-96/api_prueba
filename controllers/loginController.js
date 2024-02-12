const User = require('../models/dataModel'); // Importa el modelo de usuario
const { generateToken } = require('../config/auth'); // Importa la función para generar el token
const md5 = require('md5'); // Importa la librería para codificar contraseñas en MD5

// Función para manejar la autenticación del usuario
async function login(req, res, next) {
  try {
    // Extrae el username y el password del cuerpo de la solicitud
    const { username, password } = req.body;

    // Busca el usuario en la base de datos por el username
    const user = await User.findOne(username);

    // Si no se encuentra el usuario, devuelve un error de autenticación
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Codifica la contraseña proporcionada en MD5
    const hashedPassword = md5(password);

    // Verifica si la contraseña proporcionada en MD5 coincide con la contraseña almacenada en la base de datos
    if (hashedPassword !== user.password) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Si las credenciales son válidas, genera un token de autenticación y envíalo en la respuesta
    const token = generateToken({ id: user._id, username: user.username });
    res.json({ token: token });
  } catch (error) {
    // Maneja los errores
    next(error);
  }
}

module.exports = {
  login
};
