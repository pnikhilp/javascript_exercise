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
  
  if(Array.isArray(inputArray)){
    
   /* if(limit<0 || limit>len){
      
      //console.log("invalid")
      
    }
  
   else*/ if (limit==null) {
     
     return inputArray[0];
     
   }
    
  else{
    
    for(let i=0;i<limit;i++){
      
      newArray.push(inputArray[i]);
      
    }
    
    return ("FIRST "+limit+" ELEMENTS "+newArray);
    
   }
    
  }
}

console.log(first([18,2,3,4],3));

