/* 
Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.  
	Test Data :
	console.log(last([7, 9, 0, -2]));
	console.log(last([7, 9, 0, -2],3));
	console.log(last([7, 9, 0, -2],6));
	Expected Output :
	-2
	[9, 0, -2]
	[7, 9, 0, -2]
*/
var last= (arr,n)=>{
 if(n==null){
    return arr[arr.length-1];
 }
 else if(n<=arr.length-1){ 
     return arr.slice(Math.max(arr.length - n, 0));
 }
 else
 {
    return arr;
 }
}
console.log(last([7,9,0,-2]));
console.log(last([7,9,0,-2],3));
console.log(last([7,9,0,-2],6));