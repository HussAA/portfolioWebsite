const sgMail = require("@sendgrid/mail");

exports.handler = async function (event, context) {
  switch (event.httpMethod) {
    /* POST /.netlify/functions/api */

    case "POST":
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const { form } = JSON.parse(event.body);
      const { full_name, email, subject, message } = form;

      const msg = {
        to: "mah.hussaina@gmail.com", // to your recipient
        from: {
          name: `${full_name} `,
          email: "hussainalnakhli.com@gmail.com", // to your verified sender
        },
        subject: `Subject: ${subject} From: ${email}`,
        text: message,
      };
      sgMail
        .send(msg)
        .then((response) => {
          console.log(response[0].statusCode);
          console.log(response[0].headers);
        })
        .catch((error) => {
          console.error(error);
        });
      console.log(msg);
      return {
        statusCode: 200,
        body: JSON.stringify("Hello"),
      };
    /* Fallthrough case */
    default:
      return {
        statusCode: 500,
        body: "unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE",
      };
  }
};
