// dataRoutes.js

const express = require('express');
const router = express.Router();
const dataController = require('../controllers/userController');

router.get('/data', dataController.getAllData);

module.exports = router;
