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
    m_id: String,
    title: String,
    imgmovie: String,
    industry: String,
    cast: String,
    description: String,
    language : String
});

//model creation
let dbdata = mongoose.model('moviecards', Schema);


exports.getAllMovies = async (req,res)=>{
    res.json(await dbdata.find());
}


exports.sendResponse = async (req, res) => {
    let industry = req.params.industry;
    res.json(await dbdata.find({
        'industry': industry
    }));
}
exports.getIndustries = async (jreq, res) => {
    res.json(await dbdata.find());
}
exports.getMovies = async (req, res) => {
    let industry = req.params.industry;
    let movie = req.params.movies;
    console.log(movie);
    res.json(await dbdata.find({
        'industry': industry,
        '_id': movie
    }))
}
exports.insertMovies = async (req, res) => {
    let data = req.body;
    console.log(data);
    await dbdata.create(data, function (error) {
        console.log("Value inserted");
        if (error) {
            console.error(error);
        }
    });
}