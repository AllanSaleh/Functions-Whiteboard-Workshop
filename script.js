// DRY - Don't Repeat Yourself

function greet(name = 'Ben', topic = 'Java') {
  // console.log("Hello " + name + "!");
  console.log(`Hello, ${name}!`);
  console.log('Welcome to the class');
  console.log(`We are learning about functions in ${topic}!`);
}

greet('Allan', 'JavaScript');

greet('Tom', 'Python');
greet();

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
  return add(num1,num2)/2;
}

console.log("The average is",average(5,15))


// Example 2
// const isAdult = (age) => {
//   if (age >= 18){
//     return true;
//   } else {
//     return false
//   }
// }


const isAdult = age => age >= 18;

function canEnterClub(age){
  if(isAdult(age)){
    return "Welcome in!"
  } else {
    return "Sorry, not old enough."
  }
}

console.log(canEnterClub(17))


