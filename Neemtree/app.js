const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const email = require("./controllers/email");
require('dotenv/config');

const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));
	

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Neemtree.html'));
});
	



app.post('/contact', (req, res) => {
	
	console.log(req.body);
	email.recieveEmail(req);
	return res.redirect('back');
});

// app.post('/vardaan', (req, res) => { 
// 	email.orderDetails1(req);
// })


// app.post('/vatika', (req, res) => { 
// 	email.orderDetails2(req);
// })


  


app.listen(port, () => console.log(`Server is running at ${port}`));
