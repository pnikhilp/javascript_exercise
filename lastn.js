/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

var newArray = [];

function last(inputArray,limit){
  
    var len = inputArray.length;
    
  if (Array.isArray(inputArray)){
    
    if(limit == null){      
      
      return inputArray[len-1];
      
    }
   else{
       
       var diff = len-limit;
       
       for(let i=0;i<diff;i++){
           
         inputArray.shift();
           
       }
       
       return inputArray;
       
   }
    
  }
    
}

console.log(last([1,2,11,23,7],2));
console.log(last([7,9,0,-2,1],3));
/*
Exception: ReferenceError: input is not defined
last@Scratchpad/4:14:1
@Scratchpad/4:40:13
*/