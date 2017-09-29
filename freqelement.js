/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function freqElement(inputArray){
  
  var outputArray = [];
    
  var len =inputArray.length;
  
  for (var i=0;i<len;i++){
      
      var count = 0;
      
      for(var j=0;j<len;j++){
      
       if (inputArray[i] === inputArray[j]){
        
        count++;
         
       }    
   
      }
      
    outputArray.push(count);
      
  }
     
  //return countArray;
  var freq = Math.max(...outputArray);
  return inputArray[outputArray.indexOf(freq)] +'( '+ freq + ' times)';
  
}

console.log("MOST FREQUENT ITEM = "+freqElement(['a',2,3,1,2,6,7,1,'a','a','a','a',1]));
