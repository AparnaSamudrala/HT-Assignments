/*
	Write a JavaScript function to filter false, null, 0 and blank values from an array.
Test Data :
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
[58, "abcd", true]
Note: Use filter() function of an array.

*/

//[58, '', 'abcd', true, null, false, 0].filter(ele => (ele != false && ele != null && ele !=0 && ele != ""));

function filter_array_values(arr) {
    arr = arr.filter(ele => (ele != false && ele != null && ele !=0 && ele != ""));
    return arr;
  }
  
  console.log(filter_array_values([58, '', "abcd", true, null, false, 0]));
  
  