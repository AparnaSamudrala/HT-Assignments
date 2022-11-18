/*
	. Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.
		Test Data :
		console.log(array_range(1, 4));
		[1, 2, 3, 4]
		console.log(array_range(-6, 4));
		[-6, -5, -4, -3]

*/

let array_range=(from, to)=> {
    var res = [];
    for (let i = from; i <= to; i++) {
        res.push(i);
    }
    return res;
}

console.log(array_range(1, 4)); 

console.log(array_range(-6, -3)); 