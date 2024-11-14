const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "web_shop",
  password: "qwerty",
});

module.exports = pool.promise();
