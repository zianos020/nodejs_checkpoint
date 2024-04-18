const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');




var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '111111111',
    pass: '*'
  }
});

var mailOptions = {
  from: '1111111111',
  to: '00000000000',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});