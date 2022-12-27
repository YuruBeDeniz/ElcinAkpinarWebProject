const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv/config");

router.post('/send-email', (req, res, next) => {
    let { name, email, subject, message} = req.body;
    console.log('contact me: ', req.body)
  
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.APPPASSWORD, 
        }
      });
      
    transporter.sendMail({
      from: "Elcin Akpinar Website",
      to: process.env.EMAIL,
      name: name,
      subject: subject,
      text: message,
      html: `You recived a message: <b>${message}</b> from ${name}, ${email}`,
    })
    //.then(info => console.log(info))
    .catch((error) => console.log("Error Occurs!")); 
  
})
  


module.exports = router;