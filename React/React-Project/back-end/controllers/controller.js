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

});

//model creation
let dbdata = mongoose.model('moviecards', Schema);


exports.sendResponse = async (req, res) => {
    let industry = req.params.industry;
    res.json(await dbdata.find({
        'industry': industry
    }));
}

exports.getMovies = async (req, res) => {
    let industry = req.params.industry;
    let movie = req.params.movie;
    console.log(movie);
    res.json(await dbdata.find({
        'industry': industry,
        '_id': movie
    }))
}
exports.insertMovies = async(req,res)=>{
    let data = req.body.data;
    console.log(data);
}