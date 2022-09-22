const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv/config");

router.post('/send-email', (res, req, next) => {
    let { name, email, subject, message} = req.body;
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAILPASSWORD, 
        }
      });
    transporter
    .sendMail({
      from: '"Elcin Akpinar Website"',
      to: process.env.TOEMAIL,
      name: name,
      subject: subject,
      text: message,
      html: `You recived a message: <b>${message}</b> from ${email}`,
    })
    .then(sentEmail => {
        const {name, email, subject, message } = sentEmail;
        res.json("message", sentEmail)})
    .catch((error) => console.log("Error Occurs!"));  
})



module.exports = router;