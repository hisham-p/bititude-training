// importing mongoose
const mongoose = require('mongoose');

// mongodb connection
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
    id : String,
    username : String,
    password : String,
    email : String,
    designation : String
});

//model creation
let dbdata = mongoose.model('logins', Schema);

exports.sendResponse = async(req,res)=> res.json(await dbdata.find())