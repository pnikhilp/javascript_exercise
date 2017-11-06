/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

var newArray=[];

function first(inputArray,limit){
  
  var len = inputArray.length;
  
  if (limit==null) {
     
     return inputArray[0];
     
   }
    if(limit<0){
      
      return inputArray.slice(limit,0)
      
    }
    if(limit>len){
      
      return inputArray
      
    }
    
  else{
    
    return inputArray.slice(0,limit)
    
   }
    
}

console.log(first([18,2,3,4,9]));
console.log(first([18,2,3,4,9],4));
console.log(first([18,2,3,4,9],-3));
console.log(first([18,2,3,4,9],8));


