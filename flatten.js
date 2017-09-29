/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */


function flattenArray(inArray,output){
  
  var len = inArray.length;
   
  for(var i=0;i<len;i++){
    
    if(Array.isArray(inArray[i])){

         flattenArray(inArray[i],output);  
    }
    
    else{
      
      if(!output.includes(inArray[i]))
        
        output.push(inArray[i]);
      
    }
    
  }
  
  return output;

}
var output=[];

console.log("FLATTENED ARRAY")

console.log(flattenArray([[1,2,[3,[1,2,90]],[100,200]],10,20],output));