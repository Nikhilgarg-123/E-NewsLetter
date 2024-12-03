const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

let transporter = nodemailer.createTransport({
    host: 'pro.turbo-smtp.com',
    port: 465, // Or use 587 for non-SSL
    secure: true, // Use SSL (true for port 465, false for other ports like 587)
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD  // Replace with your actual SMTP password
    },
  });

// async..await is not allowed in global scope, must use a wrapper
async function mailer(sub,text_rec,receivers) {
  // send mail with defined transport object


  const info = await transporter.sendMail({
    from: '"👻ADMIN 👻" <nitechnologys@gmail.com>', // sender address
    to: receivers, // list of receivers
    subject: sub, // Subject line
    text: text_rec, // plain text body
    
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}


module.exports = mailer;
