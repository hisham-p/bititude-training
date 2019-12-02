// imports
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const routes = require('./routes/route')


// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', routes);


// port
let port = 5000;
app.listen(port, () => console.log(`Api listening at port : ${port}`))