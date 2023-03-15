// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    // sum of all elements in arr1
 const sum1 = arr1.reduce( (acc,current) => acc + current,0); 
//  sum of all elements in arr2
 const sum2 = arr2.reduce( ( acc,current) => acc + current,0);
//  add 
 return sum1+ sum2
}