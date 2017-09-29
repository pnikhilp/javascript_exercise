/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */



function removeElement(inputArray){
  
  var len = inputArray.length;
  
    for(var j=0;j<len;j++){
      
      for(var i=0;i<len;i++){
        
        if(j!=i){
          
          if(inputArray[j]==inputArray[i]){
            
            inputArray.splice(i,1);
            
          }
          
        }
        
      }
      
    } 
  
  //outputArray.push(inputArray[0]);   

  return inputArray;
  
}

console.log(removeElement([1,2,3,1,8,1,2,"a","A","a"]));






