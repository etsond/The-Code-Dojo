// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// function findUniq(arr) {
 
//     // assign to null, until we find the num
//   let diffNum = null;
  
//   // Iterate through the array
//   for (let i = 0; i < arr.length; i++) {
    
//     let count = 0;
    
//     // Check each num against the rest of the array
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
    
//     // If an el has a count of 1, its diffNum
//     if (count === 1) {
//       diffNum = arr[i];
//       break;
//     }
//   }
  
//   return diffNum;
// }

// codewars returned failed because of long array so i had to find a better solution


function findUniq(arr) {
  // sort arr in ascending order
  arr.sort(function(a, b){return a - b});
  
  // Check first two el
  if (arr[0] !== arr[1]) {
    return arr[0];
  }
  
  // Check ls two el
  if (arr[arr.length-1] !== arr[arr.length-2]) {
    return arr[arr.length-1];
  }
  
  // Iterate through the rest of arr
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i-1] && arr[i] !== arr[i+1]) {
      return arr[i];
    }
  }
}



// refactored

function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}