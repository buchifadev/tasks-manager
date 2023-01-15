const nodemailer = require('nodemailer');

const sendWelcomeEmail = async (email, name) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let info = await transporter.sendMail({
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let us know how you get along with the app.`
  });
};

const sendCancelationEmail = async (email, name) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let info = await transporter.sendMail({
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`
  });
};

const sendTaskPendingEmail = async (email, name) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'stmp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let info = await transporter.sendMail({
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: 'Pending task(s)',
    html: `
      <div>
      <h2>Tasksbite</h2>
      <br>
      Hello ${name},
      <br>
    <p>You have a pending task(s)</p>
    <br>
    <p>Thanks, <br> Team.</p>
    </div>`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
  sendTaskPendingEmail
};
