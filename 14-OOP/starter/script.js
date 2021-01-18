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

//video 206
console.log(patryk.__proto__)
// object.prototype (top of prototype chain)
console.log(patryk.__proto__.__proto__)
console.log(Array.__proto__.__proto__)
console.log(patryk.__proto__.__proto__.__proto__)

console.log(Person.prototype.constructor)

console.dir(Person.prototype.constructor)

// functions are objects to so they have their own __proto__
console.dir(Person.prototype.constructor.prototype)
console.log(Person.prototype.constructor.prototype)

// prototypes of Arrays - 
const arr = [3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7]
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype)
console.log(arr)


//adding new methods to array - all arrays objects would get it!
Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique())

const h1 = document.querySelector('h1')

console.dir(h1) // h1 has 6 - 7 levels of prototyping wow! 



//functions
console.dir(x => x + 1)