/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function sortArray(arrayToSort){
  
  var lengthOfArray = arrayToSort.length;
  
  for (var i=0;i<lengthOfArray-1;i++){
    
    for(var j=i+1;j<lengthOfArray;j++){
      
      if(arrayToSort[i]>arrayToSort[j]){
        
        var temp = arrayToSort[i];
        
        arrayToSort[i] = arrayToSort[j];
        
        arrayToSort[j] = temp;
        
      }
      
    }
    
  }
  
  return arrayToSort;
  
}

var inputarray = [21,3,22,1,99,9,46,0,-20,8,4,2,6];

console.log("BEFORE SORTING = "+inputarray);

console.log("AFTER SORTING = "+sortArray(inputarray));


