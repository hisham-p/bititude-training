

let task = [];
let complete = [];

exports.addTask = function (req, res) {
    let newTask = req.body.newtask;
    task.push(newTask);
};

exports.redirect = (req, res) => {
    res.render("index", {
        task: task,
        complete: complete
    })
};
exports.updateTask = function (req, res) {
    let id = req.params.id;
    let tasks = req.body.inputvalue[id];
    console.log(tasks, id);
    task.splice(id, 1, tasks)
};