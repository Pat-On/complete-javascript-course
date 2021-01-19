'use strict';

// // function expression or function declaration is going to work. 
// //Only arrow function is not going to work

// const Person = function (firstName, birthday) {
//     //instances properties
//     this.firstName = firstName;
//     this.birthday = birthday;

//     //never do this - You should never create method in constructor function
//     // the reason for it, is that all instances of Person would have copy of this function,
//     //and that is going to damage the performance
//     // this.calcAge = function () {
//     //     console.log(2037 - this.birthYear)
//     // }

// }

// //way to call it but what is going on?
// // because of 'new'
// //1. New {} is created
// //2. function is called, this = {}
// //3 {} linked to prototype
// //4 function automatically return {not empty}

// const patryk = new Person('Patryk', 1990);

// console.log(patryk)

// console.log(patryk instanceof Person)

// // prototypes
// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthday)
// }

// patryk.calcAge()

// console.log(patryk.__proto__); // it is going to show to us the prototype property f he conctructor function

// console.log(patryk.__proto__ === Person.prototype)
// console.log(Person.prototype.isPrototypeOf(patryk))

// // adding the properties to proto

// Person.prototype.species = "homo sapiens";
// console.log(patryk.species)

// // this properties is inherited from proto
// console.log(patryk.hasOwnProperty('species'));
// console.log(patryk.hasOwnProperty('firstName'));

// //video 206
// console.log(patryk.__proto__)
// // object.prototype (top of prototype chain)
// console.log(patryk.__proto__.__proto__)
// console.log(Array.__proto__.__proto__)
// console.log(patryk.__proto__.__proto__.__proto__)

// console.log(Person.prototype.constructor)

// console.dir(Person.prototype.constructor)

// // functions are objects to so they have their own __proto__
// console.dir(Person.prototype.constructor.prototype)
// console.log(Person.prototype.constructor.prototype)

// // prototypes of Arrays - 
// const arr = [3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7]
// console.log(arr.__proto__)
// console.log(arr.__proto__ === Array.prototype)
// console.log(arr)


// //adding new methods to array - all arrays objects would get it!
// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };

// console.log(arr.unique())

// const h1 = document.querySelector('h1')

// console.dir(h1) // h1 has 6 - 7 levels of prototyping wow! 



// //functions
// console.dir(x => x + 1)

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. 
// The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// //constructor function
// const Auto = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Auto.prototype.accelerate = function () {
//     this.speed += 1
// };
// Auto.prototype.break = function () {
//     this.speed -= 1
// };

// const bmw = new Auto("BMW", 50);
// const mercedes = new Auto("Mercedes", 100);


// console.log(bmw.speed);
// console.log(mercedes.speed);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();

// console.log(bmw.speed)

// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();

// console.log(mercedes.speed)


// //vid 208 ES6 Classes
// //class expression
// // const PersonCL = class {}



// // Class declaration 
// // class PersonCL {
// //     constructor(firstName, birthYEar) {
// //         this.firstName = firstName;
// //         this.birthYEar = birthYEar
// //     }
// //     // this is going to be added  to the prototype 
// //     calcAge() {
// //         console.log(2037 - this.birthYEar)
// //     }
// // }

// // const jessica = new PersonCL('Jessica', 1996);

// // jessica.calcAge();

// // console.log(jessica.__proto__ === PersonCL.prototype);

// // PersonCL.prototype.greet = function () {
// //     console.log(`hey ${this.firstName}`);
// // }

// // jessica.greet()

// // console.log(jessica.__proto__ === PersonCL.prototype);
// //1. Classes are NOT hoisted
// // 2. Classes are first-class citizens
// // 3classes are executed in strict mode

// // 209 Setters and Getters
// console.log('*'.repeat(60))

// const account = {
//     owner: 'Jonas',
//     movements: [200, 300, 400, 500],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     },

// }

// console.log(account.latest);

// account.latest = 50;
// console.log(account.latest)
// console.log(account.movements)



// // WOW! setting a property that already exist - pattern! 
// class PersonCL {
//     constructor(fullName, birthYEar) {
//         this.fullName = fullName;
//         this.birthYEar = birthYEar
//     }
//     // this is going to be added  to the prototype 
//     // instance methods
//     calcAge() {
//         console.log(2037 - this.birthYEar)
//     }

