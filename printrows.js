/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function printRows(input){
  
 for(var i=0;i<input.length;i++){
   
   var ar=input[i]
   
   console.log("row "+i);
   console.log("-----");
   
   for(var j=0;j<ar.length;j++){
     
     console.log(ar[j]);
     
   }
   
 }
  
  //return input;
  
}

printRows([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);
