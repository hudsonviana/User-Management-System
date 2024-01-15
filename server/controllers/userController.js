const mysql = require('mysql2');

// View
exports.view = (req, res) => {
  res.render('home');
};
