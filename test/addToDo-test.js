const todoMethods = require('../toDoMethods');

//describe test

describe('Adding records', function () {

//create test
    it('Adds a record to the database ', function () {
        todoMethods.addTodo("New test7", true);
    });

});