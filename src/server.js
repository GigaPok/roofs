const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/form', (req, res) => {
  let data = req.body;

  let smtpTransport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 587,
    auth: {
      user: '86366a66f0077d',
      pass: '3dcef120be2791',
    },
  });

  let mailOptions = {
    from: 'no-reply@exmaple.com',
    to: data.email,
    subject: `Message from ${data.email}: ${data.topic}`,
    html: `
      <h3>Message from ${data.email}</h3>
      <p>${data.message}</p>
    `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.status(500).send('Error');
    } else {
      res.status(200).send('Success');
    }
  });

  smtpTransport.close();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
