// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


function rowSumOddNumbers(n) {
  // calculate the first odd number in the nth row
  const start = (n - 1) * n + 1; 
  // initialize a variable to store the sum of odd numbers
  let sum = 0; 
  // loop through the odd numbers in the nth row
  for (let i = 0; i < n; i++) { 
     // add each odd number to the sum
    sum += start + 2 * i;
  }
  return sum; // return the sum of the odd numbers in the nth row
}