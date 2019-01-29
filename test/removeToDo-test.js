const todoMethods = require('../toDoMethods');

//describe test

describe('Removing records', function () {

//create test
    it('Removes a records from the database ', function () {
        todoMethods.removeTodo();
    });

});