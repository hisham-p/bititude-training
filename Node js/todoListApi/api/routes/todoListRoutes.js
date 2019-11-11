let express = require("express");

let routers = express.Router();
const {redirect } = require('../controllers/todoListController');
// let home = routers.get('/',redirect);
// routers.post('/addtask',addTask);
routers.get('/',redirect);
// routers.post('/updatetask/:id',updateTask,home);
// routers.post('/removetask/:id',remove,home);
module.exports = routers;