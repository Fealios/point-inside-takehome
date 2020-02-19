const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const secrets = require('../environments/secrets');
console.log(secrets);


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());

app.use(function(req, res, next) {
    res.header('key', secrets.apiKey);
    next();
});

app.get('')