var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : "database-1.cwd3greadrvm.us-east-1.rds.amazonaws.com",
  user     : "admin",
  password : "922962700",
  port     : 3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});





/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(event)
    const customerId = event.pathParameters.customerID;
    const customer = {'customerId': customerId, 'customerName': "Customer " + customerId };
    const response = {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(customer),
    };
    return response;
};


connection.end();