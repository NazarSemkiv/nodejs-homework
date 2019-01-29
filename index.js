const express = require('express');
const app = express();
const port = 3000;
const todoMethods = require('./toDoMethods');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());


//connect to db
mongoose.connect('mongodb://nazar:zerofuck11@ds211635.mlab.com:11635/nodehomework');
const db = mongoose.connection;
db.once('open', function (){
    console.log("Connected!");
}).on('error', function (error) {
    console.log("Connection error!", error);
});


// app.get('/', function (req, res) {
//     todoMethods.addTodo("New test3", true);
//     res.send("Task added!");
// });
//
// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// });


//testing methods

// todoMethods.addTodo("New test3", true);
// todoMethods.removeTodo();
// todoMethods.getTodos();
// todoMethods.markDone("5c4ddd08cc017127cc09361f");
// todoMethods.markUndone("5c4e02631b2d330228acbc33");