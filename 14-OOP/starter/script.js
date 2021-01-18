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

///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. 
The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

//constructor function
const Auto = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Auto.prototype.accelerate = function () {
    this.speed += 1
};
Auto.prototype.break = function () {
    this.speed -= 1
};

const bmw = new Auto("BMW", 50);
const mercedes = new Auto("Mercedes", 100);


console.log(bmw.speed);
console.log(mercedes.speed);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();

console.log(bmw.speed)

mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();

console.log(mercedes.speed)