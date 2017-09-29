/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function difference(arrayOne,arrayTwo){
  
  var len1=arrayOne.length;
  var len2=arrayTwo.length;
  
  var output=[];
  
  for(var i=0;i<len1;i++){
    if(!arrayTwo.includes(arrayOne[i])){
      output.push(arrayOne[i]);
    }
  }
  
  for(var j=0;j<len2;j++){
    if(!arrayOne.includes(arrayTwo[j])){
      output.push(arrayTwo[j]);
    }
  }
  
  return output;
}

console.log(difference([12,30,2,1,32],[4,5,1,12,10]));
