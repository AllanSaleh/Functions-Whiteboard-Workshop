// DRY - Don't Repeat Yourself

// function greet(name = 'Ben', topic = 'Java') {
//   // console.log("Hello " + name + "!");
//   console.log(`Hello, ${name}!`);
//   console.log('Welcome to the class');
//   console.log(`We are learning about functions in ${topic}!`);
// }

// greet('Allan', 'JavaScript');

// greet('Tom', 'Python');
// greet();

// logging prints are for the developer to confirm things are working
// returning gives a value back to the program so that we can use it later
function add(num1 = 5, num2 = 6) {
  // console.log(num1 + num2)
  return num1 + num2;
}

const result = add(5, 3);

console.log(`The result is ${result}`);
console.log(`The average is ${result / 2}`);

console.log(add());

// Write a function areaOfRectangle(width, height) that returns the area, not logs it. Then log the returned value.

// Scope
const message = 'Hello there!';

function makeMessage() {
  const anotherMessage = 'Another one';
  console.log(message, anotherMessage);
}

makeMessage();
console.log(message);

// Function
// function double(number) {
//   return number * 2;
// }

// JavaScript is a first class citizen

// Function expression
// const double = function (number) {
//   return number * 2;
// }

// Arrow function
// const double = number => {
//   return number * 2;
// }

const double = (number) => number * 2;

console.log(double(5));

// Challenge 1: Create a function that takes an argument and returns true if its even and false if its odd
function isEven(num) {
  return num % 2 != 0 ? false : true;
}

function even(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(even(7));

function evenOdd(num) {
  return num % 2 != 0 ? 'odd' : 'even';
}
console.log(evenOdd(2));
console.log(evenOdd(3));

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// Challenge 2: Create a function that returns the max of two numbers, it should accept 2 arguments and have default values for each and use an arrow function
const maxNumber = (number1, number2) => {
  return Math.max(number1, number2);
};
console.log(maxNumber(15, 23));

// const maxNumber = (num1, num2) => {
//   return Math.max(num1, num2);
// };
// console.log(maxNumber(45, 50));

const max = (num1, num2) => (num1 > num2 ? num1 : num2);
console.log(max(12, 5));

// Using multiple functions together
function add(a, b) {
  return a + b;
}

function doubleSum(a, b) {
  return add(a, b) * 2;
}

console.log(doubleSum(3, 4));

const average = (num1, num2) => {
  return add(num1, num2) / 2;
};

console.log('The average is', average(5, 15));

// Example 2
// const isAdult = (age) => {
//   if (age >= 18){
//     return true;
//   } else {
//     return false
//   }
// }

const isAdult = (age) => age >= 18;

function canEnterClub(age) {
  if (isAdult(age)) {
    return 'Welcome in!';
  } else {
    return 'Sorry, not old enough.';
  }
}

console.log(canEnterClub(17));

// Functions are first class citizens

function sayHi() {
  console.log('Hi!');
}

const greet = sayHi; // assign function to a variable
greet(); // run sayHi function

// Since functions are values, we can pass them into other functions. These are called callbacks
function doTwice(action) {
  action();
  action();

  // for (let i = 0; i < 2; i++) {
  //   action();
  // }
}

function runActionNTimes(times, action) {
  for (let i = 0; i < times; i++) {
    action();
  }
}

function laugh() {
  console.log('😂');
}

// doTwice(laugh)

runActionNTimes(8, laugh);
runActionNTimes(3, laugh);

// You can make a function return another function

function makeMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double2 = makeMultiplier(2);

const cube = makeMultiplier(3);

console.log(double2(5));
console.log(cube(5));

// Built-in callbacks
// foreach
// map
// filter

const numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(function (num) {
//   console.log('number: ', num);
// });
numbers.forEach((num) => console.log('number: ', num));

// map function: Calls a defined callback function on each element of an array, and returns an array that contains the results.

const doubled = numbers.map((num) => num * 2);

console.log('New Doubled array:', doubled);

// filter()

// from our numbers array, I want the even numbers

const evens = numbers.filter((num) => num % 2 == 0);

console.log('The evens of the numbers:', evens);

// Challenge 1
// Make a new array where every name is lowercased
// use map function
const names = ['Ben', 'Sally', 'AARON'];

// Challenge 2
// Filter out names shorter than 5 letters

// use loops inside functions
const printNumbersUpTo = (number) => {
  for (let i = 0; i <= number; i++) {
    console.log(i);
  }
};

printNumbersUpTo(5);

printNumbersUpTo(12);

// Pseudocode
const sumArray = (numbersArr) => {
  // 1. Create a variable called result = 0
  let result = 0;
  // 2. Loop over every element in the array
  for (let i = 0; i < numbersArr.length; i++) {
    // 3. add that element to the result
    // result = result + numbersArr[i]
    result += numbersArr[i];
  }
  // 4. return the result variable
  return result;
};

const nums = [2, 5, 6, 8];
console.log(sumArray(nums));
