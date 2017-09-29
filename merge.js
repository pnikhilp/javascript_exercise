/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */


function merge (left, right) {
  
  //console.log(left);
  //console.log(right);
  
  var output = [];
  
  var i = 0;
  
  var j = 0;
  
  var n1 = left.length;
  
  var n2 = right.length;
  
  
  while (i < n1 && j < n2) {
    
    if (left[i] < right[j]) {
      
      output.push(left[i])
      //console.log(output);
      i++;
      
    } else {
      
      output.push(right[j])
      //console.log(output);
      j++;
      
    }
    console.log(output);
    
  }
  //return output;
  //console.log(output);
  //return left.slice(i).concat(right.slice(j));
  // return output.concat(right.slice(j));
  return output.concat(left.slice(i)).concat(right.slice(j));
  
}


function mergeSort (inputArray) {
  
  if (inputArray.length === 1) {
    
    return inputArray;
    
  }

  var mid = parseInt(inputArray.length / 2) 
  var left = inputArray.slice(0, mid) 
  var right = inputArray.slice(mid)
  //mergeSort(left);
  //mergeSort(right);
  //merge(left,right);
  //console.log(left);
  //console.log(right);
  return merge(mergeSort(left),mergeSort(right));
  
  
}

//var inArray = [87,43,12,1,4,2,7,14];

console.log(mergeSort([9,8,1,7,34,2,12,10])); 
