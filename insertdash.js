/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function insertDash(inputNumber){
  
  var number = inputNumber;
  
  while (number>0){
    
    var numberOne = number%10;
    
    number = Math.floor(number/10);
    
    console.log(numberOne);
    
    var numberTwo = number%10;
    
    number = Math.floor(number/10);
    
    
    if(numberTwo%2==0 && numberOne%2==0){
    
    console.log("-");
      
    }
    
    console.log(numberTwo);
    
    
    
  }
  
  //return number+12;
  //return Array.from(number);
  
}

console.log(insertDash(1247348));