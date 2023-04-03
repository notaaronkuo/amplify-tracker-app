const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors")
const mysql = require('mysql');
const con = mysql.createConnection({
    host     : "database-1.cwd3greadrvm.us-east-1.rds.amazonaws.com",
    user     : "admin",
    password : "922962700",
    port     : 3306
  });


//app.set('view engine', 'ejs')
app.use(express.json)
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());


app.get('/', (req, res) => {
    console.log('here');
    con.connect(function(err) {
        if (err) throw err;
        con.query('SELECT * from test.users', function(err, result, fields){
            res.send(result);
            
        });
    
        console.log("Connected!");
        con.end();
    });
    
})
ß
app.listen(3001)