/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function duplicate(inputArray){
  
   var len = inputArray.length;
  
  var out =[];
  
    for(var j=0;j<len;j++){
      
      for(var i=0;i<len;i++){
        
        if(j!=i){
          
          if(inputArray[j]==inputArray[i]){
            
            if(!out.includes(inputArray[i])){
              
              out.push(inputArray[i]);
              
            }
           
          }
          
        }
        
      }
      
    } 
  console.log("DUPLICATE ELEMENTS = "+out);
}
duplicate([1,2,3,1,1,3,4,2,4])