//     set fullName(name) {
//         console.log(name)
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`);
//     }

//     get fullName() {
//         return this._fullName;
//     }


//     //static method - added to the cosntructor
//     static hey() {
//         console.log("hey")
//         console.log(this)
//     }
// }

// const jessica = new PersonCL('Jassica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();

// // const walter = new PersonCL('walter', 1995);
// // console.log(walter)
// // nice, because of the set fullName we were manage to validate the Walter name, that is not full name.
// // It is handy! 

// console.log('*'.repeat(60))
// //  video 210 Static Methods

// // examples: Number.parseFloat(12) or Array.from(document.querySelectorAll('h1))

// //it is not going to be inherited 
// Person.hey = function () {
//     console.log('Hey there!')
// }

// Person.hey()
// // jessica.hey() // it is not going to work because it is not going to be inherited because it is
// // stored inside the constructor obj not inside the prototype!

// PersonCL.hey();


// console.log('*'.repeat(60) + "Video 211 ")

// // video 211 Object.create

// const PersonProto = {
//     calcAge() {
//         console.log(2038 - this.birthYear);
//     },
//     // it is looking like constructor function but it has onthing to do with it, because we do no use new key word
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }


// // empty object linked to the prototype of PErsonProto. 
// const steven = Object.create(PersonProto)

// // populate the object manually
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge()

// //verification

// console.log(steven.__proto__)
// console.log(steven.__proto__ === PersonProto)

// const sarah = Object.create(PersonProto)

// // function which is going to 
// // this has nothing common with constructor or new key word
// sarah.init('Sarah', 1979)
// sarah.calcAge()

// console.log('*'.repeat(30) + "Video 212 " + '*'.repeat(30))
// // 212 Coding Challenge #2

// ///////////////////////////////////////
// // Coding Challenge #2

// /*
// 1. Re-create challenge 1, but this time using an ES6 class; // I did it by Object.create()
//         /*
//         1. Use a constructor function to implement a Car. A car has a make and a speed property. 
//         The speed property is the current speed of the car in km/h;
//         2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
//         3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
//         4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

//         DATA CAR 1: 'BMW' going at 120 km/h
//         DATA CAR 2: 'Mercedes' going at 95 km/h

// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */

// class CarsClasssSolution {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//         console.log(`Speed ${this.speed} km/h`)
//     }

//     brake() {
//         this.speed -= 5;
//         console.log(`Speed ${this.speed} km/h`)
//     }

//     // 2. Add a getter called 'speedUS' which returns the current speed in mi / h(divide by 1.6);
//     // 3. Add a setter called 'speedUS' which sets the current speed in mi / h(but converts it to km / h 
//     //before storing the value, by multiplying the input by 1.6);

//     get speedUS() {
//         return this.speed / 1.6
//     }
//     // always one argument
//     set speedUS(speed) {
//         this.speed = speed * 1.6
//     }
// }

// const CarsProto = {
//     init(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     },

//     accelerate() {
//         this.speed += 10;
//         console.log(`Speed ${this.speed} km/h`)
//     },

//     brake() {
//         this.speed -= 5;
//         console.log(`Speed ${this.speed} km/h`)
//     },

//     // 2. Add a getter called 'speedUS' which returns the current speed in mi / h(divide by 1.6);
//     // 3. Add a setter called 'speedUS' which sets the current speed in mi / h(but converts it to km / h 
//     //before storing the value, by multiplying the input by 1.6);

//     get speedUS() {
//         return this.speed / 1.6
//     },
//     // always one argument
//     set speedUS(speed) {
//         this.speed = speed * 1.6
//     },
// }



// const bmwProto = Object.create(CarsProto)
// bmwProto.init("bmw", 100);
// bmwProto.brake();
// bmwProto.accelerate();
// console.log(bmwProto.speedUS)

// bmwProto.speedUS = 100
// console.log(bmwProto)
// bmwProto.brake();
// bmwProto.accelerate();

// const volvo = new CarsClasssSolution('Volvo', 90);
// console.log(volvo);

// volvo.accelerate();
// console.log(volvo.speedUS);


console.log('*'.repeat(30) + "Video 213 " + '*'.repeat(30))
// // Video 213. Inheritance Between "Classes": Constructor Functions

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear)
// }


// //because we want to extend the previous usability we need to put the same () and add additional one
// const Student = function (firstName, birthYear, course) {
//     // he said there is better way for it.     if You are going doubplication like this
//     // and the person is going to be changed then we will not get changes inside the student
//     // this.firstName = firstName;
//     // this.birthYear = birthYear;

//     //this solution is not going to work because we call it like regular function we neww to use new
//     // Person(firstName, birthYear)

//     // by .call() we can define as a first argument this key word and pass it to constructor of person <3
//     Person.call(this, firstName, birthYear);

//     this.course = course;
// }

// // joining prototypes of bth objects person to student connection
// // At this level student.prototypes it will return empty object
// // if we would do it after adding some methods, it would overwrite them again to empty object

// //linking prototype
// Student.prototype = Object.create(Person.prototype);
// // why we can not do something like this?:
// // Student.prototype = Person.prototype;  // it would point the same thing!


// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`)
// }

// const mike = new Student('Mike', 2020, 'Computer Science')
// console.log(mike)
// mike.introduce()

// // check time!

// console.log(mike.__proto__)
// console.log(mike.__proto__.__proto__)

// mike.calcAge();

// // So basically because of the Object.create() we pushed JS to think that person construct is for student to
// // by code below we can fix it. !IMPORTANT 
// //Strange i had no error like it! LOL


