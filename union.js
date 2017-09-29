/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function unionArray(arrayOne,arrayTwo){
  
  var output=arrayOne;
  
  var len=arrayTwo.length;
  
  for(var index=0;index<len;index++){
    
    if(!output.includes(arrayTwo[index])){
      
      output.push(arrayTwo[index]);
      
    }
    
  }
  return output;
}

console.log(unionArray([9,7,2,1,4],[3,2,1,5,1,10,4]));
