/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function insertDash(inputNumber){
  
    number = inputNumber.toString();

    var newnumber = number[0];
    
    var len = number.length;
    
    var i=0;
    
    while (i<len-1){
        
        if(number[i]%2==0 && number[i+1]%2==0){
            
            newnumber+='-'+number[i+1];
            
        }
        else{
            
            newnumber+=+number[i+1];
            
        }
        
        i++;
    }
    
    return newnumber;
    //return number[0];
    
}  

console.log(insertDash(2625468));


  /*var number = inputNumber;
  
  while (number>0){
    
    var numberOne = number%10;
    
    number = Math.floor(number/10);
    
    numberArray.unshift(numberOne);
    
  }
    len = numberArray.length;
    
   return numberArray.toString();
  //return numberArray;
  
}*/



   /* console.log(numberOne);
     //numberArray.push(numberOne);
    
    var numberTwo = number%10;
    
    number = Math.floor(number/10);
    
    
    if(numberTwo%2==0 && numberOne%2==0){
    
    console.log("-");
      //numberArray.push("-");
      
    }
    
    console.log(numberTwo);
    //numberArray.push(numberTwo);
    
    
  }
  
  //return number+12;
  //return Array.from(number);
  
}

//console.log(insertDash(1247348));
insertDash(28233344);*/


/*
Exception: SyntaxError: unterminated comment
@Scratchpad/4:31
*/