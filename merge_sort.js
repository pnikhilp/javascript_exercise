/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function merge(arr,l,mid,r){
    
    var n1 = mid-1+1;
    var n2 = r-mid;
    var left=[];
    var right=[];
    var out=[];
    
 for(var i=0;i<n1;i++){

     left.push(arr[l+i]);
     
    }
    
    for(var j=0;j<n2;j++){
        right.push(arr[mid+j]);
    }
        
    var i=0;
    var j=0;
    var k=l;

  while(i<n1 && j<n2){
      
      if(left[i] <= right[j]){
          out.push(left[i])//=left[i];
          i++;          
      }
      else{
          out.push(right[j]);
          j++;         
      }
   k++;  
     
  }    
    
    /*while(i<n1){
        out.push(left[i]);
        i++;
        k++;
    }
    while(j<n2){
        out.push(right[j]);
        j++;
        k++;
    }
    //console.log(out);*/
   return out.concat(left.slice(i)).concat(right.slice(j))

}

function mergeSort(inArray,l,r){
   
  if (l<r){
    
    var mid = parseInt(l+r)/2;
    var left=inArray.slice()
    mergeSort(inArray,l,mid);
    mergeSort(inArray,mid+1,r);
    return(merge(inArray,l,mid,r));
   
    
  }
  
}

var inputArray=[5,3,1,2,4,9]

var len = inputArray.length;
    
console.log(mergeSort(inputArray,0,len));

