const express = require('express')
const app = express()

const morgan = require("morgan");

const mongoose = require('mongoose');

const bodyParser = require("body-parser");

const expressValidator= require('express-validator');

const dotenv = require('dotenv');
dotenv.config()

mongoose.connect(
        'mongodb+srv://hisham:hisham@123@nodeapi-irrdn.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true
        }
    )
    .then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

const postRoutes = require("./routes/post");


// miidleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);


// const port = env.process;
app.listen(4000, () => console.log(`Server listening at port ${4000}`));