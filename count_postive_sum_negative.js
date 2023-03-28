// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countPositivesSumNegatives(arr) {
//   check if arr is empty
  if (!arr || arr.length === 0) {
//     return an empty arr
    return [];
  }
  
//   to count the num of positive num
  let count = 0;
//   to store the sum of the negatives num
  let negativeSum = 0;
  
//   iterate through each el
  for (let i = 0; i < arr.length; i++) {
//     if arr greater than zero
    if (arr[i] > 0) {
//       count increment by 1
      count++;
//     if el less than zero
    } else if (arr[i] < 0) {
//       the sum increase by the value of el
      negativeSum += arr[i];
    }
  }
  
//   return arr with both balues of count and negative sum
  return [count, negativeSum];
}