const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const knex = require('knex')({
    client: 'mysql',
    debug: true,
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'test'
    }
});
const bookshelf = require('bookshelf')(knex);
const User = bookshelf.Model.extend({
    idAttribute: 'id',
    tableName: 'todonew'
});

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));


//adding a value to db
app.post("/submit/:value", async (req, res) => {
    console.log("value inserted");
    let task = req.params.value;
    console.log(task);
    let data = {
        'task': task
    }
    try {
        let user = await new User().save(data, {
            patch: false
        });
        res.json(user);
    } catch (error) {
        console.log(error);
    }

})


// removing value from db

app.post("/remove/:id", async (req, res) => {
    let id = req.params.id;
    console.log(id);
    console.log("***************************************value deleted");

    try {
        let user = await new User({
            id: id
        }).destroy();
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
    }
})


//updating value
app.post("/update/:id/:value", async (req, res) => {
    let id = req.params.id;
    let value = req.params.value;
    let data = {
        id: id,
        task: value
    }
    try {
        let user = await User.forge(data).save();
    } catch (error) {
        console.log(error);
    }
});

//get the value on home pages
app.get("/", async (req, res) => {
    let val = await User.fetchAll();
    let value = val.toJSON();
    let count = await User.count();
    console.log('No of entries :' + count);
    res.render("index", {
        db: value
    })
});

app.listen(9000, () => console.log("App listening at port 9000"));