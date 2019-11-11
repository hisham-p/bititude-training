const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost/mongo', (err, database) => {

});

const client = new MongoClient('mongodb://localhost/mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.connect((err, database) => {
    db = database.db("mongo")
    const port = 3000;
    app.listen(port, () => console.log("server starting at port " + port + ""))
});

app.use(bodyParser.urlencoded({
    extended: true
}))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // let a = db.collection('new').find();
    // console.log(a);
    
})

app.post('/quotes', (req, res) => {
    db.collection('new').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/')
    })
})