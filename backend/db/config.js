var mysql = require('mysql');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blog',
  port: 3306,
  connectionLimit: 10
})

module.exports = pool;