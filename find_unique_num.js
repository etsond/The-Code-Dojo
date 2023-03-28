// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

function findUniq(arr) {
 
    // assign to null, until we find the num
  let diffNum = null;
  
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    
    let count = 0;
    
    // Check each num against the rest of the array
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    
    // If an el has a count of 1, its diffNum
    if (count === 1) {
      diffNum = arr[i];
      break;
    }
  }
  
  return diffNum;
}
