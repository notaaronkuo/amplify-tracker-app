const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'database-1.cwd3greadrvm.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '922962700',
    port: 3306
  });

const promisePool = pool.promise();
module.exports = promisePool;