/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function sumofIndex(arrayOne,arrayTwo){
  
  var lenOne = arrayOne.length;
  
  var lenTwo = arrayTwo.length;
  
  var output = [];
  
  if(lenOne>lenTwo){
   var large=arrayOne;
    var small=arrayTwo
  }
  else{    
    large = arrayTwo;
    small=arrayOne;
  }
  for (var index=0;index<small.length;index++){
  
     output.push(small[index]+large[index]);

  }
  
  for(var i=small.length;i<large.length;i++){
    output.push(large[i]);
  }
  console.log(output);
  
}

sumofIndex([3,4,1,2,10,3,4,20,101],[5,10,3,6,1,9]);

