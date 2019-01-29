const toDoModel = require('./models/todomodel');
const mongoose = require('mongoose');

module.exports = {
    //add todos item
  addTodo: addTodo = (newTask, check) => {
      toDoModel.create({task: newTask, isComplete: check || false}, function (err, doc) {
          mongoose.disconnect();
          if (err) return console.log(err);
          console.log("Add obj:", doc);
      });
  },
    //remove todos item where isComplete = true
    removeTodo: removeTodo = () => {
        toDoModel.remove({isComplete: true}, function (err, result) {
            mongoose.disconnect();
            if(err) return console.log(err);
            console.log(result);
        });
    },
    //get the list of todos
    getTodos: getTodos = () => {
        toDoModel.find({}, function (err, docs) {
            mongoose.disconnect();
            if(err) return console.log(err);
            console.log(docs);
        });
    },
    //mark todos item as done
    markDone: markDone = (todosId) => {
        toDoModel.updateOne({_id: todosId}, {isComplete: true}, function (err, result) {
            mongoose.disconnect();
            if(err) return console.log(err);
            console.log(result);
        });
    },
    //mark todos item as undone
    markUndone: markUndone = (todosId) => {
        toDoModel.updateOne({_id: todosId}, {isComplete: false}, function (err, result) {
            mongoose.disconnect();
            if(err) return console.log(err);
            console.log(result);
        });
    }
};