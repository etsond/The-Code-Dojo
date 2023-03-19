// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// first sol

// define the func
function digitize(n) {
    // converts integer "n" to a string it with an empty string (""), then split to an array
  let initialArr = (""+n).split('');
//   initialize an empty array to store reversed digits
  let reversedArr = [];
//   iterate through the initial array starting from the end until it reaches the first character
  for (let i = initialArr.length - 1; i >= 0; i--) {
    // take first char in the initial arr which is the last digit conver it to an integer & assign it to the ith pos
    // Then shift to remove 1st el from initialArr so that the next iteration of the loop will process the next digit of the input integer
    reversedArr[i] = parseInt(initialArr.shift(),10);
  }
  //returns the reversedArr array which contains the digits of the input integer in reverse order. 35231 => [1,3,2,5,3]
  return reversedArr;
}

// testing
console.log(digitize(123)); // return [3, 2, 1]
console.log(digitize(987654321)); // return  [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(digitize(8)); //return [8]
console.log(digitize(0)); // return [0]


// short

function digitize(n) {
  //code here
  return n.toString().split('').reverse().map(Number)
}