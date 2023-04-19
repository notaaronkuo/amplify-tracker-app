const mysql = require('mysql');

const con = mysql.createConnection({
    host     : "database-1.cwd3greadrvm.us-east-1.rds.amazonaws.com",
    user     : "admin",
    password : "922962700",
    port     : 3306
  });



con.connect(function(err) {
    if (err) throw err;
    con.query('SELECT * from test.users', function(err, result, fields){
        console.log(result);
        console.log("hi");
    });

    console.log("Connected!");
    con.end();
});

module.exports = con;
