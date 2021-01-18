'use strict';

// function expression or function declaration is going to work. 
//Only arrow function is not going to work

const Person = function (firstName, birthday) {
    //instances properties
    this.firstName = firstName;
    this.birthday = birthday;
}

//way to call it but what is going on?
// because of 'new'
//1. New {} is created
//2. function is called, this = {}
//3 {} linked to prototype
//4 function automatically return {not empty}

const patryk = new Person('Patryk', 1990);

console.log(patryk)

console.log(patryk instanceof Person)