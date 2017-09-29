/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function shuffleArray(inputArray){
  
  console.log("SHUFFLED ARRAY");
  
  for (var i=inputArray.length-1;i>0;i--){
    
    for (var j=0;j<i;j++){
      
      var temp = inputArray[i];
      inputArray[i] = inputArray[j];
      inputArray[j] = temp;
      
    }
    
  }
  
  //console.log(temp)
  console.log(inputArray)
  
}

shuffleArray([9,2,3,4,5,8,90,7])
