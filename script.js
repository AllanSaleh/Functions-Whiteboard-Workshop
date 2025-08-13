// DRY - Don't Repeat Yourself

function greet(name, topic) {
  // console.log("Hello " + name + "!");
  console.log(`Hello, ${name}!`);
  console.log('Welcome to the class');
  console.log(`We are learning about functions in ${topic}!`);
}

greet("Allan", "JavaScript");

greet('Tom', "Python");



function add(num1, num2){
  console.log(num1 + num2)
  // return num1 + num2;
}

const result = add(5,3)

console.log(`The result is ${result}`)
console.log(`The average is ${result/2}`)


// Write a function areaOfRectangle(width, height) that returns the area, not logs it. Then log the returned value.
