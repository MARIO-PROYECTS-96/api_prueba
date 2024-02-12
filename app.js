var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Importa el enrutador para tus datos (dataRoutes.js)
var dataRouter = require('./routes/dataRoutes');

var app = express();

// Configura el motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Configura las middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Usa el enrutador para tus datos (dataRouter)
app.use('/api', dataRouter); // Monta el enrutador en la ruta /api

// Captura 404 y envía al gestor de errores
app.use(function(req, res, next) {
  next(createError(404));
});

// Gestor de errores
app.use(function(err, req, res, next) {
  // Configura las variables locales solo para entornos de desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderiza la página de error
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
