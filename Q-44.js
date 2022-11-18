/*
 Problem Statement
•	Write a code to  create  an Object using Object Literal. 
•	Use Object.values() method to get values of property in an Object.
•	Write A JavaScript program to get property names and it's values.

*/

// Object Literal 

let Obj= {
empName: "Radha",
empCompany: "Cognizant",
empDesg: "Associate",
displayEmp : function (){
    console.log("Employee details: ");
},
values: function(){
console.log(`Object Name is:${Obj.empName} ,Company is: ${Obj.empCompany} and Designation is ${Obj.empDesg}`);
}
}

console.log("The Properties Of Object are: "+ Object.getOwnPropertyNames(Obj));
Obj.values();
