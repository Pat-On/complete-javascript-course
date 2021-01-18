'use strict';

// function expression or function declaration is going to work. 
//Only arrow function is not going to work

const Person = function (firstName, birthday) {
    //instances properties
    this.firstName = firstName;
    this.birthday = birthday;

    //never do this - You should never create method in constructor function
    // the reason for it, is that all instances of Person would have copy of this function,
    //and that is going to damage the performance
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear)
    // }

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

// prototypes
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthday)
}

patryk.calcAge()

console.log(patryk.__proto__); // it is going to show to us the prototype property f he conctructor function

console.log(patryk.__proto__ === Person.prototype)
console.log(Person.prototype.isPrototypeOf(patryk))

// adding the properties to proto

Person.prototype.species = "homo sapiens";
console.log(patryk.species)

// this properties is inherited from proto
console.log(patryk.hasOwnProperty('species'))
console.log(patryk.hasOwnProperty('firstName'))