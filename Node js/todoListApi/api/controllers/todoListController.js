// exports.addTask = function (req, res) {
//     db.collection('new').save(req.body, (err, result) => {
//         if (err) return console.log(err)
//         console.log('saved to database')
//         res.redirect('/')
//     })
// };

exports.redirect = (req, res) => {
    db.collection("new").find((err,result)=>{
        console.log(result);
    })
    res.render("index");
};
// exports.updateTask = function (req, res) {
//     let id = req.params.id;
//     let tasks = req.body.inputvalue[id];
//     console.log(tasks, id);
//     task.splice(id, 1, tasks)
// };
// exports.remove = function (req, res) {
//     let id = req.params.id;
//     let tasks = task[id];
//     console.log(tasks, id);

//     complete.push(tasks);
//     task.splice(id, 1);
// };