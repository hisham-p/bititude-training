const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const expressValidator = require('express-validator');
const cors = require('cors')

// db connection
//mongoose connection to db
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB Connected'));
let db = mongoose.connection;
db.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

//setting up schema
let Schema = new mongoose.Schema({
    id: Number,
    name: String,
    imgprofile : String,
    imgpost : String
});


app.get('/',(req,res)=> res.send("hello world"));

const port = 8000;
app.listen(port,()=> console.log("app listening at port :" +port));
