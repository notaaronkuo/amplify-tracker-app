const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

const mysql = require('mysql');

const con = mysql.createConnection({
    host     : "database-1.cwd3greadrvm.us-east-1.rds.amazonaws.com",
    user     : "admin",
    password : "922962700",
    port     : 3306
  });






/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = (event, context) => {
  //console.log(`EVENT: ${JSON.stringify(event)}`);
  con.connect(function(err) {
    if (err) throw err;
    con.query('SELECT * from test.users', function(err, result, fields){
        return result;
    });

    console.log("Connected!");
    con.end();
  });


  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
