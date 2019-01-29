const todoMethods = require('../toDoMethods');

//describe test

describe('Getting records', function () {

//create test
    it('Gets a records from the database ', function () {
        todoMethods.getTodos();
    });

});