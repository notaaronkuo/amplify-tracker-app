


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    /*const res = null;
    connection.connect(function(err) {
        if (err) {
          console.error('Database connection failed: ' + err.stack);
          return;
        }
        con.query('SELECT * from test.users', function(err, result, fields){
            res = result;
        });
        console.log('Connected to database.');
      });*/
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      }, 
        body: JSON.stringify("Hi"),
    };
};






/*
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 
exports.handler = async (event) => {
    console.log(event)
    connection.query("select * from test.users", function(req, res) {
      return res;
    })
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


connection.end();*/