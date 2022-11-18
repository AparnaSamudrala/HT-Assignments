/*
	Write a JavaScript function to sort the following array of objects by title value.(Use ES6 Arrow function)
		Sample object:
		var library = [ 
		   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
		   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
		   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
		   ];

*/

var library = [  

    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
 
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
 
    ]; 

const compareByTitle = (a,b)=>{
    if (a.title < b.title)
		return -1;
  else if (a.title > b.title)
		return 1;
	else
	return 0;
}
 
console.log(library.sort(compareByTitle));