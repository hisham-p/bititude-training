const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const routes = require('./routes/routes');

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);

// port
const port = 5700;
app.listen(port, () => console.log(`Api listening at port ${port}`));
