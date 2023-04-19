'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const iverson = new Person('Iverson', 1989);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};
