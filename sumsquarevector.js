/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function vectorSum(inputVector){
  
  var sum=0;
  
  for(i=0;i<inputVector.length;i++){
    
    sum += inputVector[i]*inputVector[i];
    
  }
  
  console.log("SUM OF SQUARES OF ["+inputVector+"] = "+sum);
  
}

vectorSum([5,2,3,5]);