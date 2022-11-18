/*
	 Write a JavaScript function to move an array element from one position to another.  
		Test Data :
		console.log(move([10, 20, 30, 40, 50], 0, 2));
		[20, 30, 10, 40, 50]
		console.log(move([10, 20, 30, 40, 50], -1, -2));
		[10, 20, 30, 50, 40]

*/
function move(arr, fromIndex, toIndex) {
    if (fromIndex < 0 || toIndex < 0) {
      fromIndex += arr.length;
      toIndex += arr.length;
    }
    else if (toIndex >= arr.length) {
      let j = toIndex - arr.length + 1;
		  if (j--) {
			arr.push(undefined);
		  }
    }
    arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
    return arr;
  };
 
console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));