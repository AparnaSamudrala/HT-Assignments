/*
	Write  es6 function that shows the usage of different scenario of arrow functions. 
•	Multi parameter, multi line code:
•	No parameter, single line code:
•	One parameter, single line code:

*/

// Arrow Function (Multi Parameter,multi line code)
 let Employee=(name,age,sal)=>{
    console.log("Employee name is:"+ name+" "+"age:"+ age+" "+"salary:"+ sal);
 }
Employee("Rajesh",43,40000);

// Arrow Function with No parameter, single line code

let demo=()=>console.log("Arrow functions with no params demo");
demo();

// Arrow function with One parameter, single line code

let arrowOneParam=(one)=>console.log("The only parameter is "+ `'${one}'`);

arrowOneParam("one");