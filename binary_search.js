/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function binarySearch(inputArray,item,low,high){
  
  var len = inputArray.length;

  var mid = parseInt((low+high)/2);
  
  if(item == inputArray[mid]){
    
    console.log(item+" FOUND AT INDEX "+mid);
    
  }
  
  else if(item<inputArray[mid]){
 
    high = mid-1;
    
    binarySearch(inputArray,item,low,high);    
    
  }
  
  else if(item>inputArray[mid]){
    
    low = mid+1;

    binarySearch(inputArray,item,low,high);    
    
  }
  
}

var inArray=[1,2,7,8,9,10];

var l = 0;

var h = inArray.length;

binarySearch(inArray,2,l,h);



