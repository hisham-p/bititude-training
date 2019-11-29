// imports
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const routes = require('./routes/route')


// middlewares
app.use('/', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// port
let port = 5000;
app.listen(port, () => console.log(`Api listening at port : ${port}`))