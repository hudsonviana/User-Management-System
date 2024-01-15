const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10, // Ajuste conforme necessário
});

// View
exports.view = (req, res) => {
  // Conecta ao banco de dados
  pool.getConnection((err, connection) => {
    if (err) {
      console.log('Erro ao obter uma conexão do pool:', err);
      res.status(500).send('Erro ao obter uma conexão do pool:', err);
      return;
    }

    connection.query(
      'SELECT * FROM user WHERE status = "active"',
      (err, rows) => {
        connection.release();

        if (err) {
          console.error('Erro ao executar a consulta:', err);
          res.status(500).send('Erro ao executar a consulta no banco de dados');
          return;
        }
        res.render('home', { rows });
      }
    );
  });
};
