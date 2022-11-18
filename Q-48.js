/*
	Add, subtract ,calculate average of all elements of an array using reduce() method. 

const numbers = [175, 50, 25];
Addition: 250
Subtraction: 100
Average: 83.33333333333333

*/

const numbers = [175, 50, 25]; 

let Addition = numbers.reduce((acc,curr)=>{
  return acc+curr
});

let Subtract = numbers.reduce((acc,curr)=>{
 return acc-curr
});

let Average = numbers.reduce((acc, curr) => (acc + curr)) / numbers.length;

console.log("Addition: "+Addition);
console.log("Subtraction: "+Subtract);
console.log("Average: "+ Average);
