const express = require('express')
const app = express();


const bodyParser = require('body-parser');

const routes = require('./routes/route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',routes);

const PORT = 4000;
app.listen(PORT,()=>console.log(`Server listening at port ${PORT}`));
