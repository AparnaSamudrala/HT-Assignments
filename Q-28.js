/*
	Write a JavaScript program which accept a string as input and swap the case of each character. 
	For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/

let swapCase=(input)=>{
  var res = input.split('').map(function(char){
    return char === char.toUpperCase()? char.toLowerCase() : char.toUpperCase();
  }).join('');
  console.log(res);
}

swapCase('The Quick Brown Fox');

