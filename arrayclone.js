/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function array_Clone(inputArray){
  
 // if(Array.isArray(inputArray)){
     
    //var newArray = Array.from(inputArray);
    var newArray = inputArray.slice(0);
    return newArray;
    
  //}
  
}
console.log(array_Clone("bdahjsbdhj"));