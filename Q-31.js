/*
	. Write a JavaScript function to find an array contains a specific element. 
		Test data :
		arr = [2, 5, 9, 6];
		console.log(contains(arr, 5));
		[True]

*/

const arr=[2,5,9,6];
function contains(array,value){
    return arr.includes(value);
}
console.log(contains(arr,2));