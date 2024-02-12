// dataModel.js

const db = require('../config/dbConfig');

const Data = {};

Data.getAll = (result) => {
  db.query('SELECT * FROM users', (err, res) => {
    if (err) throw err;
    result(null, res);
  });
};

module.exports = Data;
