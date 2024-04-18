const express = require('express');


const http = require ('http')
http.createServer((request, response)=>{
    response.end('hello word')
}
).listen(3000)



var nodemailer = require('nodemailer');




var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '11111111',
    pass: '**'
  }
});

var mailOptions = {
  from: '11111111@gmail.com',
  to: '00000000@gmail.com',
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