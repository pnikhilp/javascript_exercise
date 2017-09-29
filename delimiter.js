/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function addDelimiter(inputArray,del){
  
  var outString = '';
  
  var len = inputArray.length;
  
  for(var index=0;index<len;index++){
    
    outString+=inputArray[index]
    //outString.push(inputArray[index])
    
    if(index!=len-1){
      
      //outString.push(del);
      outString+=del;
      
    }
    
  }
  
  console.log(outString);
  
}

addDelimiter([1,2,"A",3,4,"nikhil","calicut",10],"*");