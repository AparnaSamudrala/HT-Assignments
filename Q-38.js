/*
	Problem Statement:
Create an array example   to understand the concept of Array  Rest and Spread operators, and the concept of destructuring. 
Note: Write your own example and add comment for Rest operator, spread operator and array destructuring.

*/

//Spread Operator
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

//Example for spread operator

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined);


//The Rest operator is often used in combination with destructuring.

// Example for Rest Operator.
//Assign the first and second items from numbers to variables and put the rest in an array:
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

document.write("<p>" + one + "</p>");
document.write("<p>" + two + "</p>");
document.write("<p>" + rest + "</p>");

//Destructuring
//To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

//Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

//Destructuring makes it easy to extract only what is needed.

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;

//If we only want the car and suv we can simply leave out the truck but keep the comma:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;

//Destructuring comes in handy when a function returns an array:

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

document.write("<p>Sum: " + add + "</p>");
document.write("<p>Difference " + subtract + "</p>");
document.write("<p>Product: " + multiply + "</p>");
document.write("<p>Quotient " + divide + "</p>");
