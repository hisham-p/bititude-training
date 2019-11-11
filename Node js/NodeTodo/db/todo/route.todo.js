let express = require("express");
let route = express.Router();
const {addTask , redirect , updateTask} = require('../todo/controller.todo');
router.post('/',addTask);
router.get('/',redirect);
router.get('/',updateTask);
module.exports = router;