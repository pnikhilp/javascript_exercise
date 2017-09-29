/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function stringCase(inp){
  
  var len = inp.length;
  var out='';
  
  for (var i=0;i<len;i++){
    
      if(inp[i]==inp[i].toLowerCase()){
              
        out+=inp[i].toUpperCase();    
        
      }
    else{
      
      out+=inp[i].toLowerCase();
      
    }
    //console.log(inputString[i]);
    
  }
  
  //console.log(out);
  return out;
  
}

console.log(stringCase('abcdE fGhI'));
