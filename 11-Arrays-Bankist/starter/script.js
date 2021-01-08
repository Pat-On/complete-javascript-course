'use strict';

///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, 
and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")

4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

//  use for each in that case

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const dogsJuliaFixed = dogsJulia.slice(1, -2);

// const totalData = [...dogsJuliaFixed, ...dogsKate];
// for (let [i, item] of totalData.entries()) {
//   console.log(item >= 3 ? `Dog number ${i + 1} is an adult, and is ${item} years old` : `Dog number ${i + 1} is still a puppy 🐶`)
// }


// const checkDogs = function (dogs1, dogs2) {
//   const dogsCorrected = dogs1.slice(1, -2);
//   const dogs = dogsCorrected.concat(dogs2);
//   dogs.forEach(function (item, i) { console.log(item >= 3 ? `Dog number ${i + 1} is an adult, and is ${item} years old` : `Dog number ${i + 1} is still a puppy 🐶`) })
// }

// checkDogs(dogsJulia, dogsKate);
// console.log("*".repeat(50))
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);



// const arr = [1, 2, 3, 4, 5]
// arr.forEach(function (item, i) { arr[i] = item * 4 })
// const arr2 = arr.map(item => item * 4)
// console.log(arr)
// console.log(...arr)
// console.log(arr2)
// console.log(...arr2)
/*


///////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: 
if the dog is <= 2 years old, humanAge = 2 * dogAge. 
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (arr) {
//   // const arrDogAgeToHuman = arr;
//   const dogToHuman = arr.map(function (item) {
//     if (item <= 2) {
//       return item * 2
//     } else if (item > 2) {
//       return item * 4 + 16
//     }
//   }).filter(item => item > 18)

//   let sumOfYear = dogToHuman.reduce((acc, item) => acc += item)
//   let averageAge = sumOfYear / dogToHuman.length;

//   console.log(`Ages of the dog inside the list: ${dogToHuman} and average age of dogs in human years: ${averageAge}`)
// }

// const calcAverageHumanAge = function (arr) {
//   const dogToHuman = arr.map((item) => item <= 2 ? item * 2 : item * 4 + 16).filter(item => item > 18)

//   let sumOfYear = dogToHuman.reduce((acc, item) => acc += item)
//   let averageAge = Math.round(sumOfYear / dogToHuman.length);

//   console.log(`Ages of the dog inside the list: ${dogToHuman} and average age of dogs in human years: ${averageAge}`)
// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

///////////////////////////////////////
// Coding Challenge #3

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


const calcAverageHumanAge = function (arr) {
  const dogToHuman = arr.map((item) => item <= 2 ? item * 2 : item * 4 + 16).filter(item => item > 18)
    .reduce((acc, item, index, arr) => acc + (item / arr.length), 0)

  // let sumOfYear = dogToHuman
  // let averageAge = Math.round(sumOfYear / dogToHuman.length);

  console.log(`Average ${dogToHuman}`)
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])



///////////////////////////////////////
// Coding Challenge #4

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property.
 Do NOT create a new array, simply loop over the array. 
 Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, 
so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). 
Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:


GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// Task 1
// for (let item of dogs) {
//   item.recommendedFood = Math.round(item.weight ** 0.75 * 28);
// }
console.log("*1*".repeat(40))
dogs.forEach(dog => dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28))

// for (let item of dogs) {
//   console.log(`Recommended portion for dog in grams ${item.recommendedFood}`)
// }

dogs.forEach(dog => console.log(`Recommended portion for dog in grams ${dog.recommendedFood}`))

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little.HINT: Some dogs have multiple owners,
//   so you first need to find Sarah in the owners array, and so this one is a bit tricky(on purpose) 🤓
console.log("*2*".repeat(40))

// for (let item of dogs) {
//   if (item.owners.includes('Sarah')) {
//     if (item.recommendedFood < item.curFood) console.log("Dog eat to much")
//     if (item.recommendedFood > item.curFood) console.log("Dog eat to less")
//     if (item.recommendedFood === item.curFood) console.log("Dog eat proper portion")
//   }
// }

dogs.forEach(dog => {
  if (dog.recommendedFood < dog.curFood) console.log("Dog eat to much")
  if (dog.recommendedFood > dog.curFood) console.log("Dog eat to less")
  if (dog.recommendedFood === dog.curFood) console.log("Dog eat proper portion")
})

// 3. Create an array containing all owners of dogs who eat too much('ownersEatTooMuch') 
// and an array with all owners of dogs who eat too little('ownersEatTooLittle').
console.log("*3*".repeat(40))
const ownersEatTooMuch = [];
let ownersEatTooLittle = []
for (let item of dogs) {
  if (item.recommendedFood < item.curFood) ownersEatTooMuch.push(...item.owners)
  if (item.recommendedFood > item.curFood) ownersEatTooLittle.push(...item.owners)
}

console.log(...ownersEatTooMuch)
console.log(...ownersEatTooLittle)

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" 
// and "Sarah and John and Michael's dogs eat too little!"
console.log("*4*".repeat(40))

let toMuchStr = '';
for (let index in ownersEatTooMuch) {
  if (index < ownersEatTooMuch.length - 1) {
    toMuchStr = toMuchStr + `${ownersEatTooMuch[index]} and `
  } else {
    toMuchStr = toMuchStr + `${ownersEatTooMuch[index]}'s dogs eat too much!`
  }
}

let toLessStr = '';
for (let index in ownersEatTooLittle) {
  if (index < ownersEatTooLittle.length - 1) {
    toLessStr = toLessStr + `${ownersEatTooLittle[index]} and `
  } else {
    toLessStr = toLessStr + `${ownersEatTooLittle[index]}'s dogs eat too little!`
  }
}

console.log(toMuchStr)
console.log(toLessStr)

console.log("*".repeat(40))
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`)
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too little!`)

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended(just true or false)
console.log("*5*".repeat(40))

// for (let item of dogs) console.log(item.recommendedFood === item.curFood) // HE want .some()

console.log(`Is there any dog eating exactly the amount of true? ${dogs.some(item => item.recommendedFood === item.curFood) ? "Yes there is!" : "No there is none!"}`)


// 6. Log to the console whether there is any dog eating an OKAY amount of food(just true or false)
// HINT 2: Being within a range 10 % above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10).
// Basically, the current portion should be between 90 % and 110 % of the recommended portion.

console.log("*6*".repeat(40))
// for (let item of dogs) console.log(((item.recommendedFood * 0.90) <= item.curFood && (item.recommendedFood * 1.10) >= item.curFood))

console.log(`Is there any dog eating OKAY amount of true? ${dogs.some(item =>
  ((item.recommendedFood * 0.90) <= item.curFood && (item.recommendedFood * 1.10) >= item.curFood)) ? "Yes there is!" : "No there is none!"}`)


// 7. Create an array containing the dogs that are eating an OKAY amount of food(try to reuse the condition used in 6.)
console.log("*7*".repeat(40))

const dogsEatingEnough = [];
for (let item of dogs) {
  if (((item.recommendedFood * 0.90) <= item.curFood && (item.recommendedFood * 1.10) >= item.curFood)) dogsEatingEnough.push(item);
}

console.log(...dogsEatingEnough)

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order(keep in mind that the portions are inside the array's objects)
console.log("*8*".repeat(40))

//shallow copy 


let dogggy = dogs.map(item => item).sort((a, b) => b.recommendedFood - a.recommendedFood)



// console.log("I'm here " + dogggy)
// console.log("I'm here " + dogs)

for (let item of dogggy) console.log(item.recommendedFood)
console.log(" * ".repeat(40))

dogs.sort((a, b) => b.recommendedFood - a.recommendedFood);
for (let item of dogs) console.log(item.recommendedFood)


console.log(" * ".repeat(40))
// const dogsShallowCopy = dogs.slice();
const dogsShallowCopy = [...dogs];
dogsShallowCopy.sort((a, b) => a.recommendedFood - b.recommendedFood);
for (let item of dogsShallowCopy) console.log(item.recommendedFood)



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BANKIST APP

// Data
/*
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 40 0, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LEcCTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
*/