const todoMethods = require('../toDoMethods');

//describe test

describe('Changing records', function () {

//create test
    it('Changes a record from the database ', function () {
        todoMethods.markDone("5c4ddd08cc017127cc09361f");
    });

});