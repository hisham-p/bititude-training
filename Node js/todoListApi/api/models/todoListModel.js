var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  task: {
    type: String,
    required: 'Kindly enter the name of the task'
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);