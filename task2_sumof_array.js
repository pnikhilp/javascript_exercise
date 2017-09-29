/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function sumOfArray(inputArray){
  
  console.log("INPUT ARRAY = "+inputArray);
  
  var lengthOfArray = inputArray.length;
  
  var sum = 0;
  
  for(var index=0;index<lengthOfArray;index++){
    
    sum=sum+inputArray[index];
    
  }
  
return sum;
  
}

console.log("SUM OF ARRAY = "+sumOfArray([1,2,3,4,5,6]));

