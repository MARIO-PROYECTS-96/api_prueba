// dataController.js

const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  User.getAll((err, users) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json(users);
  });
};