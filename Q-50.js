/*
•	What is null coalescing  operator in JavaScript? Write one example with proper comments.
•	What is Optional Chaining Operator. Write one example on your own?
•	What is  immutability in JavaScript?

*/

//Nullish Coalescing Operator
//The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

function displayDetails() {
  return {
    id: 1,
    name: "Rama",
    gender: "male",
  };
}
const result = displayDetails().salary ?? 4000;
console.log(result);


//Optional Chaining
//Optional Chaining is a JavaScript feature that works well with TypeScript's null handling. 
//It allows accessing properties on an object, that may or may not exist, with a compact syntax. 
//It can be used with the ?. operator when accessing properties.

var obj = {
  car: {
    name: "Maruti",
    model: "Suzuki",
  }
};


console.log(obj.car?.name);

console.log(obj.truck?.name);

console.log(obj.car?.mileage);

//Immutable
//Primitive values are immutable (they are hardcoded and cannot be changed).

//if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

//An immutable value is one whose content cannot be changed without creating an entirely new value.

//In JavaScript, primitive values are immutable — once a primitive value is created, it cannot be changed, 
//although the variable that holds it may be reassigned another value. By contrast, objects and arrays are mutable by default — 
//their properties and elements can be changed without reassigning a new value.



/* It can be beneficial to use immutable objects for several reasons:

To improve performance (no planning for the object's future changes)
To reduce memory use (make object references instead of cloning the whole object)
Thread-safety (multiple threads can reference the same object without interfering with one other)
Lower developer mental burden (the object's state won't change and its behavior is always consistent)

Note that you can easily prove mutability: an object is mutable as long as it offers one way to change its properties. 
On the other hand, immutability is hard to prove if there are no language semantics to secure it — it is a matter of developer contract. 
For example, Object.freeze() is a language-level method to make an object immutable in JavaScript.
 */
