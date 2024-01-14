require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

// Parsing middleware
// Parse application
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log('App running at port 5000'));
