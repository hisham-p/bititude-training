const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');
app.use(bodyParser.json());

let task = [];
app.post('/addtask', function (req, res) {
    let newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});
app.get("/", (req, res) => {
    res.render("index", {
        task: task , complete : complete
    });
});
app.post('/updatetask/:id', function (req, res) {
    let id = req.params.id;
    let tasks = req.body.inputvalue[id];
    console.log(tasks , id);
    task.splice(id, 1, tasks);
    res.redirect("/");
});
let complete = [];
app.post("/removetask/:id", function (req, res) {
    let id = req.params.id;
    let tasks = task[id];
    console.log(tasks , id);
    
    complete.push(tasks);
    task.splice(id, 1);
    res.redirect("/");
});
const port = 8000;
app.listen(port, () => console.log(`Server listening at port ${port}`));