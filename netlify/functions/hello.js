exports.handler = async function (event, context) {  
    switch (event.httpMethod) {
        /* POST /.netlify/functions/api */
        case 'POST':
            return {
                statusCode: 200,
                body: JSON.stringify(process.env.SENDGRID_API_KEY ),
            }
        /* Fallthrough case */
        default:
          return {
            statusCode: 500,
            body: 'unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE'
          }
      }
};
