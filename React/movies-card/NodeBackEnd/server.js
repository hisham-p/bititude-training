const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const expressValidator = require('express-validator');
// const cors = require('cors') mongoose connection to db
mongoose
    .connect('mongodb://localhost/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'));
let db = mongoose.connection;
db.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

//setting up schema
let Schema = new mongoose.Schema({
    id: String,
    title: String,
    cast: String,
    imgmovie: String,
    description: String
});

//model created
let dbdata = mongoose.model('moviecards', Schema);

// var corsOptions = {     origin: 'http://localhost/3000'   } middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//get request
app.get("/", async (req, res) => {
    // let value = await dbdata.find(); res.json({value});
    res.json(await dbdata.find());
});

app.get("/movies", async (req, res) => {
    // let value = await dbdata.find(); res.json({value});
    res.json(await dbdata.find());
});
app.get("/movies/:id", async (req, res) => {
    // let value = await dbdata.find(); res.json({value});
    let id = req.params.id;
    console.log("requested id : " + id);
    res.json(await dbdata.find({
        '_id': id
    }));
});
app.get("/industry", async (req, res) => {
    // let value = await dbdata.find(); res.json({value});
    res.json(await dbdata.find());
});

app.get("/industry/:industry_name", async (req, res) => {
    // let value = await dbdata.find(); res.json({value});
    let industry_name = req.params.industry_name;
    console.log("requested industry : " + industry_name);
    res.json(await dbdata.find({
        'industry': industry_name
    }));
});

app.get("/industry/:industry_name/:id", async (req, res) => {
    // let value = await dbdata.find(); res.json({value});
    let industry_name = req.params.industry_name;
    let id = req.params.id;
    console.log("requested industry : " + industry_name);
    res.json(await dbdata.find({
        'industry': industry_name , '_id' : id
    }));
});

//port
const port = 8000;
app.listen(port, () => console.log("app listening at port " + port + ""));