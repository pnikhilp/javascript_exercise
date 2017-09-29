/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function is_array(input){
  if(Array.isArray(input)){
    return true;
  }
  else{
    return false;
  }
}
console.log(is_array([1,2,3,'a','b','c']));
console.log(is_array('nikhil'));


/*let arrayornot=(input)=>{
  if (Array.isArray(input)){
    return true;
  }
  else {
    return false;
  }
}
console.log(arrayornot('nikhil'));
*/

/*
Exception: TypeError: input.isArray is not a function
is_array@Scratchpad/1:11:6
@Scratchpad/1:18:13
*/
/*
Exception: TypeError: input.isarray is not a function
is_array@Scratchpad/1:11:6
@Scratchpad/1:18:13
*/
/*
Exception: TypeError: Array.isarray is not a function
is_array@Scratchpad/1:11:6
@Scratchpad/1:18:13
*/
/*
Exception: SyntaxError: redeclaration of const isarray
@Scratchpad/1:1:1
*/
/*
Exception: SyntaxError: redeclaration of const isarray
@Scratchpad/1:1:1
*/
/*
Exception: SyntaxError: redeclaration of const isarray
@Scratchpad/1:1:1
*/
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:28
*/
/*
Exception: SyntaxError: redeclaration of let arrayornot
@Scratchpad/1:1:1
*/
/*
Exception: SyntaxError: redeclaration of let arrayornot
@Scratchpad/1:1:1
*/
/*
Exception: SyntaxError: redeclaration of let arrayornot
@Scratchpad/1:1:1
*/