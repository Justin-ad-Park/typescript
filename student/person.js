"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return "Hello, \n        " + this.name;
    };
    return Person;
}());
exports.Person = Person;
