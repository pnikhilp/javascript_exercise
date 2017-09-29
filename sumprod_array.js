/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function sumProduct(inputArray){
  
  var sum = 0;
  
  var prod = 1;
  
  for(i=0;i<inputArray.length;i++){
    
    sum += inputArray[i];
    
    prod *= inputArray[i];
    
  }
  
  console.log("SUM = "+sum);
  console.log("PRODUCT = "+prod);
  
}

sumProduct([2,3,1,5]);