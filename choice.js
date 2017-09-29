/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function printChoice(inputArray){
  
  var order = ["th","st","nd","rd"];
  
  var len = inputArray.length;
  
  var i = 1;
  
  while(i<=len){
        
   if(parseInt(i/10) != 1){
     
     if(i%10 == 1){        
        
        console.log(i+order[1]+" choice is "+inputArray[i-1]);

      }
        else if(i%10 == 2){        
        
        console.log(i+order[2]+" choice is "+inputArray[i-1]);

      }
    
      else if(i%10 == 3){        
        
        console.log(i+order[3]+" choice is "+inputArray[i-1]);

      }   
         
         else{
               
               console.log(i+order[0]+" choice is "+inputArray[i-1]);
               
         }
    
  }
    
    else{
      
      console.log(i+order[0]+" choice is "+inputArray[i-1]);
      
    }
        
   i++;  
 
  }
      
}
printChoice(["Blue","Red",1,2,3,4,5,6,7,8,9,12,11,111,23,21,34,21,18,19,20,21,22,23,24,0,0,0,0,0]);

