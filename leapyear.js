/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function leapYears(startYear,endYear){
  
  console.log("LEAP YEARS BETWEEN "+startYear+" AND "+endYear);
  console.log("--------------");
  
  for(var year=startYear;year<=endYear;year++){
    
    if( year%100 == 0 ){
      
      if( year%400 == 0 ){
        console.log(year)
      }
      
   }
    
    else if ( year%4 == 0 ){
      console.log(year)
    }

  }
}

leapYears(2680,2710);
