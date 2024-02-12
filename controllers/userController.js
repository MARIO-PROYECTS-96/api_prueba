// dataController.js

const Data = require('../models/dataModel');

exports.getAllData = (req, res) => {
  Data.getAll((err, data) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json(data);
  });
};
