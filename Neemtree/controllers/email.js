require('dotenv/config');
const nodemailer = require('nodemailer');


  module.exports.recieveEmail = function(req){

    console.log('nodemaiiler running')
      
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp.gmail.com',
    port: 587,
    secure:false,
    auth :{
        user :'gargpragati9@gmail.com',
        pass :'<password>'
    }
});
var mailOptions = {
    from: 'gargpragati9@gmail.com',
    to: 'gargpragati9@gmail.com',
    subject: `Message from ${req.body.name}`,
    text: 'Hey there, it’s our first message sent with Nodemailer ;) ', 
    html: `Message : ${req.body.message}`
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
  else{
 
    res.sendStatus(200);
  }
  return res.redirect('back');
  });

  }

