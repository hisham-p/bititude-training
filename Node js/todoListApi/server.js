const express = require('express');
const app = express();
// const mongoose = require('mongoose');
let bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost/mongo', (err, database) => {

});

const client = new MongoClient('mongodb://localhost/mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});
client.connect((err, database) => {
    db = database.db("new")
    const port = 8000;
    app.listen(port, () => console.log(`Server listening at port ${port}`));
});

app.set('view engine', 'ejs');
app.get("/",(req,res)=>{
    let result = db.collection("new").find();
    console.log(result);
})

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

// var routes = require('./api/routes/todoListRoutes');
// routes(app);