// console.log(mike instanceof Student)
// console.log(mike instanceof Person)

// Student.prototype.constructor = Student;

// console.log(mike instanceof Student)
// console.log(mike instanceof Person)

// console.dir(Student.prototype.constructor)
// // console.log(Person.prototype.constructor)

// // mike.calcAge();
// // mike.calcAge();

// console.dir(mike.__proto__)
// console.dir(Student.prototype.constructor)


// console.log('*'.repeat(30) + "Video 214 " + '*'.repeat(30))
// // Video 214. Coding Challenge #3

// ///////////////////////////////////////
// // Coding Challenge #3
// const CarsFunctionConstructorSolution = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// CarsFunctionConstructorSolution.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`Speed ${this.speed} km/h`)
// }

// CarsFunctionConstructorSolution.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`Speed ${this.speed} km/h`)
// }

// // 2. Add a getter called 'speedUS' which returns the current speed in mi / h(divide by 1.6);
// // 3. Add a setter called 'speedUS' which sets the current speed in mi / h(but converts it to km / h 
// //before storing the value, by multiplying the input by 1.6);

// // get speedUS() {
// //     return this.speed / 1.6
// // }
// // // always one argument
// // set speedUS(speed) {
// //     this.speed = speed * 1.6
// // }

// // const CarsProto = {
// //     init(make, speed) {
// //         this.make = make;
// //         this.speed = speed;
// //     },

// //     accelerate() {
// //         this.speed += 10;
// //         console.log(`Speed ${this.speed} km/h`)
// //     },

// //     brake() {
// //         this.speed -= 5;
// //         console.log(`Speed ${this.speed} km/h`)
// //     },

// //     get speedUS() {
// //         return this.speed / 1.6
// //     },
// //     // always one argument
// //     set speedUS(speed) {
// //         this.speed = speed * 1.6
// //     },
// // }

// /*
// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀
// */



// const EV = function (make, speed, charge) {
//     CarsFunctionConstructorSolution.call(this, make, speed);
//     this.charge = charge;
// }
// // prototypes
// //!IMPORTANT I forgot about it: 
// EV.prototype = Object.create(CarsFunctionConstructorSolution.prototype)


// EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo
// };

// EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge--;
//     console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`);
// }


// // EV.prototype.constructor = EV;

// const tesla = new EV("TESLA", 50, 90);
// console.log(tesla)
// console.log(tesla instanceof EV)
// console.log(tesla instanceof CarsFunctionConstructorSolution)

// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.chargeBattery(90)
// tesla.accelerate();

// console.log(tesla)


console.log('*'.repeat(30) + "Video 214 " + '*'.repeat(30))
// Video 215 Inheritance Between "Classes": ES6 Classes


// class PersonCL {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }


//     //Methods
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.fullName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!`);
//     }

//     //static method
//     static hey() {
//         console.log(`Hey there`);
//     }
// }


// // Again classes are only abstraction of real things taking place behind scene

// class StudentCL extends PersonCL {
//     constructor(fullName, birthYear, course) {
//         // super is a constructor of parent class - calling the constructor basically
//         //it always have to happen first because it is resposible to create this in this superclass hmm
//         super(fullName, birthYear)
//         //now we can acccess the this key
//         this.course = course; // this is not obligatory, because instance can have the same properties but different methods
//     }

//     //it overwrite the method 1st to go in chain, must be use! 
//     calcAge() {
//         console.log(`I'm ${2037 - this.birthYear}`);
//     }
// }


// const martha = new StudentCL('Martha Jones', 2012, 'Computer Science');

// console.log(martha)
// martha.calcAge()

console.log('*'.repeat(30) + "Video 214 " + '*'.repeat(30))

// // video 216 Inheritance Between "Classes": Object.create


// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear
//     },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto)
// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// }

// const jay = Object.create(StudentProto)
// jay.init("Jay", 2010, "Computer Science");

// console.log('*'.repeat(30) + "Video 214 " + '*'.repeat(30))
// //video  217 Another Class Example


// class Account {
//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.pin = pin;
//         // normal we can specify default values at the beginning
//         this.movements = [];

//         console.log(`Thank You for opening an account ${owner}`)
//     }
//     // public interface - beeeettterr than manipulating directly on properties
//     deposit(val) {
//         this.movements.push(val);
//     }
//     withdraw(val) {
//         this.deposit(-val)
//     }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111)
// console.log(acc1)

// //so basically we can do movements by array method() 
// // but it is not good idea at all! 
// // it is specially true if you need to track very important data by creating the deposit and withdraw methods
// // acc1.movements.push(250);
// // acc1.movements.push(-140);

// // this is small abstraction but very useful.
// acc1.deposit(250);
// acc1.deposit(300);
// console.log(acc1);

console.log('*'.repeat(30) + "Video 214 " + '*'.repeat(30))
// video 218 Encapsulation: Protected Properties and Methods


