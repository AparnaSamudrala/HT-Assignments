/*
	Write a simple JavaScript program to join all elements of the following array into a string.  
		Sample array : myColor = ["Red", "Green", "White", "Black"];
		Expected Output :
		"Red,Green,White,Black"
		"Red,Green,White,Black"
		"Red+Green+White+Black"

*/

var myColor=["Red","Green","White","Black"];

var sample1= myColor.slice(',');

console.log(`"${sample1}"`);

var sample2=myColor.join("+");

console.log(`"${sample2}"`);