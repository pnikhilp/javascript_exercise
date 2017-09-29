/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 
 */

var newArray = [];

function addElements(){
  
  //console.log(arguments.length); 
    
   //var element = prompt("Enter the element to insert");
  
   //newArray.push(element);
  
   for(i=0;i<arguments.length;i++){
    
    newArray.push(arguments[i]);  
    
  }
  
  return newArray;
  
  //return newArray;
  
}

console.log(addElements(6,9,"Nikhil",10,100));
