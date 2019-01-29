const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and model

const toDoSchema = new Schema({
    task: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100
    },
    isComplete: {
        type: Boolean,
        required: false
    }
});

module.exports = mongoose.model('todo', toDoSchema);